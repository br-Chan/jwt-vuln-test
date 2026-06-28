"use client";

import { type AuthUser } from "@/types/auth";
import { createContext, useContext } from "react";

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: AuthUser | null;
}) {
  return (
    <AuthContext.Provider
      value={{
        user: initialUser,
        isAuthenticated: Boolean(initialUser),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}