import Link from "next/link";
import { Egg, Leaf, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden pt-[80px]"
      style={{
        background: "linear-gradient(145deg, #1C0D07 0%, #2C1810 30%, #4A2E14 60%, #7A5230 85%, #B8860B 100%)",
      }}
    >
      {/* Radial glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.4) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.35) 0%, transparent 70%)", transform: "translate(20%, 20%)" }} />
      </div>

      {/* Floating decorative eggs */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <span className="absolute top-[14%] left-[7%] text-[2.8rem] opacity-10" style={{ animation: "floatEgg 7s ease-in-out infinite" }}>🥚</span>
        <span className="absolute top-[68%] left-[4%] text-[1.8rem] opacity-10" style={{ animation: "floatEgg 7s 1.8s ease-in-out infinite" }}>🥚</span>
        <span className="absolute top-[18%] right-[9%] text-[3.5rem] opacity-8" style={{ animation: "floatEgg 7s 0.9s ease-in-out infinite" }}>🥚</span>
        <span className="absolute bottom-[22%] right-[6%] text-[2.2rem] opacity-10" style={{ animation: "floatEgg 7s 2.8s ease-in-out infinite" }}>🥚</span>
        <span className="absolute top-[48%] right-[18%] text-[4.5rem] opacity-8" style={{ animation: "chickFloat 8s 1.2s ease-in-out infinite" }}>🐓</span>
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(rgba(212,160,23,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-[2] px-6 py-16 sm:py-20 max-w-[1180px] mx-auto w-full">
        <div className="max-w-[680px]">

          {/* Badge pill */}
          <div className="hero-badge-pill" style={{ animation: "fadeUp .55s .1s ease both" }}>
            <Leaf size={14} strokeWidth={2.5} />
            100% Natural &amp; Farm Fresh
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-[800] leading-[1.08] text-white mb-5 tracking-[-1.5px]"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 4.8rem)", animation: "fadeUp .6s .22s ease both" }}
          >
            Premium{" "}
            <span className="relative inline-block">
              <span className="text-[#F0C040]">Country</span>
              <span className="absolute bottom-[-3px] left-0 w-full h-[3px] rounded-full"
                style={{ background: "linear-gradient(90deg, #F0C040, rgba(240,192,64,0))" }} />
            </span>
            <br />Chicken Eggs
          </h1>

          {/* Subtitle */}
          <p
            className="text-[1.1rem] text-white/80 leading-[1.75] max-w-[520px] mb-9"
            style={{ animation: "fadeUp .6s .38s ease both" }}
          >
            Straight from free-range farms to your table. Experience the authentic taste of nature&apos;s finest eggs — rich in nutrients, bursting with flavour.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3.5 flex-wrap mb-12" style={{ animation: "fadeUp .6s .52s ease both" }}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.925rem] bg-[#D4A017] text-white shadow-[0_6px_24px_rgba(212,160,23,0.5)] hover:bg-[#B8860B] hover:shadow-[0_8px_32px_rgba(212,160,23,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Egg size={16} strokeWidth={2.5} /> Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.925rem] bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get In Touch <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-0 w-fit"
            style={{ animation: "fadeUp .6s .66s ease both" }}
          >
            {[
              { value: "5000", suffix: "+", label: "Happy Customers" },
              { value: "100", suffix: "%", label: "Natural & Fresh" },
              { value: "365", suffix: "", label: "Days Delivery" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center px-6 py-3 ${i < 2 ? "border-r border-white/15" : ""}`}
                style={{
                  background: i === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: i === 0 ? "16px 0 0 16px" : i === 2 ? "0 16px 16px 0" : "0",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRight: i < 2 ? "none" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-end gap-0.5">
                  <span className="font-heading text-[1.9rem] font-[800] text-[#F0C040] leading-none">{stat.value}</span>
                  {stat.suffix && <span className="text-[1.4rem] font-bold text-[#F0C040] leading-none mb-0.5">{stat.suffix}</span>}
                </div>
                <span className="block text-[0.7rem] text-white/65 mt-1 tracking-[0.8px] uppercase font-semibold whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[0.7rem] tracking-[1.5px] uppercase"
        style={{ animation: "fadeUp 1s 1.1s ease both" }}
        aria-hidden="true"
      >
        <span>Scroll Down</span>
        <span className="w-4 h-4 border-r-2 border-b-2 border-white/40 rotate-45 block"
          style={{ animation: "chevronBounce 1.6s ease infinite" }} />
      </div>
    </section>
  );
}
