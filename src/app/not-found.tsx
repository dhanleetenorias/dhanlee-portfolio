import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[60vh] max-w-[1100px] place-items-center px-6">
      <div className="text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
          404
        </p>
        <h1 className="mt-3 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
          This page doesn&rsquo;t exist.
        </h1>
        <Link
          href="/"
          className="mt-6 inline-block rounded-[10px] border border-line bg-surface px-5 py-2.5 text-[14.5px] font-medium text-soft transition-colors hover:border-accent/40 hover:text-accent-t"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
