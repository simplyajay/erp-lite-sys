import { NextResponse } from "next/server";

const navigate = (req) => {
  const { pathname } = req.nextUrl;
  const authToken = req.cookies.get(process.env.NEXT_PUBLIC_AUTH_TOKEN);
  const res = NextResponse.next();

  if (!authToken) {
    if (pathname !== "/signup" && !pathname.startsWith("/signup")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (authToken) {
    if (pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return res;
};
