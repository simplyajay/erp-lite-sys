import { extractAuthToken, verifyAuthToken } from "../../services/token.service.js";

const requireAuth = (req, res, next) => {
  const token = extractAuthToken(req, process.env.AUTH_TOKEN);

  if (!token) {
    return res
      .status(401)
      .json({ ok: false, data: null, message: "Unauthorized. No token provided" });
  }

  try {
    const decoded = verifyAuthToken(token);

    if (!decoded) {
      return res
        .status(401)
        .json({ ok: false, data: null, message: "Unauthorized, Invalid token" });
    }
    req.user = decoded; // attach user object to req before sending it to the endpoint
    return next();
  } catch (error) {
    console.error("Error", error);
    return res.status(401).json({ ok: false, data: null, message: "Unauthorized, Invalid token" });
  }
};

export default requireAuth;
