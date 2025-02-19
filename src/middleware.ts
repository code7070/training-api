// middleware.ts
import { NextResponse } from "next/server";
// import type { NextRequest } from 'next/server'

export function middleware() {
  // Mendapatkan response
  const response = NextResponse.next();

  // Mengatur header CORS
  const allowedOrigins = [
    "https://id-preview--b6938889-4b06-410f-a4f7-2006ccc6d3dd.lovable.app",
  ];
  const origin = response.headers.get("Origin") ?? "";

  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  } else {
    response.headers.set("Access-Control-Allow-Origin", "null");
  }

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
