import userService from "../entities/user/user.service.js";
import envConfig from "../../config/env.config.js";
import { comparePassword } from "../../core/services/hash.service.js";
import {
  generateAuthCookies,
  createClearCookie,
  createCookie,
} from "../../core/utils/cookie.util.js";
import { nanoid } from "nanoid";

class AuthSessionService {
  async login(req) {
    const { password } = req.body || {};
    const user = await userService.findUserByIdentifier(req);
    if (!user) return;

    const match = await comparePassword(password, user.password);
    if (!match) return;

    const cookies = generateAuthCookies(user);

    return { loggedIn: true, cookies };
  }

  async logout() {
    const clearCookies = [createClearCookie("auth_token")];

    return { loggedIn: false, clearCookies };
  }

  async publicSessionInit(req) {
    const token = envConfig.get("PUBLIC_TOKEN");

    let sessionId = req.cookies?.[token];

    if (!sessionId) {
      sessionId = nanoid(64);

      return {
        sessionActive: true,
        cookies: [createCookie(token, sessionId)],
      };
    }

    return { sessionActive: true };
  }
}

export default new AuthSessionService();
