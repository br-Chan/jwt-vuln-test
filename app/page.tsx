import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#f8fafc,#e2e8f0_45%,#cbd5e1)] px-6 py-12">
      <section className="w-full max-w-3xl rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 backdrop-blur sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
          JWT Role Demo
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Choose where you want to go
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Jump straight into the login flow, visit the protected profile page,
          or open the admin area.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href="/login"
            className="rounded-2xl border border-slate-300 bg-slate-950 px-5 py-4 text-center font-medium text-white transition hover:bg-slate-800"
          >
            Login
          </Link>
          <Link
            href="/profile"
            className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-center font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Profile
          </Link>
          <Link
            href="/admin"
            className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center font-medium text-emerald-950 transition hover:border-emerald-300 hover:bg-emerald-100"
          >
            Admin
          </Link>
        </div>
      </section>
    </main>
  );
}
