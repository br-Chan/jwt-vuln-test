"use client";

import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

export default function AdminPage() {
	const { user } = useAuth();

	return (
		<main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white">
			<section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur">
				<p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
					Admin area
				</p>
				<h1 className="mt-4 text-4xl font-semibold tracking-tight">Protected admin dashboard</h1>
				<p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
					You are signed in as {user?.username ?? "an authenticated admin"}. This route is only
					reachable for accounts with the admin role.
				</p>
				<div className="mt-8 flex gap-3">
					<Link
						href="/profile"
						className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
					>
						Go to profile
					</Link>
					<Link
						href="/login"
						className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-emerald-300"
					>
						Switch account
					</Link>
				</div>
			</section>
		</main>
	);
}
