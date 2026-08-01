import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  { title: "Free-Range Hens", desc: "Our hens live in open spaces with natural feed and clean water — stress-free and healthy." },
  { title: "No Artificial Additives", desc: "Zero hormones, zero antibiotics — pure, chemical-free eggs the way nature intended." },
  { title: "Daily Fresh Supply", desc: "Collected every morning and dispatched same day, so you always get the freshest eggs." },
];

export default function IntroSection() {
  return (
    <section className="py-[90px] bg-[#f5edd8] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(rgba(212,160,23,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual side — egg mosaic */}
          <div className="flex justify-center reveal-left">
            <div className="relative" style={{ width: 380, height: 380 }}>
              <div className="egg-mosaic" style={{ width: 380, height: 380 }}>
                <div className="mosaic-egg me1">🥚</div>
                <div className="mosaic-egg me2">🥚</div>
                <div className="mosaic-egg me3">🥚</div>
                <div className="mosaic-egg me4">🥚</div>
                <div className="mosaic-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo/logo.jpg"
                    alt="Broog's logo"
                    className="mosaic-logo"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#D4A017] text-white px-4 py-2 rounded-2xl shadow-[0_8px_24px_rgba(212,160,23,0.4)] text-center z-10">
                <span className="font-heading font-[800] text-[1.1rem] block leading-none">100%</span>
                <span className="text-[0.68rem] font-semibold tracking-wide uppercase opacity-90">Natural</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal-right">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">
              Bringing Nature&apos;s Best<br />
              <span className="text-[#B8860B] italic">Eggs to Your Table</span>
            </h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.78] mb-3 max-w-[520px]">
              At Broog&apos;s, we believe the best food starts at the source. Our country chicken eggs come from free-range farms where hens roam freely, feed naturally, and lay eggs the way nature intended.
            </p>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.78] mb-8 max-w-[520px]">
              Since our founding, we&apos;ve built a reputation for quality, freshness, and reliability — serving households, restaurants, and retail partners across the region.
            </p>

            <div className="flex flex-col gap-4 mb-9">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="shrink-0 w-9 h-9 bg-[rgba(212,160,23,0.12)] rounded-full flex items-center justify-center text-[#D4A017] mt-0.5 transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-white">
                    <CheckCircle size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="block text-[0.95rem] text-[#6B4C2A] font-bold mb-0.5">{f.title}</strong>
                    <p className="text-[0.875rem] text-[#7A7A7A] leading-[1.6] m-0">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.925rem] bg-[#D4A017] text-white shadow-[0_4px_20px_rgba(212,160,23,0.35)] hover:bg-[#B8860B] hover:shadow-[0_8px_28px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn More About Us <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
