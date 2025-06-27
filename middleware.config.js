export const config = {
  matcher: [
    /*
     * Match all routes except for:
     * - static files (e.g., /_next/static/, /favicon.ico)
     * - API routes (optional, based on your use case)
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|api).*)",
  ],
};
