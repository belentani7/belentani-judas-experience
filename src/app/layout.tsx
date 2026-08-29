import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "@/styles/globals.css";
import { SkinProvider } from "@/components/SkinProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BELENTANI — Judas Experience",
  description:
    "Un universo artístico inmersivo. La traición como algoritmo, la sanación como hack conceptual.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>
        <SkinProvider>{children}</SkinProvider>
      </body>
    </html>
  );
}
