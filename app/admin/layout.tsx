import AuthService from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authService = new AuthService();
  const user = await authService.getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "admin") {
    redirect(user.role === "student" ? "/profile" : "/login");
  }

  return <>{children}</>;
}