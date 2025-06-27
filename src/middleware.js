import { NextResponse } from "next/server";

// Middleware is executed on the Edge
export function middleware(request) {
  // List of blocked country codes
  const blockedCountries = ["PK", "IN", "BD", "IL"]; // IL = Israel

  // Geo data is only available if Vercel/AWS provides it; fallback to 'US'
  const country = request.geo?.country || "US";

  if (blockedCountries.includes(country)) {
    return new Response("Access Denied", { status: 403 });
  }

  // Allow all other traffic
  return NextResponse.next();
}
