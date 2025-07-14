import { handleResponse } from "../../../core/services/api.service.js";
import { Request, Response } from "express";
import UserService from "./user.service.js";

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<void> => {
  await handleResponse({
    promise: userService.register(req),
    res,
  });
  return;
};

export const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
  return await handleResponse({
    promise: userService.currentUser(req),
    res,
    notFoundMessage: "User not found",
  });
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  return await handleResponse({
    promise: userService.getAllUsers(),
    res,
    notFoundMessage: "There are no users",
  });
};
