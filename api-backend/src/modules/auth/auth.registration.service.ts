import redisService from "../../core/services/redis.service.js";
import envConfig from "../../config/env.config.js";
import { nanoid } from "nanoid";
import {
  validateUniqueness,
  validateProfanity,
} from "../../core/services/validateFields.service.js";
import { validatePassword } from "../../core/services/validatePassword.service.js";
import { formatFormError } from "../../core/utils/formErrors.util.js";
import { Request } from "express";
import { ICookie, IServiceResponse } from "@/core/services/services.js";
import { IPublicSession, IRegSessionCachedData } from "./auth.js";
import sessionService from "./auth.session.service.js";

const prefix = envConfig.get("REDIS_PREFIX");
const suffix = envConfig.get("REDIS_REG_SUFFIX");
const name = envConfig.get("PUBLIC_TOKEN");

export const createRegSession = async (
  req: Request
): Promise<IServiceResponse<{ identity: string }>> => {
  const sid = req.publicToken;

  if (!name || !sid) throw new Error("PUBLIC_TOKEN or SID is not defined"); //handle in frontend

  const identity = nanoid(64);

  const registrationCachedData: IRegSessionCachedData = {
    identity,
    completedSteps: [],
  };

  const overrides = { registration: registrationCachedData };

  const { cookie, createdAt, expiresAt } = await sessionService.setSessionData({
    name,
    sid,
    overrides,
  });

  return { payload: { identity }, session: { name, createdAt, expiresAt }, cookies: [cookie] };
};

export const validateRegSession = async (
  req: Request<any, any, { identityId: string; accountType: string; identity: string }>
): Promise<IServiceResponse<{ isValid: boolean }>> => {
  const { identityId, accountType, identity } = req.body; //identityId ( changed to nanoid )

  console.log(identity);
  const sid = req.publicToken;

  if (!sid) throw new Error("Invalid session");

  if (!identityId) return { valid: false };

  const cachedData = await redisService.getJSON(`${prefix}${identityId}`);

  if (cachedData && cachedData.accountType === accountType) return { payload: { isValid: true } };

  return { payload: { isValid: false } };
};

export const exportRegSessionData = async (
  req: Request<any, any, { identity: string }>
): Promise<IServiceResponse<{
  registration?: IRegSessionCachedData;
  error?: unknown;
  redirect: boolean;
}> | void> => {
  const sid = req.publicToken;
  const { identity } = req.body;

  if (!sid || !name) throw new Error("PUBLIC_TOKEN or SID is not defined");

  const redisKey = `${name}==${sid}`;

  const publicSession = await redisService.getJSON<IPublicSession>(redisKey);

  if (!publicSession || !publicSession.registration || !identity || identity === "undefined") {
    //create new session
    const newIdentity = nanoid(64);

    const registrationCachedData: IRegSessionCachedData = {
      identity: newIdentity,
      completedSteps: [],
    };

    const overrides = { registration: registrationCachedData };

    //send new cookie to update frontend cookie
    const { cookie, createdAt, expiresAt } = await sessionService.setSessionData(name, sid, {
      overrides,
      withCookie: true,
    });

    //debug
    if (!cookie) console.log("Unexpected error: cookie not defined");

    return {
      payload: { registration: registrationCachedData, redirect: true },
      session: { name, createdAt, expiresAt },
      ...(cookie && { cookies: [cookie] }), // only inject the cookie if it exists which it should in this case
    };
  }

  const { registration } = publicSession;

  if (identity !== registration.identity) {
    return { payload: { error: { status: 400, message: "Invalid URL" }, redirect: false } };
  }

  return { payload: { registration, redirect: false } };
};

type ValidatorFlowKey = "businessInfo" | "personalInfo" | "accountInfo";

export const validateCurrentStep = async (req: Request): Promise<IServiceResponse<{}> | void> => {
  try {
    const sid = req.publicToken;

    if (!sid) throw new Error("Invalid SID");

    const data = req.body;
    const { flow } = req.query;
    const { accountType } = data;

    if (typeof flow !== "string") throw new Error("Invalid flow");

    const validateGeneralInfo = async (data: Record<string, any>) => {
      const entity = flow === "businessInfo" ? "organization" : "user";
      const fields = data[entity];
      await validateUniqueness(entity, fields);
      await validateProfanity(fields);
    };

    const validators = {
      businessInfo: validateGeneralInfo,
      personalInfo: validateGeneralInfo,
      accountInfo: async (data: Record<string, any>) => {
        await validateGeneralInfo(data);
        await validatePassword(data.password);
      },
    };

    const validator = validators[flow as ValidatorFlowKey];

    if (validator) {
      const { accountType, ...rest } = data;
      await validator(data);
    } else if (!Object.values(flowMap).includes(flow)) {
      throw new Error("400: Invalid Step");
    }

    const publiSessionData = await getPublicSession(sid);
    if (!publiSessionData) throw new Error("No Public Session Found");

    const registrationCachedData: IRegSessionCachedData = {
      identity,
      completedSteps: [],
    };

    await setPublicSession({
      key: sid,
      value: { ...publiSessionData, registration: registrationCachedData },
      keepTTL: true,
    });

    return { isFormValid: true, ...newCachedData };
  } catch (error) {
    return { isFormValid: false, error: formatFormError(error) };
  }
};
