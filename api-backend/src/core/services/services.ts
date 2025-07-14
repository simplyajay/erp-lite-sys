import "express";
import { CookieOptions, Response } from "express";

export interface IServiceResponse<T> {
  cookies?: Array<ICookie>;
  clearCookies?: Array<IClearCookie>;
  session?: { name: string; createdAt: number; expiresAt: number };
  payload: T;
}

export interface IResponseHandler<T> {
  promise: Promise<IServiceResponse<T> | void>;
  res: Response;
  successMessage?: string;
  notFoundMessage?: string;
}

export interface IResponse<T> {
  ok: boolean;
  payload: T;
  session?: { createdAt: number; expiresAt: number };
  message: string;
}

export interface ICookie {
  name: string;
  value: string;
  options: CookieOptions;
}

export interface IClearCookie {
  name: string;
  options?: CookieOptions;
}

export interface IPayloadError {
  status: number;
  message: string;
  code?: string;
  keyValue?: Record<string, any>;
}

export interface IJWTDecodedUser {
  _id: number;
  _orgId?: number;
}

declare module "express-serve-static-core" {
  interface Request {
    publicToken?: string;
    user: IJWTDecodedUser;
  }
}
