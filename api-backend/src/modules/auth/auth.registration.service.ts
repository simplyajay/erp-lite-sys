import redisService from "../../core/services/redis.service.js";
import envConfig from "../../config/env.config.js";
import { nanoid } from "nanoid";
import {
  validateUniqueness,
  validateProfanity,
} from "../../core/services/validateFields.service.js";
import { validatePassword } from "../../core/services/validatePassword.service.js";
import { formatFormError } from "../../core/utils/formErrors.util.js";

const prefix = envConfig.get("REDIS_PREFIX");
const suffix = envConfig.get("REDIS_REG_SUFFIX");
const flowMap = {
  1: "accountType",
  2: "businessInfo",
  3: "personalInfo",
  4: "accountInfo",
  5: "review",
  6: "confirmed",
};

/*
  {
    currentFlow: flow,
    accountType: {
      identity: identityId,
      value: {
        accountType: 'organization' || 'individual'
      }
    },
    organiztaion: {
      identity: identityId,
      value: {
        name: Organization,
        email: 'organization@email'
      }
    }
  }
  */

const getNextFlow = (accountType, currentFlow) => {
  const getFlowNum = (flow) => {
    return Object.keys(flowMap).find((key) => flowMap[key] === flow);
  };
  try {
    if (!currentFlow || !accountType) return null;

    const prevFlowNum = parseInt(getFlowNum(currentFlow), 10);
    let flowNum;

    if (currentFlow === "accountType" && accountType === "individual") {
      flowNum = prevFlowNum + 2;
    } else {
      flowNum = prevFlowNum + 1;
    }

    return flowMap[flowNum];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createRegSession = async (req) => {
  const tokenVal = req.publicToken;

  const identityId = nanoid(64);
  const flow = flowMap[1]; // first step of the form
  const data = { currentFlow: flow, [flow]: { identity: identityId, values: {} } };

  const newCachedData = await redisService.setJSON({
    key: `${prefix}${tokenVal}${suffix}`,
    value: data,
    ttlSeconds: 1200,
    keepTTL: true,
  });

  return newCachedData;
};

export const validateRegSession = async (req) => {
  const { identityId, accountType } = req.body; //identityId ( changed to nanoid )

  if (!identityId) return { valid: false };

  const cachedData = await redisService.getJSON(`${prefix}${identityId}`);

  if (cachedData && cachedData.accountType === accountType) return { valid: true };

  return { valid: false };
};

export const exportCachedData = async (req) => {
  const tokenVal = req.publicToken;
  const payload = req.body;

  if (!payload.identity || !payload.flow)
    return { error: { status: 400, message: "Missing required fields" } };

  const cachedData = await redisService.getJSON(`${prefix}${tokenVal}${suffix}`);

  const targetFlow = payload.flow;
  const targetData = cachedData[targetFlow];

  console.log(targetFlow);

  if (payload.identity !== targetData?.identity) {
    console.log(payload);
    console.log(cachedData);
    return { error: { status: 400, message: "Invalid URL" } };
  }

  const { currentFlow } = cachedData;

  return { currentFlow: targetFlow, [targetFlow]: targetData };
};

export const validateCurrentStep = async (req) => {
  try {
    const tokenVal = req.publicToken;
    const data = req.body;
    const { currentFlow } = req.query;
    const { accountType } = data;

    const validateGeneralInfo = async (data) => {
      const entity = currentFlow === "businessInfo" ? "organization" : "user";
      const fields = data[entity];
      await validateUniqueness(entity, fields);
      await validateProfanity(fields);
    };

    const validators = {
      businessInfo: validateGeneralInfo,
      personalInfo: validateGeneralInfo,
      accountInfo: async (data) => {
        await validateGeneralInfo(data);
        await validatePassword(data.password);
      },
    };

    const validator = validators[currentFlow];

    if (validator) {
      const { accountType, ...rest } = data;
      await validator(data);
    } else if (!Object.values(flowMap).includes(currentFlow)) {
      throw new Error("400: Invalid Step");
    }

    const nextFlow = getNextFlow(accountType, currentFlow);

    if (!nextFlow) {
      return { error: { status: 400, message: "Invalid Flow" } };
    }

    const identity = nanoid(64);

    const cachedData = await redisService.getJSON(`${prefix}${tokenVal}${suffix}`);

    const newCachedData = await redisService.setJSON({
      key: `${prefix}${tokenVal}${suffix}`,
      value: {
        ...cachedData,
        currentFlow: nextFlow,
        [currentFlow]: { ...cachedData[currentFlow], values: data },
        [nextFlow]: { identity, values: {} },
      },
      ttlSeconds: 1200,
      keepTTL: true,
    });

    return { isFormValid: true, ...newCachedData };
  } catch (error) {
    return { isFormValid: false, error: formatFormError(error) };
  }
};
