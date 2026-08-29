"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ParticlesProps = {
  count?: number;
  /** radio de dispersión de la nube */
  radius?: number;
  color?: string;
};

/**
 * Nube de puntos con InstancedMesh.
 * UNA sola geometría + UN material + UNA llamada de dibujo (draw call)
 * para miles de partículas — exactamente la técnica de "Instanced Mesh".
 * Matrices de instancia se actualizan en la GPU vía quaternion; nada de
 * crear mil mallas individuales.
 */
export function Particles({
  count = 6000,
  radius = 6,
  color = "#ff2bd6",
}: ParticlesProps) {
  const mesh = useRef<THREE.InstancedMesh>(null);

  // Posiciones/rotaciones calculadas UNA vez (pool reutilizable, CPU->GPU único upload)
  const { positions, quats, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const quats = new Float32Array(count * 4);
    const speeds = new Float32Array(count);
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      e.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );
      q.setFromEuler(e);
      quats[i * 4] = q.x;
      quats[i * 4 + 1] = q.y;
      quats[i * 4 + 2] = q.z;
      quats[i * 4 + 3] = q.w;
      speeds[i] = 0.1 + Math.random() * 0.4;
    }
    return { positions, quats, speeds };
  }, [count, radius]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Rotación global lenta: re-escribe matrices de instancia cada frame
  // (un solo pasada over el pool, sin allocations)
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2],
      );
      dummy.quaternion.set(
        quats[i * 4],
        quats[i * 4 + 1],
        quats[i * 4 + 2],
        quats[i * 4 + 3],
      );
      dummy.rotation.y = t * speeds[i];
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[0.035, 0]} />
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
}
