import redisService from "../../../core/services/redis.service.js";
import envConfig from "../../../config/env.config.js";
import { Request } from "express";
import { ICookie, IExpectedError, IServiceResponse } from "@/core/services/services.js";
import {
  IRegistrationRequestPayload,
  IRegistrationData,
  FlowMap,
  ISetRegistrationDataOption,
} from "./auth.registration.js";
import { overwriteRegistration, validators, validateFlow } from "./auth.registration.util.js";
import { IPublicSession, ONE_HOUR, ONE_MIN } from "../session/auth.session.js";
import { nanoid } from "nanoid";
import { createCookie } from "@/core/utils/cookie.util.js";

const name = envConfig.get("REGISTRATION");

export const startRegistrationSession = async (
  req: Request<any, any, { _maxAge: number; sid: string }>
): Promise<IServiceResponse<{ sessionActive: boolean }>> => {
  const { sid, _maxAge } = req.body;

  if (!sid || !_maxAge || !name) {
    console.log("Unexpected error @startRegistrationSession");
    throw new Error("Unexpected Error");
  }

  await setRegistrationData({ name, sid, options: { _maxAge } });

  return { payload: { sessionActive: true } };
};

export const setRegistrationData = async ({
  name,
  sid,
  newData,
  options: { _maxAge } = {},
}: ISetRegistrationDataOption): Promise<{
  cookie: ICookie;
  registrationData: IRegistrationData;
}> => {
  const defaultMaxAge = ONE_HOUR;
  const sessionRedisKey = `${name}==${sid}`;

  //make completedSteps an array of keyValue pairs. key is the string, value is the step so value can be used which step is the user in frontend
  const data: IRegistrationData = newData ? newData : { identity: nanoid(64), completedSteps: [] };

  await redisService.setJSON<IRegistrationData>({
    key: sessionRedisKey,
    value: data,
    ttlSeconds: _maxAge ?? defaultMaxAge,
  });

  const cookie = createCookie(name, sid, { maxAge: _maxAge ?? defaultMaxAge });

  return { cookie, registrationData: data };
};

export const exportRegistrationData = async (
  req: Request<any, any, { identity: string }>
): Promise<IServiceResponse<IRegistrationData>> => {
  const sid = req.publicToken;
  const { identity } = req.body;

  if (!sid || !name) {
    //this will only happen if cookie expired before sending this request
    //handle here, return some payload to redirect user
    console.error("SID or name is not defined @registration.ts @overwriteRegistration");
    throw new Error("Cookie Name or SID is not defined");
  }

  const redisKey = `${name}==${sid}`;

  const existingData = await redisService.getJSON<IRegistrationData>(redisKey);

  //this will happen if the request is sent AFTER the redis session and cookie expires. return a fresh registration data
  if (!existingData) {
    console.error("Unexpected Error @exportRegistrationData");
    throw new Error("Unexpected Error");

    // return newData here.
  }

  //only check identity if its truthy and compare it to the existingData's identity.
  if (identity && identity !== existingData?.identity) {
    return { payload: { error: { status: 400, message: "Invalid URL" } } };
  }

  return { payload: existingData };
};

//THIS FUNCTION SHOULD ONLY BE EXECUTED ON FLOWS THAT IS DEFINED IN FLOWMAP
export const validateCurrentStep = async (
  req: Request<any, any, IRegistrationRequestPayload>
): Promise<IServiceResponse<{ isFormValid: boolean; registration?: IRegistrationData }>> => {
  try {
    const sid = req.publicToken;

    if (!sid || !name) {
      console.error("SID or Name is not defined @registration.ts @overwriteRegistration");
      throw new Error("PUBLIC_TOKEN or SID is not defined");
    }

    const redisKey = `${name}==${sid}`;
    const { flow } = req.query;
    const data = req.body;

    const isValidFlow = validateFlow(flow);
    if (!isValidFlow || !FlowMap.includes(flow)) {
      console.error("Invalid flow @registration.service.ts @validateCurrentStep");
      throw new Error("Invalid Step");
    }

    const validator = validators[flow];

    //only run validator if flow is not accountType
    if (flow !== "accountType") {
      const { isValid, ...rest } = await validator(data);

      if (!isValid) {
        const payloadError: IExpectedError = {
          status: rest.status || 500,
          message: rest.message ?? "Something went wrong. Please try again later",
          code: rest.code ?? "UNEXPECTED_ERROR",
        };

        return { payload: { isFormValid: false, error: payloadError } };
      }
    }

    const currentSession = await redisService.getJSON<IPublicSession>(redisKey);

    //should only happen if cookie expired right before sending the request
    if (!currentSession) {
      console.error("No Public Session @registration.service line 104");
      throw new Error("Unexpected Error: No Session Found");
    }

    const { registration, cookie } = await overwriteRegistration({
      name,
      sid,
      currentSession,
      overwrite: { flow, payload: data },
    });

    return {
      payload: { isFormValid: true, registration },
      cookies: [cookie],
    };
  } catch (error) {
    console.log(error);
    return { payload: { isFormValid: false } };
  }
};
