import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email;

    // 🔒 BACKEND VALIDATION
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findOne({ email });

    return NextResponse.json({ exists: !!user });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
