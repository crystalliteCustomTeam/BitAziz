import { NextResponse } from "next/server";

export function middleware(request) {
  // Countries you want to block
  const blockedCountries = ["PK", "IN", "BD", "IL"];

  // Next.js tries to get country from the hosting provider
  // geo information is only available if your platform forwards it
  const country = request.geo?.country || "US"; // fallback US if unknown

  if (blockedCountries.includes(country)) {
    return new Response("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

// You can adjust matcher to match everything except static files
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|api).*)"],
};
