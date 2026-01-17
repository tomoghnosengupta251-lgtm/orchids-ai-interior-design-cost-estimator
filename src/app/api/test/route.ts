import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    envValue: process.env.MONGODB_URI ? "ok" : "not set"
  });
}
