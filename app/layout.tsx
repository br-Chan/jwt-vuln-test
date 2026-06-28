import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AuthService from "@/app/lib/auth";
import { AuthProvider } from "@/app/lib/auth-context";
import type { AuthUser } from "@/app/types/auth";
import "./globals.css";
import { LogoutButton } from "@/app/components/LogoutButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JWT Role Demo",
  description: "Role-based auth demo with student and admin routes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authService = new AuthService();
  const initialUser = (await authService.getCurrentUser()) as AuthUser | null;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-950">
        <AuthProvider initialUser={initialUser}>
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  JWT Role Demo
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Student and admin access shell
                </p>
              </div>
              {initialUser && (
                <LogoutButton />
              )}
            </div>
          </header>
          <div className="flex-1">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
