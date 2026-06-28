import AuthService from "@/app/lib/auth";
import { NextResponse } from "next/server";

export const POST = async () => {
  const authService = new AuthService();
  await authService.clearCookie();

  return NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
}