//import userService from "../entities/user/user.service.js";
import envConfig from "../../../config/env.config.js";
import UserService from "../../entities/user/user.service.js";
import redisService from "@/core/services/redis.service.js";
import { Request } from "express";
import { comparePassword } from "../../../core/services/hash.service.js";
import { IServiceResponse } from "@/core/services/services.js";
import { generateAuthCookie, createClearCookie } from "../../../core/utils/cookie.util.js";
import { ILoginReqBody, ISessionMetaMap, IMetaMapSetOptions, ONE_MIN } from "./auth.session.js";

const userService = new UserService();
export const COOKIE_META = "cookie_meta";

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

    const cookies = generateAuthCookie({ _id: user.id, _orgId: user?.orgId });

    return { payload: { isLoggedIn: true }, cookies };
  }

  async logout(): Promise<IServiceResponse<{ isLoggedIn: boolean }> | void> {
    const cookieName = envConfig.get("AUTH");
    if (!cookieName) {
      console.error("cookie name is not defined @session.service.ts line 50");
      throw new Error("CookieName is not defined");
    }

    const cookie = createClearCookie(cookieName);
    return { payload: { isLoggedIn: false }, clearCookies: [cookie] };
  }

  async getAuthenticatedSessionMeta(
    req: Request
  ): Promise<IServiceResponse<{ sessionMeta: ISessionMetaMap }>> {
    const sid = req.publicToken;

    if (!sid) throw new Error("SID is not defined");

    const sessionMetaRedisKey = `meta==${sid}`;
    const sessionMetaMap = await redisService.getJSON<ISessionMetaMap>(sessionMetaRedisKey);

    //this should not happen since sessionMetaMap is set together with setPublicSessionData
    if (!sessionMetaMap) {
      console.error("No Session meta found");
      throw new Error("No session meta found");
    }

    return { payload: { sessionMeta: sessionMetaMap } };
  }

  async setAuthenticatedSessionMeta({
    sid,
    session,
    ttlMilliseconds,
  }: IMetaMapSetOptions): Promise<ISessionMetaMap> {
    if (!sid || !session) throw new Error("SID or Session is not defined");

    const sessionMetaRedisKey = `meta==${sid}`;

    const { name, ...sessionMeta } = session;

    const currentMap = await redisService.getJSON<ISessionMetaMap>(sessionMetaRedisKey);

    const newSession = { [name]: sessionMeta };

    const map = currentMap ? { ...currentMap, ...newSession } : { ...newSession };

    await redisService.setJSON({
      key: sessionMetaRedisKey,
      value: map,
      ttlSeconds: ttlMilliseconds,
    });

    console.log(map);

    return map;
  }
}

export default new AuthSessionService();
