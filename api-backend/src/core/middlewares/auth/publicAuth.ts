import envConfig from "@/config/env.config.js";
import { nanoid } from "nanoid";
import { extractAuthToken } from "@/core/services/token.service.js";
import { Request, Response, NextFunction } from "express";
import { FIVE_MINS_MS } from "@/modules/auth/session/auth.session";

const publicAuth = (req: Request, res: Response, next: NextFunction): void | Promise<void> => {
  const name = envConfig.get("PUBLIC_TOKEN");

  if (!name) throw new Error("PUBLIC_TOKEN is not defined");
  let sid = extractAuthToken(req, name);

  //if cookie is not set in the frontend for some reason; less likely to happen since cookies are set in frontend middleware
  if (!sid) {
    sid = nanoid(64);
    res.cookie(name, sid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: FIVE_MINS_MS,
    });
  }

  req.publicToken = sid;

  next();
};

export default publicAuth;
