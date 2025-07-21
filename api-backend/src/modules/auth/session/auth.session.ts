import { IRegSessionCachedData } from "../registration/auth.registration";

export const ONE_HOUR_MS = 60 * 60 * 1000;
export const FORTY_MINS_MS = 40 * 60 * 1000;
export const THIRTY_MINS_MS = 30 * 60 * 1000;
export const TWENTY_MINS_MS = 20 * 60 * 1000;
export const TEN_MINS_MS = 10 * 60 * 1000;
export const FIVE_MINS_MS = 5 * 60 * 1000;
export const ONE_MIN_MS = 60 * 1000;

export interface ILoginReqBody {
  identifier: string;
  pw: string;
}

export interface IPublicSession {
  sid: string;
  createdAt: number;
  expiresAt: number;
  registration?: IRegSessionCachedData;
}

export interface ISessionDataOptions {
  currentData?: IPublicSession;
  overrides?: Partial<IPublicSession>;
  refreshCookie?: boolean;
}

export interface ISetSessionOption {
  name: string;
  sid: string;
  _createdAt?: number;
  _updatedAt?: number; //value should be passed when initiating the first time
  options?: ISessionDataOptions;
}

export interface ISessionMetaData {
  name: string;
  createdAt: number;
  updatedAt: number;
  expiresAt: number;
}

export interface ISessionResponse {
  isValid: boolean;
  data?: ISessionMetaData;
}
