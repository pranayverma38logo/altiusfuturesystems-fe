import { NextRequest, NextResponse } from "next/server";

const NOT_FOUND_ROUTE = "/__404";
const ALLOWED_PATHS = new Set<string>(["/", NOT_FOUND_ROUTE]);
const STATIC_PATH_PREFIXES: string[] = ["/_next", "/static"];
const STATIC_FILES_REGEX = /\.[^/]+$/;

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  if (ALLOWED_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  if (
    STATIC_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    pathname === "/favicon.ico" ||
    STATIC_FILES_REGEX.test(pathname)
  ) {
    return NextResponse.next();
  }

  const notFoundUrl = request.nextUrl.clone();
  notFoundUrl.pathname = NOT_FOUND_ROUTE;
  return NextResponse.rewrite(notFoundUrl);
}

export const config = {
  matcher: ["/:path*"],
};
