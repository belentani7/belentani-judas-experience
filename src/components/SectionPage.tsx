import Link from "next/link";
import type { ReactNode } from "react";

export function SectionPage({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children?: ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <Link
        href="/"
        className="glass fixed left-6 top-6 rounded-full px-4 py-2 text-xs text-bone/70 hover:text-neon"
      >
        ← Inicio
      </Link>
      <p className="neon-glow mb-3 text-xs uppercase tracking-[0.5em] text-bone/60">
        {kicker}
      </p>
      <h1 className="font-display text-5xl font-bold text-bone sm:text-7xl">
        {title}
      </h1>
      <div className="mt-12 flex flex-col items-center gap-4">{children}</div>
    </main>
  );
}
