import express from "express";
import requireAuth from "@/core/middlewares/auth/requireAuth.js";
import publicAuth from "@/core/middlewares/auth/publicAuth.js";
import {
  validateRegistrationStep,
  getCachedData,
  registrationSessionInit,
} from "./registration/auth.registration.controller.js";

import {
  authenticateLogin,
  authenticateLogout,
  getAuthSessionMeta,
} from "./session/auth.session.controller.js";

const authRouter = express.Router();

// create new folder named public or something similar to put public route logic
authRouter.post("/login", authenticateLogin);
authRouter.post("/logout", requireAuth, authenticateLogout);
authRouter.post("/registration/init", publicAuth, registrationSessionInit);
authRouter.post("/registration/data", publicAuth, getCachedData);
authRouter.get("/session-cookie-meta", publicAuth, getAuthSessionMeta);
authRouter.post("/validate-register", publicAuth, validateRegistrationStep);

export default authRouter;
