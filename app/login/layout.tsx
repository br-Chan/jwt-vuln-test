import AuthService from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authService = new AuthService();
  const user = await authService.getCurrentUser();

  if (user) {
    redirect("/profile");
  }

  return <>{children}</>;
}