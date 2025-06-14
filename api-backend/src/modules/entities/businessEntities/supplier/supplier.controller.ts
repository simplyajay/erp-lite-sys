import supplierService from "./supplier.service.js";
import { handleResponse } from "../../../../core/services/api.service.js";

export const createSupplier = async (req, res) => {
  return await handleResponse({
    promise: supplierService.createSupplier(req),
    res,
    successMessage: "New supplier created successfully",
  });
};

export const getSupplier = async (req, res) => {
  return await handleResponse({
    promise: supplierService.findSupplierById(req),
    res,
    notFoundMessage: "Supplier not found",
  });
};

export const getAllSuppliers = async (req, res) => {
  return await handleResponse({
    promise: supplierService.findAllSuppliers(req),
    res,
  });
};

export const updateSupplier = async (req, res) => {
  return await handleResponse({
    promise: supplierService.updateSupplierById(req),
    res,
    notFoundMessage: "Supplier not found",
    successMessage: "Updated supplier successfully",
  });
};
