"use client";

export default function ProfilePage() {

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
          Signed in as a student. This route is only reachable for accounts
          with the student role.
        </p>
      </section>
    </main>
  );
}