"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.refresh();
    router.replace("/login");
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white"
    >
      Logout
    </button>
  );
}