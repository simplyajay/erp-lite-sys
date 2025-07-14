import express from "express";
import requireAuth from "@/core/middlewares/auth/requireAuth.js";
import publicAuth from "@/core/middlewares/auth/publicAuth.js";
import {
  regSessionInit,
  validateRegistrationStep,
  regSessionStatus,
  getCachedData,
} from "./auth.registration.controller.js";

import {
  authenticateLogin,
  authenticateLogout,
  initializePublicSession,
} from "./auth.session.controller.js";

const authRouter = express.Router();

authRouter.post("/login", authenticateLogin);
authRouter.post("/logout", requireAuth, authenticateLogout);
authRouter.post("/public-session-init", initializePublicSession);
authRouter.post("/validate-register", publicAuth, validateRegistrationStep);
authRouter.get("/registration-session/init", publicAuth, regSessionInit);
authRouter.post("/registration-session/status", regSessionStatus);
authRouter.post("/registration-cached", publicAuth, getCachedData);

export default authRouter;
