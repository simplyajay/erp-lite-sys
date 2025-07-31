import {
  IRegistrationRequestPayload,
  FlowMap,
  FlowKey,
  IFieldError,
  IOverwriteRegistration,
  IRegistrationData,
} from "./auth.registration";
import { ICookie } from "@/core/services/services";
import { ExpectedError } from "@/core/services/services";
import { validateUniqueness, validateProfanity } from "@/core/services/validateFields.service";
import { validatePassword } from "@/core/services/validatePassword.service";
import { nanoid } from "nanoid";
import OrganizationService from "@/modules/entities/organization/organization.service";
import UserService from "@/modules/entities/user/user.service";

const organizationService = new OrganizationService();
const userService = new UserService();

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
}: IOverwriteRegistration): Promise<{
  registration: IRegistrationData;
  cookie: ICookie;
}> => {
  let registrationCachedData: IRegistrationData;

  if (!overwrite) {
    const newIdentity = nanoid(64);

    registrationCachedData = {
      identity: newIdentity,
      completedSteps: [],
    };
  } else {
    const registration = currentSession;
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
  const cookie = await sessionService.setRegistrationData({
    name,
    sid,
    options: {
      currentData: currentSession,
      refreshCookie: true,
    },
  });

  if (!cookie) {
    console.error("Cookie not defined @registration.ts @overwriteRegistration");
    throw new Error("Unexpected Error: Cookie not defined");
  }

  return { registration: registrationCachedData, cookie };
};
