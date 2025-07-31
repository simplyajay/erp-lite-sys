import envConfig from "@/config/env.config.js";
import { nanoid } from "nanoid";
import { extractAuthToken } from "@/core/services/token.service.js";
import { Request, Response, NextFunction } from "express";
import { ONE_MIN } from "@/modules/auth/session/auth.session";

const publicAuth = (req: Request, res: Response, next: NextFunction): void | Promise<void> => {
  const cookieName = envConfig.get("REGISTRATION_COOKIENAME");

  if (!cookieName) {
    console.error("cookie name is not defined @publicAuth.ts");
    throw new Error("REGISTRATION_COOKIENAME is not defined");
  }
  let sid = extractAuthToken(req, cookieName);

  //if cookie is not set in the frontend for some reason; less likely to happen since cookies are set in frontend middleware
  if (!sid) {
    sid = nanoid(64);
    res.cookie(cookieName, sid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: ONE_MIN,
    });
  }

  req.publicToken = sid;

  next();
};

export default publicAuth;
