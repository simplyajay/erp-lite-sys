import api from "@/core/axios/axios";
import { handleResponse } from "@/core/axios/api.service";

export const signIn = async (payload = {}, config = {}) => {
  return await handleResponse(api.post("api/auth/login", payload, config));
};

export const endSession = async (config = {}) => {
  return await handleResponse(api.get("api/auth/logout", config));
};

export const registrationSessionInit = async (payload = {}, config = {}) => {
  return await handleResponse(api.post("api/auth/registration/init", payload, config));
};

export const validateRegistrationStep = async (payload = {}, config = {}) => {
  return await handleResponse(api.post(`api/auth/validate-register`, payload, config));
};

export const getCachedData = async (payload = {}, config = {}) => {
  return await handleResponse(api.post(`api/auth/registration/data`, payload, config));
};

export const validateRegSessionId = async (payload = {}, config = {}) => {
  return await handleResponse(api.post(`api/auth/registration-session/status`, payload, config));
};

export const getCookieMeta = async (config = {}) => {
  return await handleResponse(api.get(`api/auth/session-cookie-meta`, config));
};
