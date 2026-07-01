import { AUTH_COOKIE_NAME, AuthPayload, AuthUser } from '@/app/types/auth';
import jwt, { SignOptions } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || "";

export default class AuthService {
  public signJWT(payload: AuthPayload, options?: SignOptions): string {
    const token = jwt.sign(payload, JWT_SECRET, options);
    return token;
  }

  public decodeJWT(token: string): object | null {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded as object;
    } catch (error) {
      console.error('JWT verification failed:', error);
      return null;
    }
  }

  public getUserFromToken(token: string): AuthUser | null {
    const decoded = this.decodeJWT(token);

    if (!decoded || typeof decoded === "string" || !("username" in decoded) || !("role" in decoded)) {
      return null;
    }

    const { username, role } = decoded as AuthPayload;

    if (role !== "student" && role !== "admin") {
      return null;
    }

    return { username, role };
  }

  public async getCurrentUser(): Promise<AuthUser | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      return null;
    }

    return this.getUserFromToken(token);
  }

  public async setCookie(token: string) {
    const cookieStore = await cookies();

    cookieStore.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    })
  }

  public async clearCookie() {
    console.log("Clearing auth cookie");
    const cookieStore = await cookies();

    cookieStore.set(AUTH_COOKIE_NAME, "", {
      path: "/",
      maxAge: 0,
    })
  }

}