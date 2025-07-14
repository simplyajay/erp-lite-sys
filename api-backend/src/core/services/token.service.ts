import jwt from "jsonwebtoken";
import { IJWTDecodedUser } from "./services";
import { Request } from "express";

export const extractAuthToken = (req: Request, name: string): string | null => {
  if (!req) return null;

  const authHeader = req?.headers?.authorization;
  if (typeof authHeader === "string" && authHeader?.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  const sid = req.cookies?.[name];

  return sid || null;
};

export const verifyAuthToken = (token: string) => {
  const key = process.env.JWT_SECRET;
  if (!key) throw new Error("JWT_SECRET is not defined");
  try {
    return jwt.verify(token, key) as IJWTDecodedUser;
  } catch (error) {
    return null;
  }
};
