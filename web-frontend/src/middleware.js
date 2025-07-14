import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { serverAPI } from "./core/axios/axios.server";
import { startPublicSession } from "./api/auth";

const protectedRoutes = [
  "/dashboard",
  "/account",
  "/purchase",
  "/sale",
  "/stocks",
  "/documents",
  "/suppliers",
];

const PUBLIC_COOKIE_NAME = process.env.NEXT_PUBLIC_TOKEN;
const AUTH_COOKIE_NAME = process.env.NEXT_PUBLIC_AUTH_TOKEN;

export const middleware = async (req) => {
  const { pathname } = req.nextUrl;
  const publicToken = req.cookies.get(PUBLIC_COOKIE_NAME);
  const authToken = req.cookies.get(AUTH_COOKIE_NAME);
  const res = NextResponse.next();

  if (!publicToken) {
    const sid = nanoid(64);
    const _createdAt = Date.now();

    res.cookies.set(PUBLIC_COOKIE_NAME, sid, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 10 * 60 * 1000, //10 mins
    });

    const backendRes = await startPublicSession({ sid, _createdAt });

    if (!backendRes.ok) throw new Error("Public Token Error");
  }

  const isCurrentRouteProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isCurrentRouteProtected && !authToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (authToken && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
};

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
