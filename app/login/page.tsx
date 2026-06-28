"use client";

import { useAuth } from "@/app/lib/auth-context";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

export default function Login() {
    const router = useRouter();
    const { user } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // useEffect(() => {
    //     if (!user) {
    //         return;
    //     }

    //     router.replace(user.role === "admin" ? "/admin" : "/profile");
    // }, [router, user]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null);
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const username = String(formData.get("username") ?? "").trim();
        const password = String(formData.get("password") ?? "");

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result?.error ?? "Login failed");
                return;
            }

            router.refresh();
            router.replace(result?.redirectTo ?? (result?.user?.role === "admin" ? "/admin" : "/profile"));
        } catch {
            setError("Unable to reach the login endpoint");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0_45%,_#cbd5e1)] px-6 py-12">
            <div className="w-full max-w-md rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 backdrop-blur">
                <div className="mb-8 space-y-2 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                        Secure access
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
                        Sign in to continue
                    </h1>
                    <p className="text-sm leading-6 text-slate-600">
                        Use a student account to open the profile area or an admin account to open the admin area.
                    </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500"
                    />
                    {error ? (
                        <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                            {error}
                        </p>
                    ) : null}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Signing in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}