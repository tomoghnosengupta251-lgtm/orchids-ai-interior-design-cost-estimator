import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { email } = await req.json();
  const user = await User.findOne({ email });
  return NextResponse.json({ exists: !!user });
}
