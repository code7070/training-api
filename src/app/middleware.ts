// middleware.ts
import { NextResponse } from "next/server";
// import type { NextRequest } from 'next/server'

export function middleware() {
  // Mendapatkan response
  const response = NextResponse.next();

  // Mengatur header CORS
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );

  return response;
}

// Mengatur path mana yang akan diproses oleh middleware
export const config = {
  matcher: "/api/:path*",
};
