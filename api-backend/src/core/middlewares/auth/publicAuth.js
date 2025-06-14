import envConfig from "../../../config/env.config.js";
import { nanoid } from "nanoid";
import { extractAuthToken } from "../../services/token.service.js";

const publicAuth = (req, res, next) => {
  const name = envConfig.get("PUBLIC_TOKEN");
  const token = extractAuthToken(req, name);

  if (!token) {
    const token = nanoid(64);
    res.cookie(name, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 20 * 60 * 1000, //20 mins
    });
  }

  req.publicToken = token;

  next();
};

export default publicAuth;
