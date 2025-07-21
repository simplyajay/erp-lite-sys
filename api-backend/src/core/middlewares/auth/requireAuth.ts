import { extractAuthToken, verifyAuthToken } from "@/core/services/token.service.js";
import { Request, Response, NextFunction } from "express";

const requireAuth = (req: Request, res: Response, next: NextFunction): void | Promise<void> => {
  const key = process.env.AUTH_TOKEN;
  if (!key) throw new Error("AUTH_TOKEN is not defined");
  const sid = extractAuthToken(req, key);

  if (!sid) {
    res.status(401).json({ ok: false, data: null, message: "Unauthorized. No token provided" });
    return;
  }

  try {
    const decoded = verifyAuthToken(sid);

    if (!decoded) {
      res.status(401).json({ ok: false, data: null, message: "Unauthorized, Invalid token" });
      return;
    }
    req.user = decoded; // attach user object to req before sending it to the endpoint

    next();
  } catch (error) {
    console.error("Error", error);
    res.status(401).json({ ok: false, data: null, message: "Unauthorized, Invalid token" });
    return;
  }
};

export default requireAuth;
