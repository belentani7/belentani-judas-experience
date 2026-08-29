"use client";

import { Canvas } from "@react-three/fiber";
import { Particles } from "./Particles";
import type { ReactNode } from "react";

type SceneProps = {
  children?: ReactNode;
  className?: string;
  /** Límite de densidad de píxeles (GPU). 2 = máx razonable en 4K */
  maxDpr?: number;
  /** Si el usuario pide movimiento reducido, deshabilitamos el 3D */
  reducedMotion?: boolean;
};

/**
 * Lienzo WebGL optimizado:
 *  - devicePixelRatio limitado (evita re-render 4K inútil).
 *  - `frameloop="demand"` cuando reducedMotion: sin redibujo continuo.
 *  - gl antialias y alpha fijos (menos memoria de GPU).
 */
export function Scene({ children, className, maxDpr = 2 }: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, maxDpr]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 8], fov: 45 }}
        frameloop={useReducedMotion() ? "demand" : "always"}
      >
        {children ?? <Particles />}
      </Canvas>
    </div>
  );
}

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
