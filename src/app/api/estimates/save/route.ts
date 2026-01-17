import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Estimate from "@/models/Estimate";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();
  const token = (await cookies()).get("auth")?.value;
  if (!token) return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
  const user = await User.findOne({ email: decoded.email });
  if (!user) return NextResponse.json({ error: "User missing" }, { status: 401 });

  await Estimate.create({
    userId: user._id,
    ...body
  });

  return NextResponse.json({ success: true });
}
