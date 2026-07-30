import Link from "next/link";
import { Egg, Truck, ShieldCheck, Leaf, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[72px]"
      style={{
        background: "linear-gradient(135deg, #2C1A0A 0%, #3D2810 40%, #5C3D18 70%, #7A5022 100%)"
      }}
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.04)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />
      {/* Warm glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,133,26,.18) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,133,26,.10) 0%, transparent 65%)" }} />

      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-5 sm:px-8 lg:px-12 py-16 sm:py-20 max-w-[1180px] mx-auto w-full">

        {/* ── Text column ─────────────────────────────────────── */}
        <div>
          <div
            className="inline-flex items-center gap-2 text-[0.75rem] font-[800] tracking-[2.5px] uppercase text-gold-bright mb-5"
            style={{ animation: "fadeUp .6s .1s ease both" }}
          >
            <span className="block w-8 h-[1.5px] bg-gold-bright" />
            Quality Poultry &amp; Farm Fresh
            <span className="block w-8 h-[1.5px] bg-gold-bright" />
          </div>

          <h1
            className="font-heading font-[800] leading-[1.06] text-white mb-5 tracking-[-0.5px]"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", animation: "fadeUp .6s .25s ease both" }}
          >
            Fresh Eggs<br />For You
            <span className="block tracking-[-1px]" style={{ fontSize: "clamp(3rem, 7vw, 5.4rem)" }}>
              <em className="italic text-gold-bright">Everyday!</em>
            </span>
          </h1>

          <p
            className="text-[1rem] text-white/75 leading-[1.8] max-w-[460px] mb-9"
            style={{ animation: "fadeUp .6s .4s ease both" }}
          >
            Taste our delicious and nutritious country chicken eggs — naturally raised on
            free-range farms, collected fresh daily, and delivered straight to your table.
          </p>

          <div
            className="flex gap-3.5 flex-wrap mb-10"
            style={{ animation: "fadeUp .6s .55s ease both" }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_20px_rgba(200,133,26,.45)] hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              <Egg size={16} /> View All Products
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[40px] font-bold text-[0.9rem] bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/70 hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          <div
            className="flex items-center gap-5 flex-wrap"
            style={{ animation: "fadeUp .6s .7s ease both" }}
          >
            <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-white/70">
              <Leaf size={16} className="text-gold-bright" /> 100% Natural
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-white/70">
              <Truck size={16} className="text-gold-bright" /> Daily Delivery
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-white/70">
              <ShieldCheck size={16} className="text-gold-bright" /> Quality Assured
            </div>
          </div>
        </div>

        {/* ── Visual column ────────────────────────────────────── */}
        <div className="relative flex justify-center items-center mt-6 lg:mt-0">
          {/* Card */}
          <div className="w-full max-w-[440px] lg:max-w-none h-[340px] sm:h-[400px] lg:h-[440px] rounded-[24px] flex items-center justify-center relative overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.35)]"
            style={{ background: "linear-gradient(135deg, #f5e8c8 0%, #ecdcaa 50%, #e0c87e 100%)" }}
          >
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 35%, rgba(255,255,255,.35) 0%, transparent 60%)" }} />
            <span
              className="text-[7rem] sm:text-[8rem] leading-none drop-shadow-[0_8px_20px_rgba(0,0,0,.18)] relative z-[1] select-none"
              style={{ animation: "chickFloat 3s ease-in-out infinite" }}
            >🐣</span>
            <span
              className="text-[3.5rem] sm:text-[4rem] absolute bottom-10 left-10 z-[1] select-none"
              style={{ animation: "chickFloat 3s .8s ease-in-out infinite" }}
            >🍳</span>
            <span
              className="text-[2.5rem] sm:text-[3rem] absolute top-10 right-10 z-[1] select-none"
              style={{ animation: "chickFloat 3s 1.5s ease-in-out infinite" }}
            >🥚</span>
          </div>

          {/* Badge — bottom left */}
          <div
            className="absolute -bottom-4 sm:-bottom-5 left-3 sm:left-0 lg:-left-5 bg-white border-2 border-border rounded-[16px] p-3.5 px-4 shadow-[0_8px_24px_rgba(0,0,0,.15)] flex items-center gap-3 z-[2]"
            style={{ animation: "fadeUp .7s .9s ease both" }}
          >
            <span className="text-[1.8rem] leading-none">🥚</span>
            <div>
              <strong className="block text-[0.9rem] text-dark font-bold leading-tight">Farm Fresh</strong>
              <span className="text-[0.72rem] text-text-light">Collected daily</span>
            </div>
          </div>

          {/* Badge — top right */}
          <div
            className="absolute top-4 sm:top-6 right-3 sm:right-0 lg:-right-4 bg-gold rounded-[16px] px-4 py-3 shadow-[0_6px_20px_rgba(200,133,26,.5)] flex items-center gap-2 text-white font-bold text-[0.82rem] z-[2]"
            style={{ animation: "fadeUp .7s 1s ease both" }}
          >
            <Star size={15} /> 5000+ Happy Customers
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 text-[0.68rem] tracking-[2px] uppercase"
        style={{ animation: "fadeUp 1s 1.2s ease both" }}
      >
        <span>Scroll</span>
        <div className="w-[18px] h-[18px] border-r-2 border-gold-bright border-b-2 rotate-45" style={{ animation: "chevronBounce 1.6s ease infinite" }} />
      </div>
    </section>
  );
}
