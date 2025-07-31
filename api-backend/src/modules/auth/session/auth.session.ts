import { IRegistrationData } from "../registration/auth.registration";

export const ONE_HOUR = 60 * 60;
export const FORT_MINS = 40 * 60;
export const THIRTY_MINS = 30 * 60;
export const TWENTY_MINS = 20 * 60;
export const TEN_MINS = 10 * 60;
export const FIVS_MINS = 5 * 60;
export const ONE_MIN = 1 * 60;

export interface ILoginReqBody {
  identifier: string;
  pw: string;
}

//abolish
export interface IPublicSession {
  sid: string;
  createdAt: number;
  updatedAt: number;
  expiresAt: number;
  registration?: IRegistrationData;
}

// change
export interface ISessionMeta {
  name: string;
  createdAt: number;
  updatedAt: number;
  expiresAt: number;
}

export interface ISessionResponse {
  isValid: boolean;
  data?: ISessionMeta;
}

// change
export interface ISessionMetaMap {
  [key: string]: { createdAt: number; updatedAt: number; expiresAt: number };
}

// change
export interface IMetaMapSetOptions {
  sid: string;
  session: ISessionMeta;
  ttlMilliseconds: number;
}
