import jwt, { SignOptions } from "jsonwebtoken";
import { IClearCookie, ICookie, IJWTDecodedUser } from "../services/services";
import { CookieOptions } from "express";
import { ONE_HOUR } from "@/modules/auth/session/auth.session";
import envConfig from "@/config/env.config";
import ms from "ms";

export const createCookie = (
  name: string,
  value: string,
  options?: Partial<CookieOptions>
): ICookie => ({
  name,
  value,
  options: {
    httpOnly: true,
    maxAge: ONE_HOUR, // default
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    ...(options || {}),
  },
});

export const createClearCookie = (
  name: string,
  options?: Partial<CookieOptions>
): IClearCookie => ({
  name,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    ...(options || {}),
  },
});

export const generateAuthCookie = (user: IJWTDecodedUser, options?: SignOptions): ICookie[] => {
  const secretKey = envConfig.get("JWT_SECRET");
  if (!secretKey) throw new Error("JWT_SECRET is not defined");

  const cookieName = envConfig.get("AUTH");
  if (!cookieName) {
    console.error("cookie name is not defined @cookie.util.ts line 49");
    throw new Error("Cookie name is not defined");
  }

  const maxAge =
    typeof options?.expiresIn === "string"
      ? Math.floor((ms(options.expiresIn) ?? ms("1h")) / 1000)
      : typeof options?.expiresIn === "number"
      ? options.expiresIn
      : ONE_HOUR;

  const token = jwt.sign(user, secretKey, { expiresIn: maxAge });

  return [createCookie(cookieName, token, { maxAge })];
};
