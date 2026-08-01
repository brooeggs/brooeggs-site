import type { Metadata } from "next";
import { Check, Leaf, Truck, Award, Users, Headphones, Sun, ShieldCheck, Heart, Handshake } from "lucide-react";
import Link from "next/link";
import StatsBar from "@/components/home/StatsBar";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Broog's — Our story, mission, and commitment to farm-fresh country eggs.",
};

const storyHighlights = [
  { icon: "❤️", label: "Family Values" },
  { icon: "🌿", label: "Natural Farming" },
  { icon: "🏆", label: "Quality First" },
];

const mvCards = [
  {
    icon: "🎯",
    title: "Our Mission",
    desc: "To provide the freshest, most nutritious country chicken eggs to every household and business we serve — delivered with reliability, honesty, and a genuine commitment to your health and satisfaction.",
    list: ["Daily fresh supply from farm networks", "Zero compromise on quality standards", "Transparent and ethical sourcing"],
  },
  {
    icon: "👁️",
    title: "Our Vision",
    desc: "To become the most trusted and preferred supplier of country chicken eggs in India — building a future where natural, sustainable farming is the standard, not the exception.",
    list: ["Expand to serve every major city", "Champion sustainable egg farming", "Build the largest free-range network"],
  },
];

const whyChoose = [
  { Icon: Award, title: "Certified Quality", desc: "Every batch is graded and checked to meet our strict freshness and quality standards before reaching you." },
  { Icon: Leaf, title: "100% Natural", desc: "Our hens are never given artificial hormones or antibiotics. They roam freely and eat natural feed — the way it should be." },
  { Icon: Truck, title: "Fast Delivery", desc: "Eggs arrive fresh within hours of collection. Our logistics network is built for speed and reliability." },
  { Icon: Handshake, title: "Trusted Partners", desc: "We work with vetted, ethical farms that share our values of animal welfare and sustainable agriculture." },
  { Icon: Sun, title: "Fair Pricing", desc: "Premium quality doesn't mean unaffordable. We offer competitive pricing for individuals and bulk buyers alike." },
  { Icon: Headphones, title: "Dedicated Support", desc: "Our support team is always ready to assist with orders, queries, and special requirements — 7 days a week." },
];

