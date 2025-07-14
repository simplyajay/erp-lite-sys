//import userService from "../entities/user/user.service.js";
import envConfig from "../../config/env.config.js";
import { comparePassword } from "../../core/services/hash.service.js";
import {
  generateAuthCookies,
  createClearCookie,
  createCookie,
} from "../../core/utils/cookie.util.js";
import { Request } from "express";
import { ILoginReqBody, IPublicSession, TEN_MINS_MS, ISessionDataOptions } from "./auth.js";
import { ICookie, IServiceResponse } from "@/core/services/services.js";
import UserService from "../entities/user/user.service.js";
import redisService from "@/core/services/redis.service.js";

const userService = new UserService();
const maxAgeInMs = TEN_MINS_MS;

class AuthSessionService {
  async login(
    req: Request<any, any, ILoginReqBody>
  ): Promise<IServiceResponse<{ isLoggedIn: boolean }> | void> {
    const { pw, identifier } = req.body;

    if (!identifier || !pw) return;

    const res = await userService.getUserByIdentifier(identifier);

    const user = res.payload;

    if (!user) return;

    const match = await comparePassword(pw, user.password);

    if (!match) return;

    const cookies = generateAuthCookies({ _id: user.id, _orgId: user?.orgId });

    return { payload: { isLoggedIn: true }, cookies };
  }

  async logout(): Promise<IServiceResponse<{ isLoggedIn: boolean }> | void> {
    const clearCookies = [createClearCookie("auth_token")];

    return { payload: { isLoggedIn: false }, clearCookies };
  }

  async publicSessionInit(
    req: Request<any, any, { sid: string; _createdAt: number }>
  ): Promise<IServiceResponse<{ sessionActive: boolean }>> {
    const name = envConfig.get("PUBLIC_TOKEN");

    if (!name) throw new Error("PUBLIC_TOKEN is not defined"); // handle in frontend TRY AGAIN LATER

    let { sid, _createdAt } = req.body;

    //cookies should be present when calling this function
    if (!sid || !_createdAt) throw new Error("Unexpected Error");

    await this.setSessionData(name, sid, { _createdAt });

    return { payload: { sessionActive: true } };
  }

  async setSessionData(
    name: string,
    sid: string,
    { currentData, overrides = {}, _createdAt, withCookie }: ISessionDataOptions = {}
  ): Promise<{ cookie?: ICookie; createdAt: number; expiresAt: number }> {
    //always send milliseconds and not seconds
    const createdAt = _createdAt ?? Date.now();
    const expiresAt = createdAt + maxAgeInMs;
    const maxAgeInSecs = maxAgeInMs / 1000;
    const redisKey = `${name}==${sid}`;

    const rest = { ...overrides, createdAt, expiresAt };

    const data: IPublicSession = currentData ? { ...currentData, ...rest } : { sid, ...rest };

    await redisService.setJSON<IPublicSession>({
      key: redisKey,
      value: data,
      ttlSeconds: maxAgeInSecs,
    });

    const cookie = withCookie ? createCookie(name, sid, { maxAge: maxAgeInMs }) : undefined;

    return { cookie, createdAt, expiresAt };
  }
}

export default new AuthSessionService();
