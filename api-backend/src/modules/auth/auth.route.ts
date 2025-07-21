import express from "express";
import requireAuth from "@/core/middlewares/auth/requireAuth.js";
import publicAuth from "@/core/middlewares/auth/publicAuth.js";
import {
  validateRegistrationStep,
  getCachedData,
} from "./registration/auth.registration.controller.js";

import {
  authenticateLogin,
  authenticateLogout,
  initializePublicSession,
} from "./session/auth.session.controller.js";

const authRouter = express.Router();

authRouter.post("/login", authenticateLogin);
authRouter.post("/logout", requireAuth, authenticateLogout);
authRouter.post("/public-session-init", initializePublicSession);
authRouter.post("/validate-register", publicAuth, validateRegistrationStep);
authRouter.post("/registration-cached", publicAuth, getCachedData);

export default authRouter;
