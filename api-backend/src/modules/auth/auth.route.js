import express from "express";
import requireAuth from "../../core/middlewares/auth/requireAuth.js";
import publicAuth from "../../core/middlewares/auth/publicAuth.js";
import {
  authenticateLogin,
  authenticateLogout,
  validateRegistrationStep,
  regSessionInit,
  regSessionStatus,
  getCachedData,
  initializePublicSession,
} from "../auth/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/login", authenticateLogin);
authRouter.post("/logout", requireAuth, authenticateLogout);
authRouter.post("/public-session-init", initializePublicSession);
authRouter.post("/validate-register", publicAuth, validateRegistrationStep);
authRouter.post("/registration-session/init", publicAuth, regSessionInit);
authRouter.post("/registration-session/status", regSessionStatus);
authRouter.post("/registration-cached", publicAuth, getCachedData);

export default authRouter;
