import { handleResponse } from "@/core/axios/api.service";
import api from "@/core/axios/axios";

export const getCurrentUser = async (config = {}) => {
  return await handleResponse(api.get("/api/users/me", config));
};
