import Link from "next/link";
import { Egg, Truck, ShieldCheck, Leaf, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-cream-dark via-cream to-cream-deep relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(200,133,26,.07)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-7 py-20 max-w-[1180px] mx-auto w-full">
        <div>
          <div className="inline-flex items-center gap-2 text-[0.78rem] font-[800] tracking-[2.5px] uppercase text-gold-dark mb-4" style={{ animation: "fadeUp .6s .1s ease both" }}>
            <span className="block w-8 h-[1.5px] bg-gold" />Quality Poultry &amp; Farm Fresh<span className="block w-8 h-[1.5px] bg-gold" />
          </div>
          <h1 className="font-heading font-[800] text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.08] text-dark mb-4 tracking-[-0.5px]" style={{ animation: "fadeUp .6s .25s ease both" }}>
            Fresh Eggs<br />For You
            <span className="block text-[clamp(3rem,7vw,5.2rem)] text-charcoal tracking-[-1px]">
              <em className="italic text-gold-dark">Everyday!</em>
            </span>
          </h1>
          <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[440px] mb-8" style={{ animation: "fadeUp .6s .4s ease both" }}>
            Taste our delicious and nutritious country chicken eggs — naturally raised on free-range farms, collected fresh daily, and delivered straight to your table.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-11" style={{ animation: "fadeUp .6s .55s ease both" }}>
            <Link href="/products" className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300">
              <Egg size={16} /> View All Products
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-transparent text-gold-dark border-2 border-gold hover:bg-gold hover:text-white hover:-translate-y-0.5 transition-all duration-300">
              Learn More
            </Link>
          </div>
          <div className="flex items-center gap-5 flex-wrap" style={{ animation: "fadeUp .6s .7s ease both" }}>
            <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-text-mid"><Leaf size={16} className="text-gold" /> 100% Natural</div>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-text-mid"><Truck size={16} className="text-gold" /> Daily Delivery</div>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-text-mid"><ShieldCheck size={16} className="text-gold" /> Quality Assured</div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="w-full h-[420px] bg-gradient-to-br from-[#f5e8c8] via-[#ecdcaa] to-[#e0c87e] rounded-[22px] flex flex-col items-center justify-center gap-3 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,.3)_0%,transparent_60%)]" />
            <span className="text-[7rem] leading-none drop-shadow-[0_6px_16px_rgba(0,0,0,.15)] relative z-[1]" style={{ animation: "chickFloat 3s ease-in-out infinite" }}>🐣</span>
            <span className="text-[3.5rem] absolute bottom-11 left-10 z-[1]" style={{ animation: "chickFloat 3s .8s ease-in-out infinite" }}>🍳</span>
            <span className="text-[2.5rem] absolute top-10 right-11 z-[1]" style={{ animation: "chickFloat 3s 1.5s ease-in-out infinite" }}>🥚</span>
          </div>
          <div className="absolute -bottom-[18px] -left-[18px] bg-white border-2 border-border rounded-[14px] p-3.5 px-[18px] shadow-md flex items-center gap-3" style={{ animation: "fadeUp .7s .9s ease both" }}>
            <span className="text-[1.8rem]">🥚</span>
            <div><strong className="block text-[0.9rem] text-dark font-bold">Farm Fresh</strong><span className="text-[0.72rem] text-text-light">Collected daily</span></div>
          </div>
          <div className="absolute top-6 -right-[14px] bg-gold rounded-[14px] px-4 py-2.5 shadow-[0_4px_16px_rgba(200,133,26,.35)] flex items-center gap-2 text-white font-bold text-[0.82rem]" style={{ animation: "fadeUp .7s 1s ease both" }}>
            <Star size={16} /> 5000+ Happy Customers
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-light text-[0.7rem] tracking-[1.5px] uppercase" style={{ animation: "fadeUp 1s 1.2s ease both" }}>
        <span>Scroll</span>
        <div className="w-[18px] h-[18px] border-r-2 border-gold border-b-2 rotate-45" style={{ animation: "chevronBounce 1.6s ease infinite" }} />
      </div>
    </section>
  );
}
