import { NextResponse } from "next/server";

export async function middleware(request) {
  const ip = request.headers.get("x-forwarded-for") || "8.8.8.8"; // fallback IP
  const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
  const geoData = await geoRes.json();

  if (geoData.country === "PK") {
    return new NextResponse("Blocked in Pakistan", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
