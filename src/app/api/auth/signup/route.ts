import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  await connectDB();
  const { name, email, phone, pincode, password } = await req.json();

  const hash = await bcrypt.hash(password, 10);
  await User.create({ name, email, phone, pincode, password: hash });

  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: "30d" });

  const res = NextResponse.json({ success: true });
  res.cookies.set("auth", token, { httpOnly: true, path: "/" });

  return res;
}