const values = [
  { num: "01", title: "Integrity", desc: "Honest and transparent in everything — from how we source our eggs to how we price our products." },
  { num: "02", title: "Quality", desc: "We never compromise. Every egg that reaches our customers represents our absolute best effort." },
  { num: "03", title: "Sustainability", desc: "We promote farming practices that respect the environment and ensure long-term availability of natural produce." },
  { num: "04", title: "Community", desc: "We support local farmers by creating fair partnerships and stable income opportunities for small farms." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="page-hero-content">
            <div className="hero-badge-pill" style={{ animation: "fadeUp .55s .1s ease both" }}>
              ℹ️ Our Story
            </div>
            <h1 className="animate-[fadeUp_.6s_.2s_ease_both]">
              About <span className="highlight">Broog&apos;s</span>
            </h1>
            <p className="animate-[fadeUp_.6s_.3s_ease_both]">
              Committed to quality, freshness, and natural farming since day one.
            </p>
            <nav className="breadcrumb animate-[fadeUp_.6s_.4s_ease_both]" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="opacity-50 text-[0.6rem]">›</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-[90px] bg-[#f5edd8] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: "radial-gradient(rgba(212,160,23,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Visual */}
            <div className="reveal-left">
              <div className="bg-gradient-to-br from-white to-[#F5EDD8] rounded-[32px] p-12 text-center border border-[#E8D5B0] shadow-[0_20px_60px_rgba(139,107,74,0.12)] relative overflow-hidden">
                {/* bg watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                  style={{ fontSize: "10rem", opacity: 0.04 }} aria-hidden="true">🥚</div>
                <div className="text-[7rem] leading-none mb-5 relative z-[1]">🥚</div>
                <div className="inline-flex flex-col items-center bg-[#D4A017] px-6 py-3 rounded-2xl shadow-[0_8px_24px_rgba(212,160,23,0.4)] relative z-[1]">
                  <span className="font-heading text-[1.15rem] font-[800] text-white leading-none">Since 2025</span>
                  <span className="text-[0.72rem] font-semibold text-white/80 tracking-wide mt-0.5">Trusted Egg Supplier</span>
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                {[
                  { icon: <Users size={20} className="text-[#D4A017] mb-2 mx-auto" />, value: "5000+", label: "Customers" },
                  { icon: <span className="text-[1.3rem] block mb-2">🥚</span>, value: "100K+", label: "Eggs Delivered" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-[18px] p-5 text-center border border-[#E8D5B0] shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(139,107,74,0.12)] transition-all duration-300">
                    {s.icon}
                    <span className="font-heading text-[1.4rem] font-[800] text-[#6B4C2A] block">{s.value}</span>
                    <p className="text-[0.75rem] text-[#7A7A7A] m-0 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="reveal-right">
              <div className="section-tag">Our Story</div>
              <h2 className="section-title">
                From Farm to Your Table<br />
                <span className="text-[#B8860B] italic">with Passion &amp; Purpose</span>
              </h2>
              <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.78] mb-4">
                Broog&apos;s was born from a simple belief — that every family deserves access to genuinely fresh, naturally produced eggs. We saw a growing need for authentic country chicken eggs that hadn&apos;t been mass-processed or chemically treated, and we set out to fill that gap.
              </p>
              <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.78] mb-4">
                Starting with a network of trusted local farms, we built a supply chain that prioritises animal welfare, natural practices, and rapid delivery. Every egg that leaves our network has been carefully collected, graded, and packed.
              </p>
              <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.78] mb-7">
                Today, Broog&apos;s serves thousands of customers — from individual families and home chefs to restaurants, bakeries, and retail outlets — all united by their appreciation for genuine country chicken eggs.
              </p>

              <div className="flex gap-3 flex-wrap mb-9">
                {storyHighlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(212,160,23,0.08)] border border-[rgba(212,160,23,0.2)] rounded-full text-[0.85rem] font-semibold text-[#8B6B4A] hover:bg-[rgba(212,160,23,0.14)] transition-colors duration-200">
                    {h.icon} {h.label}
                  </span>
                ))}
              </div>

              <div className="flex gap-3.5 flex-wrap">
                <Link href="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.925rem] bg-[#D4A017] text-white shadow-[0_4px_20px_rgba(212,160,23,0.35)] hover:bg-[#B8860B] hover:shadow-[0_8px_28px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 transition-all duration-300">
                  🥚 View Products
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.925rem] bg-transparent text-[#B8860B] border-2 border-[#D4A017] hover:bg-[#D4A017] hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Mission & Vision */}
      <section className="py-[90px] bg-[#f5edd8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag">Our Purpose</div>
            <h2 className="section-title">Mission &amp; Vision</h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[520px] mx-auto">
              The principles that guide everything we do at Broog&apos;s.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {mvCards.map((card, i) => (
              <div key={i} className={`p-10 rounded-[28px] border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(139,107,74,0.16)] group ${
                i === 0
                  ? "bg-gradient-to-br from-[rgba(212,160,23,0.04)] to-white border-[rgba(212,160,23,0.18)]"
                  : "bg-gradient-to-br from-[rgba(139,107,74,0.04)] to-white border-[rgba(139,107,74,0.18)]"
              }`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[1.5rem] mb-5 transition-all duration-300 ${
                  i === 0
                    ? "bg-[rgba(212,160,23,0.1)] group-hover:bg-[rgba(212,160,23,0.2)]"
                    : "bg-[rgba(139,107,74,0.1)] group-hover:bg-[rgba(139,107,74,0.2)]"
                }`}>
                  {card.icon}
                </div>
                <h3 className="font-heading text-[1.35rem] text-[#6B4C2A] font-bold mb-3">{card.title}</h3>
                <p className="text-[0.9rem] text-[#4A4A4A] leading-[1.75] mb-5">{card.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {card.list.map((item, li) => (
                    <li key={li} className="flex items-center gap-3 text-[0.875rem] text-[#4A4A4A]">
                      <span className="w-5 h-5 rounded-full bg-[rgba(212,160,23,0.15)] flex items-center justify-center shrink-0">
                        <Check size={11} className="text-[#D4A017]" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-[90px] bg-[#EDE3C8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag">Why Broog&apos;s</div>
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[520px] mx-auto">
              We go beyond just delivering eggs — we deliver trust, quality, and freshness every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((s, i) => (
              <div key={i} className="bg-white rounded-[20px] border border-[#E8D5B0] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,107,74,0.15)] hover:border-[rgba(212,160,23,0.3)] will-change-transform group">
                <div className="w-[62px] h-[62px] bg-[rgba(212,160,23,0.1)] rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-[#D4A017]">
                  <s.Icon size={24} className="text-[#D4A017] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading text-[1rem] font-bold text-[#6B4C2A] mb-2.5">{s.title}</h3>
                <p className="text-[0.875rem] text-[#4A4A4A] leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[90px] relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #1C0D07, #2C1810, #3A1E0C)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "radial-gradient(rgba(212,160,23,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
          <div className="text-center mb-14">
            <div className="section-tag light">Our Values</div>
            <h2 className="section-title light">The Principles We Stand By</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-[20px] bg-white/5 border border-white/8 text-center transition-all duration-300 hover:bg-[rgba(212,160,23,0.08)] hover:border-[rgba(212,160,23,0.25)] hover:-translate-y-1.5 group">
                <div className="font-heading text-[2.2rem] font-[800] leading-none mb-3 transition-colors duration-300"
                  style={{ color: "rgba(212,160,23,0.25)" }}>
                  {v.num}
                </div>
                <div className="w-px h-6 bg-[rgba(212,160,23,0.2)] mx-auto mb-4" />
                <h3 className="font-heading text-[1.05rem] text-[#F0C040] font-bold mb-2.5">{v.title}</h3>
                <p className="text-[0.875rem] text-white/55 leading-[1.65]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="about" />
    </>
  );
}
