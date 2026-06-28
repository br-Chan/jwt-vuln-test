"use client";

import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <section className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
          Student area
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
          Protected profile page
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          Signed in as {user?.username ?? "a student"}. This route is only reachable for accounts
          with the student role.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/admin"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Go to admin
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Switch account
          </Link>
        </div>
      </section>
    </main>
  );
}