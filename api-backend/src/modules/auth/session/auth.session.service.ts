//import userService from "../entities/user/user.service.js";
import envConfig from "../../../config/env.config.js";
import { comparePassword } from "../../../core/services/hash.service.js";
import {
  generateSignedCookie,
  createClearCookie,
  createCookie,
} from "../../../core/utils/cookie.util.js";
import { Request } from "express";
import {
  ILoginReqBody,
  IPublicSession,
  FIVE_MINS_MS,
  ISetSessionOption,
  ISessionMetaData,
} from "./auth.session.js";
import { ICookie, IServiceResponse } from "@/core/services/services.js";
import UserService from "../../entities/user/user.service.js";
import redisService from "@/core/services/redis.service.js";

const userService = new UserService();
const maxAgeInMs = FIVE_MINS_MS;

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

    const cookies = generateSignedCookie({ _id: user.id, _orgId: user?.orgId });

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

  async publicSessionInit(
    req: Request<any, any, { sid: string; _createdAt: number }>
  ): Promise<IServiceResponse<{ sessionActive: boolean }>> {
    const name = envConfig.get("GUEST");

    if (!name) throw new Error("GUEST is not defined"); // handle in frontend TRY AGAIN LATER

    let { sid, _createdAt } = req.body;

    //cookies should be present when calling this function
    if (!sid || !_createdAt) throw new Error("Unexpected Error");

    const { meta } = await this.setSessionData({
      name,
      sid,
      _createdAt,
      _updatedAt: _createdAt,
    });

    console.log("session initiated @publicSessionInit.ts");

    return { payload: { sessionActive: true } };
  }

  async setSessionData({
    name,
    sid,
    _createdAt,
    _updatedAt,
    options: { currentData, overrides, refreshCookie } = {},
  }: ISetSessionOption): Promise<{
    cookie?: ICookie;
    meta: ISessionMetaData;
  }> {
    //currentData should be passed if overwriting data
    //overrides is the object/s to override inside currentData
    //always send milliseconds and not seconds
    const createdAt = _createdAt ? _createdAt : currentData ? currentData.createdAt : Date.now();
    const updatedAt = _updatedAt ?? Date.now();
    const expiresAt = updatedAt + maxAgeInMs;
    const maxAgeInSecs = maxAgeInMs / 1000;
    const redisKey = `${name}==${sid}`;

    //overwrite sub-objects inside session data e.g. registration
    const rest = { ...overrides, createdAt, expiresAt };

    const data: IPublicSession = currentData ? { ...currentData, ...rest } : { sid, ...rest };

    //console.log("createdAt from setsession", createdAt);
    // console.log("updatedAt from setsession", updatedAt);
    // console.log("expiresAt from setsession", expiresAt);

    const value = await redisService.setJSON<IPublicSession>({
      key: redisKey,
      value: data,
      ttlSeconds: maxAgeInSecs,
    });

    const cookie = refreshCookie ? createCookie(name, sid, { maxAge: maxAgeInMs }) : undefined;

    return { cookie, meta: { name, createdAt, updatedAt, expiresAt } };
  }
}

export default new AuthSessionService();
