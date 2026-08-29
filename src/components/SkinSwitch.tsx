"use client";

import { useSkin, type Skin } from "@/components/SkinProvider";

const SKINS: { id: Skin; label: string }[] = [
  { id: "belentani", label: "Belentani" },
  { id: "blood", label: "Sangre" },
  { id: "gold", label: "Dorado" },
];

export function SkinSwitch() {
  const skin = useSkin((s) => s.skin);
  const setSkin = useSkin((s) => s.setSkin);
  return (
    <div className="flex items-center gap-1">
      {SKINS.map((s) => (
        <button
          key={s.id}
          onClick={() => setSkin(s.id)}
          className={`rounded-full px-3 py-1 text-xs transition-colors ${
            skin === s.id
              ? "bg-neon/20 text-neon"
              : "text-bone/50 hover:text-bone"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
