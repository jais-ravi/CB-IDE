import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/overview", "/polo", "/ll"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  // Logging for debug
  console.log("Middleware: path =", pathname, "| token =", token);

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/overview/:path*", "/polo/:path*", "/ll/:path*"],
};