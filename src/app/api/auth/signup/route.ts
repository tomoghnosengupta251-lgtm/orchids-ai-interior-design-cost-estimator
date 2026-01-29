import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, pincode, password } = body;

    // 🔒 BACKEND VALIDATION
    if (!name || !email || !phone || !pincode || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    if (phone.length < 10) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    if (pincode.length !== 6) {
      return NextResponse.json(
        { error: "Invalid pincode" },
        { status: 400 }
      );
    }

    await connectDB();

    // 🔁 Prevent duplicate users
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      phone,
      pincode,
      password: hash
    });

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET!,
      { expiresIn: "30d" }
    );

    const res = NextResponse.json({ success: true });

    res.cookies.set("auth", token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });

    return res;

  } catch (error) {
    return NextResponse.json(
      { error: "Signup failed" },
      { status: 500 }
    );
  }
}
