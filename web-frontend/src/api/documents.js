import api from "@/core/axios/axios";
import { handleResponse } from "@/core/axios/api.service";

export const getDocuments = async (config = {}) => {
  return await handleResponse(api.get("/api/documents", config));
};

export const getDocumentsByEntity = async (entityId, config = {}) => {
  return await handleResponse(api.get(`/api/documents/entity/${entityId}`, config));
};
