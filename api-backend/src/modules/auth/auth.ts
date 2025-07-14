import redisService from "@/core/services/redis.service";
import authSessionService from "./auth.session.service";
import { ICookie } from "@/core/services/services";
import { nanoid } from "nanoid";

export const ONE_HOUR_MS = 60 * 60 * 1000;
export const FORTY_MINS_MS = 40 * 60 * 1000;
export const THIRTY_MINS_MS = 30 * 60 * 1000;
export const TWENTY_MINS_MS = 20 * 60 * 1000;
export const TEN_MINS_MS = 10 * 60 * 1000;
export const FIVE_MINS_MS = 5 * 60 * 1000;

export interface ILoginReqBody {
  identifier: string;
  pw: string;
}

type AccountType = "organization" | "individual";

type FlowKey =
  | "accountType"
  | "businessInfo"
  | "personalInfo"
  | "accountInfo"
  | "review"
  | "confirmed";

export interface IPublicSession {
  sid: string;
  createdAt: number;
  expiresAt: number;
  registration?: IRegSessionCachedData;
}

interface IPublicSessionInit {
  key: string;
  value: IPublicSession;
  ttlSeconds?: number;
  keepTTL?: boolean;
}

interface IRegSessionAccountType {
  value: AccountType;
}

interface IRegSessionGeneric {
  value: Record<string, unknown> | AccountType;
}

export interface IRegSessionCachedData {
  identity: string;
  completedSteps: FlowKey[];
  accountType?: IRegSessionAccountType;
  businessInfo?: IRegSessionGeneric;
  personalInfo?: IRegSessionGeneric;
  accountInfo?: IRegSessionGeneric;
  review?: IRegSessionGeneric;
  confirmed?: IRegSessionGeneric;
}

export interface ISessionDataOptions {
  currentData?: IPublicSession;
  overrides?: Partial<IPublicSession>;
  _createdAt?: number;
  withCookie?: boolean;
}

export interface ICachedFlow {}

export const setPublicSession = async ({
  key,
  value,
  ttlSeconds,
  keepTTL,
}: IPublicSessionInit): Promise<IPublicSession> => {
  const data = await redisService.setJSON<IPublicSession>({ key, value, ttlSeconds, keepTTL });
  return data;
};

export const getPublicSession = async (key: string): Promise<IPublicSession | undefined> => {
  const session = await redisService.getJSON<IPublicSession>(key);

  if (!session) return;

  return session;
};
