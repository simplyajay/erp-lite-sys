import OrganizationService from "@/modules/entities/organization/organization.service";
import UserService from "@/modules/entities/user/user.service";
import sessionService from "../session/auth.session.service";
import { nanoid } from "nanoid";
import { validateUniqueness, validateProfanity } from "@/core/services/validateFields.service.js";
import { validatePassword } from "@/core/services/validatePassword.service";
import { ExpectedError, ICookie, IExpectedError } from "@/core/services/services";
import { IPublicSession, ISessionMetaData, ISessionResponse } from "../session/auth.session";

const organizationService = new OrganizationService();
const userService = new UserService();

type AccountType = "organization" | "individual";
export type FlowKey = "accountType" | "businessInfo" | "personalInfo" | "accountInfo";
export const FlowMap: FlowKey[] = ["accountType", "businessInfo", "personalInfo", "accountInfo"];

export interface IRegSessionCachedData {
  identity: string;
  completedSteps: FlowKey[];
  accountType?: AccountType;
  businessInfo?: Record<string, unknown>;
  personalInfo?: Record<string, unknown>;
  accountInfo?: Record<string, unknown>;
}

export type TOrganizationRegister = {
  name: string;
  email: string;
  phone?: string;
};

export type TUserRegister = {
  firstname: string;
  middlename?: string;
  lastname: string;
  email: string;
  phone?: string;
  username: string;
  password: string;
};

export interface IRegistrationRequestPayload {
  accountType: AccountType;
  user: TUserRegister;
  organization: TOrganizationRegister;
}

interface IOverwriteRegistration {
  name: string;
  sid: string;
  currentSession: IPublicSession;
  overwrite?: {
    flow: FlowKey;
    payload: IRegistrationRequestPayload;
  };
}

interface IFieldError extends Partial<IExpectedError> {
  isValid: boolean;
}

const catchFieldError = (error: unknown): IFieldError => {
  if (error instanceof ExpectedError) {
    return { isValid: false, status: error.status || 400, message: error.message, key: error.key };
  }
  return { isValid: false, status: 500, message: (error as Error).message ?? "Unexpected Error" };
};

const validate = async (fn: () => Promise<void>): Promise<IFieldError> => {
  try {
    await fn();
    return { isValid: true };
  } catch (error) {
    return catchFieldError(error);
  }
};

export const validateFlow = (value: unknown): value is FlowKey => {
  return typeof value === "string" && FlowMap.includes(value as FlowKey);
};

export const validateBusinessInfo = async (
  data: IRegistrationRequestPayload
): Promise<IFieldError> => {
  return validate(async () => {
    await validateUniqueness(organizationService, data.organization);
    await validateProfanity(data.organization);
  });
};

export const validatePersonalInfo = async (
  data: IRegistrationRequestPayload
): Promise<IFieldError> => {
  return validate(async () => {
    await validateUniqueness(userService, data.user);
    await validateProfanity(data.organization);
  });
};

export const validateAccountInfo = async (
  data: IRegistrationRequestPayload
): Promise<IFieldError> => {
  return validate(async () => {
    await validateUniqueness(userService, data.user);
    await validatePassword(data?.user?.password);
  });
};

export const validators: Record<
  string,
  (data: IRegistrationRequestPayload) => Promise<IFieldError>
> = {
  businessInfo: validateBusinessInfo,
  personalInfo: validatePersonalInfo,
  accountInfo: validateAccountInfo,
};

export const overwriteRegistration = async ({
  name,
  sid,
  currentSession,
  overwrite,
}: IOverwriteRegistration): Promise<{
  registration: IRegSessionCachedData;
  sessionData: ISessionMetaData;
  cookie: ICookie;
}> => {
  let registrationCachedData: IRegSessionCachedData;

  if (!overwrite) {
    const newIdentity = nanoid(64);

    registrationCachedData = {
      identity: newIdentity,
      completedSteps: [],
    };
  } else {
    const { registration } = currentSession;
    const { flow, payload } = overwrite;

    if (!registration) {
      console.error("Registration is not defined @registration.ts @overwriteRegistration");
      throw new Error("Registration is not defined");
    }
    const { completedSteps } = registration;

    if (!completedSteps.includes(flow)) completedSteps.push(flow);

    registrationCachedData = {
      ...registration,
      ...payload,
      completedSteps,
    };
  }

  //set registration cached data with registrationCachedData in redis
  const { cookie, meta } = await sessionService.setSessionData({
    name,
    sid,
    options: {
      currentData: currentSession,
      overrides: { registration: registrationCachedData },
      refreshCookie: true,
    },
  });

  if (!cookie) {
    console.error("Cookie not defined @registration.ts @overwriteRegistration");
    throw new Error("Unexpected Error: Cookie not defined");
  }

  return { registration: registrationCachedData, sessionData: meta, cookie };
};
