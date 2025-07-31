import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { registrationSessionInit } from "./api/auth";
import jwt from "jsonwebtoken";

const protectedRoutes = [
  "/dashboard",
  "/account",
  "/purchase",
  "/sale",
  "/stocks",
  "/documents",
  "/suppliers",
];

const REGISTRATION_COOKIENAME = process.env.REGISTRATION_COOKIENAME;
const AUTH_COOKIE_NAME = process.env.AUTH;

export const middleware = async (req) => {
  const { pathname } = req.nextUrl;
  const registerToken = req.cookies.get(REGISTRATION_COOKIENAME);
  const authToken = req.cookies.get(AUTH_COOKIE_NAME);
  const res = NextResponse.next();

  // no need to refresh session ttl if a cookie exists since they both will expire at the exact same time
  if (!registerToken && pathname.startsWith("/signup")) {
    console.log("sdsds");
    const sid = nanoid(64);
    const secret = process.env.JWT_SECRET;
    const duration = 5 * 60;
    const currentUnix = Math.floor(Date.now() / 1000); // ms divided by 1000 to get seconds
    const _expiresAt = currentUnix + duration;
    const timeToLive = _expiresAt - currentUnix;

    res.cookies.set(REGISTRATION_COOKIENAME, sid, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: timeToLive,
    });

    const value = { sid, _expiresAt };
    const stringValue = JSON.stringify(value);
    const signedValue = jwt.sign(stringValue, secret, { expiresIn: timeToLive });

    // you could make the cookie data an object that has sid and expiresAt, stringify it, then sign it and inject to cookie as a value
  }

  const isCurrentRouteProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isCurrentRouteProtected && !authToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (authToken && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  const url = new URL(req.url);

  res.headers.set("x-pathname", url.pathname);
  res.headers.set("x-search", url.searchParams.toString());

  return res;
};

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
