"use client";

import { create } from "zustand";
import { useEffect } from "react";

export type Skin = "belentani" | "blood" | "gold";

interface SkinState {
  skin: Skin;
  setSkin: (s: Skin) => void;
}

export const useSkin = create<SkinState>((set) => ({
  skin: "belentani",
  setSkin: (skin) => set({ skin }),
}));

export function SkinProvider({ children }: { children: React.ReactNode }) {
  const skin = useSkin((s) => s.skin);
  useEffect(() => {
    document.documentElement.setAttribute("data-skin", skin);
  }, [skin]);
  return <>{children}</>;
}
