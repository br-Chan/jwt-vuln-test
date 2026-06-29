export const AUTH_COOKIE_NAME = 'auth_token';
export const TOKEN_EXPIRY_TIME = "1h";


export type AuthPayload = {
    username: string;
    role: string; // student or admin
}

export type AuthUser = AuthPayload;