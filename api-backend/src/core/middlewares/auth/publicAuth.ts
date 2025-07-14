import envConfig from "@/config/env.config.js";
import { nanoid } from "nanoid";
import { extractAuthToken } from "@/core/services/token.service.js";
import { Request, Response, NextFunction } from "express";

const publicAuth = (req: Request, res: Response, next: NextFunction): void | Promise<void> => {
  const name = envConfig.get("PUBLIC_TOKEN");

  if (!name) throw new Error("PUBLIC_TOKEN is not defined");
  let sid = extractAuthToken(req, name);

  //if cookie is not set in the frontend for some reason
  if (!sid) {
    sid = nanoid(64);
    res.cookie(name, sid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 20 * 60 * 1000, //20 mins
    });
  }

  req.publicToken = sid;

  next();
};

export default publicAuth;
