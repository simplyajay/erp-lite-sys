import jwt from "jsonwebtoken";
import envConfig from "../../config/env.config.js";

export const extractAuthToken = (req, envName) => {
  if (!req) return null;

  const authHeader = req?.headers?.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  const token = req.cookies?.[envName];

  return token || null;
};

export const verifyAuthToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};
