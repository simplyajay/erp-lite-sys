import { handleResponse } from "@/core/services/api.service";
import sessionService from "./auth.session.service";
import { Request, Response } from "express";

export const authenticateLogin = async (req: Request, res: Response): Promise<void> => {
  await handleResponse({
    promise: sessionService.login(req),
    res,
    successMessage: "Login successful",
    notFoundMessage: "Invalid Credentials",
  });
  return;
};

export const authenticateLogout = async (req: Request, res: Response): Promise<void> => {
  await handleResponse({
    promise: sessionService.logout(),
    res,
    successMessage: "Logout successful",
  });
  return;
};

export const initializePublicSession = async (req: Request, res: Response): Promise<void> => {
  await handleResponse({
    promise: sessionService.publicSessionInit(req),
    res,
  });
  return;
};
