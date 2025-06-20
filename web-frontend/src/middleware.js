import { NextResponse } from "next/server";
export const middleware = async (req) => {
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

export const config = {
  matcher: [
    "/account/:path*",
    "/dashboard/:path*",
    "/documents/:path*",
    "/purchase/:path*",
    "/sale/:path*",
    "/stocks/:path*",
    "/suppliers/:path*",
    "/register/:path*",
  ],
};
