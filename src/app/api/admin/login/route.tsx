import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const form = await req.formData();

  if (
    form.get("username") === process.env.ADMIN_USERNAME &&
    form.get("password") === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET!, { expiresIn: "7d" });
    const res = NextResponse.redirect("/admin/data");
    res.cookies.set("adminAuth", token, { httpOnly: true, path: "/" });
    return res;
  }

  return NextResponse.json({ error: "Invalid" }, { status: 401 });
}
