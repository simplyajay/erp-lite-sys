import jwt from "jsonwebtoken";
import { IClearCookie, ICookie, IJWTDecodedUser } from "../services/services";
import { CookieOptions } from "express";
import { ONE_HOUR_MS } from "@/modules/auth/session/auth.session";

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

export const generateAuthCookies = (user: IJWTDecodedUser) => {
  const key = process.env.JWT_SECRET;

  if (!key) throw new Error("JWT_SECRET is not defined");

  const token = jwt.sign(user, key);

  return [createCookie("auth_token", token)];
};
