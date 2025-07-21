import jwt from "jsonwebtoken";
import { IClearCookie, ICookie, IJWTDecodedUser } from "../services/services";
import { CookieOptions } from "express";
import { ONE_HOUR_MS } from "@/modules/auth/session/auth.session";
import envConfig from "@/config/env.config";

export const createCookie = (
  name: string,
  value: string,
  options?: Partial<CookieOptions>
): ICookie => ({
  name,
  value,
  options: {
    httpOnly: true,
    maxAge: ONE_HOUR_MS,
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

export const generateSignedCookie = (user: IJWTDecodedUser) => {
  const secretKey = envConfig.get("JWT_SECRET");

  if (!secretKey) throw new Error("JWT_SECRET is not defined");

  const token = jwt.sign(user, secretKey);

  const cookieName = envConfig.get("AUTH");

  if (!cookieName) {
    console.error("cookie name is not defined @cookie.util.ts line 49");
    throw new Error("Cookie name is not defined");
  }

  return [createCookie(cookieName, token)];
};
