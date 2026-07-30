import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook",
  description: "Soon — Broog's Facebook page coming.",
};

export default function FacebookPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-dark via-cream to-cream-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(200,133,26,.07)_1.5px,transparent_1.5px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="text-center relative z-[2] px-7 py-16 max-w-[520px]">
        <div className="text-[6rem] mb-6" style={{ animation: "chickFloat 3s ease-in-out infinite" }}>🥚</div>
        <div className="inline-flex items-center gap-2 px-[22px] py-2.5 bg-gold text-white rounded-[40px] font-bold text-[0.9rem] shadow-[0_4px_18px_rgba(200,133,26,.32)] mb-8">
          Soon Update
        </div>
        <h1 className="font-heading font-[800] text-[2.2rem] text-dark mb-3">Facebook <em className="italic text-gold-dark">Coming Soon</em></h1>
        <p className="text-text-mid text-[1rem] leading-[1.75] mb-8">We&apos;re preparing something special. Our Facebook page will be here soon with updates, offers, and farm stories.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-transparent text-gold-dark border-2 border-gold hover:bg-gold hover:text-white hover:-translate-y-0.5 transition-all duration-300">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
