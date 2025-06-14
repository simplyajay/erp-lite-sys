import authService from "./auth.session.service.js";
import {
  validateCurrentStep,
  createRegSession,
  validateRegSession,
  exportCachedData,
} from "./auth.registration.service.js";
import { handleResponse } from "../../core/services/api.service.js";
export const authenticateLogin = async (req, res) => {
  return await handleResponse({
    promise: authService.login(req),
    res,
    successMessage: "Login successful",
    notFoundMessage: "Invalid Credentials",
  });
};

export const authenticateLogout = async (req, res) => {
  return await handleResponse({
    promise: authService.logout(),
    res,
    successMessage: "Logout successful",
  });
};

export const initializePublicSession = async (req, res) => {
  return await handleResponse({
    promise: authService.publicSessionInit(req),
    res,
  });
};

export const validateRegistrationStep = async (req, res) => {
  return await handleResponse({
    promise: validateCurrentStep(req),
    res,
  });
};

export const regSessionInit = async (req, res) => {
  return await handleResponse({
    promise: createRegSession(req),
    res,
  });
};

export const regSessionStatus = async (req, res) => {
  return await handleResponse({
    promise: validateRegSession(req),
    res,
    notFoundMessage: "UUID not provided",
  });
};

export const getCachedData = async (req, res) => {
  return await handleResponse({
    promise: exportCachedData(req),
    res,
    notFoundMessage: "Identity not provided",
  });
};
