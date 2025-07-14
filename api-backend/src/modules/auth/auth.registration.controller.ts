import {
  createRegSession,
  validateCurrentStep,
  validateRegSession,
  exportRegSessionData,
} from "./auth.registration.service.js";
import { handleResponse } from "../../core/services/api.service.js";
import { Request, Response } from "express";

export const validateRegistrationStep = async (req: Request, res: Response): Promise<void> => {
  await handleResponse({
    promise: validateCurrentStep(req),
    res,
  });
  return;
};

export const regSessionInit = async (req: Request, res: Response): Promise<void> => {
  await handleResponse({
    promise: createRegSession(req),
    res,
  });
  return;
};

export const regSessionStatus = async (req: Request, res: Response): Promise<void> => {
  await handleResponse({
    promise: validateRegSession(req),
    res,
    notFoundMessage: "UUID not provided",
  });
  return;
};

export const getCachedData = async (req: Request, res: Response): Promise<void> => {
  await handleResponse({
    promise: exportRegSessionData(req),
    res,
    notFoundMessage: "Identity not provided",
  });
  return;
};
