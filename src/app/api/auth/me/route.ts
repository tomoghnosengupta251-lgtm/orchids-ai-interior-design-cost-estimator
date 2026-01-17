import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const token = (await cookies()).get("auth")?.value;
  if (!token) return NextResponse.json({ user: null });

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findOne({ email: decoded.email }).select("-password");
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
