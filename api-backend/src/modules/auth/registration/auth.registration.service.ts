import redisService from "../../../core/services/redis.service.js";
import envConfig from "../../../config/env.config.js";
import { Request } from "express";
import { IExpectedError, IServiceResponse } from "@/core/services/services.js";
import {
  IRegistrationRequestPayload,
  IRegSessionCachedData,
  validators,
  FlowMap,
  validateFlow,
  overwriteRegistration,
} from "./auth.registration.js";
import { IPublicSession } from "../session/auth.session.js";

const name = envConfig.get("PUBLIC_TOKEN");

export const exportRegSessionData = async (
  req: Request<any, any, { identity: string }>
): Promise<IServiceResponse<{
  registration?: IRegSessionCachedData;
  redirect: boolean;
}> | void> => {
  const sid = req.publicToken;
  const { identity } = req.body;

  if (!sid || !name) {
    console.error("SID or Name is not defined @registration.ts @overwriteRegistration");
    throw new Error("PUBLIC_TOKEN or SID is not defined");
  }

  const redisKey = `${name}==${sid}`;
  const currentSession = await redisService.getJSON<IPublicSession>(redisKey);

  if (!currentSession) {
    console.error("No Public Session @registration.service.ts @exportCachedReg");
    throw new Error("Unexpected Error: No Public session");
  }

  if (!currentSession.registration || !identity || identity === "undefined") {
    const { registration, sessionData, cookie } = await overwriteRegistration({
      name,
      sid,
      currentSession,
    });

    return {
      payload: { registration, redirect: true },
      session: { isValid: true, data: sessionData },
      ...(cookie && { cookies: [cookie] }), // only inject the cookie if it exists which it should in this case
    };
  }

  const { registration } = currentSession;

  if (identity !== registration.identity) {
    return { payload: { error: { status: 400, message: "Invalid URL" }, redirect: false } };
  }

  return { payload: { registration, redirect: false } };
};

//THIS FUNCTION SHOULD ONLY BE EXECUTED ON FLOWS THAT IS DEFINED IN FLOWMAP
export const validateCurrentStep = async (
  req: Request<any, any, IRegistrationRequestPayload>
): Promise<IServiceResponse<{ isFormValid: boolean; registration?: IRegSessionCachedData }>> => {
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
      console.error("No Public Session @registration.service line 167");
      throw new Error("Unexpected Error: No Session Found");
    }

    const { registration, sessionData, cookie } = await overwriteRegistration({
      name,
      sid,
      currentSession,
      overwrite: { flow, payload: data },
    });

    return {
      payload: { isFormValid: true, registration },
      cookies: [cookie],
      session: { isValid: true, data: sessionData },
    };
  } catch (error) {
    console.log(error);
    return { payload: { isFormValid: false } };
  }
};
