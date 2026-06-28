export const AUTH_COOKIE_NAME = 'auth_token';
export const TOKEN_EXPIRY_TIME = "1h";

export type UserRole = "student" | "admin";

export type AuthPayload = {
    username: string;
    role: UserRole;
}

export type AuthUser = AuthPayload;