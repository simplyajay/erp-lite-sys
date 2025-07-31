import "express";
import { CookieOptions, Response } from "express";
import { ISessionResponse } from "@/modules/auth/session/auth.session";

// use this to throw field errors
export class ExpectedError extends Error {
  status: number;
  key?: string;
  code?: string;

  constructor(status: number, message: string, key?: string, code?: string) {
    super(message);
    this.status = status;
    this.key = key;
    this.code = code;
  }
}

export interface IExpectedError {
  status: number;
  message: string;
  code?: string;
  key?: string;
}

export interface IServiceResponse<T> {
  cookies?: Array<ICookie>;
  clearCookies?: Array<IClearCookie>;
  payload: (T & { error?: undefined }) | { error: IExpectedError };
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
  message: string;
}

export interface ICookie {
  name: string;
  value: string;
  options: CookieOptions;
}

export interface ICookieValue {
  sid: string;
  maxAge: number;
}

export interface IClearCookie {
  name: string;
  options?: CookieOptions;
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
