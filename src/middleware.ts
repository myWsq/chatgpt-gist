import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const exceptUser = process.env.AUTH_USER;
  const exceptPassword = process.env.AUTH_PASSWORD;

  if (exceptUser && exceptPassword) {
    const basicAuth = req.headers.get("authorization");
    const url = req.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      if (user === exceptUser && pwd === exceptPassword) {
        return NextResponse.next();
      }
    }
    url.pathname = "/api/auth";
    return NextResponse.rewrite(url);
  }
}
