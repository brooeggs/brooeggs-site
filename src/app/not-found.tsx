import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-dark via-cream to-cream-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(200,133,26,.07)_1.5px,transparent_1.5px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="text-center relative z-[2] px-7 py-16 max-w-[520px]">
        <div className="text-[7rem] mb-6 leading-none">🍳</div>
        <h1 className="font-heading font-[800] text-[6rem] leading-none text-gold-dark mb-2">404</h1>
        <h2 className="font-heading font-[800] text-[1.8rem] text-dark mb-3">Page Not Found</h2>
        <p className="text-text-mid text-[1rem] leading-[1.75] mb-8">Oops! This page seems to have rolled away. Let&apos;s get you back to something egg-citing.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
