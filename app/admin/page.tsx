"use client";

import Link from "next/link";

export default function AdminPage() {

	return (
		<main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white">
			<section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur">
				<p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
					Admin area
				</p>
				<h1 className="mt-4 text-4xl font-semibold tracking-tight">Admin dashboard</h1>
				<p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
					You are signed in as an admin. Flag goes here TODO TODO.
				</p>
			</section>
		</main>
	);
}
