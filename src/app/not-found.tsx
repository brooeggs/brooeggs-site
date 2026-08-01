import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "#F0EAD6" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(212,160,23,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 45%, rgba(212,160,23,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Floating eggs */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <span className="absolute top-[15%] left-[8%] text-[2.5rem] opacity-15"
          style={{ animation: "floatEgg 6s ease-in-out infinite" }}>🥚</span>
        <span className="absolute bottom-[18%] right-[7%] text-[2rem] opacity-15"
          style={{ animation: "floatEgg 6s 1.5s ease-in-out infinite" }}>🥚</span>
        <span className="absolute top-[60%] left-[5%] text-[1.5rem] opacity-10"
          style={{ animation: "floatEgg 8s 2s ease-in-out infinite" }}>🥚</span>
        <span className="absolute top-[20%] right-[10%] text-[1.8rem] opacity-10"
          style={{ animation: "floatEgg 7s 0.8s ease-in-out infinite" }}>🥚</span>
      </div>

      <div className="text-center relative z-[2] px-7 py-16 max-w-[520px]">
        {/* Icon */}
        <div
          className="text-[6rem] mb-4 leading-none select-none"
          style={{ animation: "eggBounce 2.5s ease-in-out infinite" }}
          aria-hidden="true"
        >
          🍳
        </div>

        {/* 404 number */}
        <h1
          className="font-heading font-[800] leading-none mb-2"
          style={{
            fontSize: "clamp(5rem, 18vw, 7rem)",
            background: "linear-gradient(135deg, #B8860B, #D4A017, #F0C040)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Divider */}
        <div
          className="h-px w-24 mx-auto mb-6 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, #D4A017, transparent)" }}
        />

        <h2 className="font-heading font-[700] text-[1.6rem] text-[#6B4C2A] mb-3">
          Page Not Found
        </h2>
        <p className="text-[#4A4A4A] text-[1rem] leading-[1.75] mb-8 max-w-[380px] mx-auto">
          Oops! This page seems to have rolled away. Let&apos;s get you back to something egg-citing.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.925rem] bg-[#D4A017] text-white shadow-[0_4px_20px_rgba(212,160,23,0.35)] hover:bg-[#B8860B] hover:shadow-[0_8px_28px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            ← Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.925rem] bg-transparent text-[#B8860B] border-2 border-[#D4A017] hover:bg-[#D4A017] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            🥚 Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
