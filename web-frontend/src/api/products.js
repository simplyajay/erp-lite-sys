import api from "@/core/axios/axios";
import { handleResponse } from "@/core/axios/api.service";

export const getProducts = async (config = {}) => {
  return await handleResponse(api.get("/api/stocks", config));
};

export const addProduct = async (payload = {}, config = {}) => {
  return await handleResponse(api.post("/api/stocks/add", payload, config));
};

export const updateProduct = async (id, payload = {}, config = {}) => {
  return await handleResponse(api.put(`/api/stocks/update/${id}`, payload, config));
};
