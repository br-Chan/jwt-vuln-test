import AuthService from "@/app/lib/auth";
import { USERS } from "@/app/lib/users";
import { TOKEN_EXPIRY_TIME, UserRole } from "@/app/types/auth";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const authService = new AuthService();
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Invalid username or password" }, { status: 400 });
  }

  const user = USERS.find(
    (candidate) => candidate.username === username && candidate.password === password,
  );

  if (!user) {
    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  }
  
  const token = authService.signJWT(
    { username, role: user.role as UserRole },
    { expiresIn: TOKEN_EXPIRY_TIME },
  );

  await authService.setCookie(token);

  return NextResponse.json(
    {
      data: token,
      user: {
        username: user.username,
        role: user.role,
      },
      redirectTo: user.role === "admin" ? "/admin" : "/profile",
    },
    { status: 200 },
  );
};
