import Link from "next/link";
import { SkinSwitch } from "@/components/SkinSwitch";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="glass absolute right-6 top-6 flex items-center gap-4 px-4 py-2">
        <SkinSwitch />
      </div>

      <p className="neon-glow mb-4 text-xs uppercase tracking-[0.5em] text-bone/70">
        Un universo artístico inmersivo
      </p>
      <h1 className="font-display text-6xl font-bold text-bone sm:text-8xl">
        BELENTANI
      </h1>
      <p className="text-neon neon-glow mt-2 text-2xl font-medium tracking-widest">
        JUDAS EXPERIENCE
      </p>

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-bone/60">
        La traición transformada en algoritmo. La sanación convertida en hack
        conceptual. Entra a la experiencia.
      </p>

      <nav className="mt-12 flex flex-wrap items-center justify-center gap-3">
        {[
          ["Artist", "/artist"],
          ["Arquitectura", "/architecture"],
          ["Música", "/music"],
          ["Judas", "/judas"],
          ["Portal", "/portal"],
          ["Galería", "/gallery"],
          ["Contacto", "/contact"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="glass rounded-full px-5 py-2.5 text-sm text-bone/85 transition-colors hover:text-neon hover:shadow-[0_0_18px_var(--be-glow)]"
          >
            {label}
          </Link>
        ))}
      </nav>

      <p className="mt-16 text-xs text-bone/30">
        Se recomiendan auriculares · scroll suave
      </p>
    </main>
  );
}
