import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();
  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 400 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return NextResponse.json({ error: "Invalid password" }, { status: 400 });

  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: "30d" });
  const res = NextResponse.json({ success: true });
  res.cookies.set("auth", token, { httpOnly: true, path: "/" });
  return res;
}
