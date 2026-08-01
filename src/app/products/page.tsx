import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Brain, Dumbbell, Eye, Baby, ShieldCheck, Home, Egg, Search, Box, Truck, Trophy, Factory } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import { PRODUCTS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description: "Broog's Products — Premium country chicken eggs in retail, tray, and bulk packs.",
};

const comparison = [
  { criteria: "Yolk Colour", icon: "🎨", broogs: "Deep orange — rich carotenoids", commercial: "Pale yellow" },
  { criteria: "Protein", icon: "🧬", broogs: "Up to 25% higher quality protein", commercial: "Standard levels" },
  { criteria: "Omega-3", icon: "🐟", broogs: "Significantly higher", commercial: "Minimal" },
  { criteria: "Vitamin D", icon: "☀️", broogs: "3–4× more", commercial: "Very low" },
  { criteria: "Freshness", icon: "⏰", broogs: "Same-day collection & dispatch", commercial: "Cold-stored, days old" },
  { criteria: "Hormones/Antibiotics", icon: "💉", broogs: "Zero — completely clean", commercial: "Often present" },
  { criteria: "Hen Conditions", icon: "🏠", broogs: "Free-range, open-air, natural", commercial: "Battery cages" },
  { criteria: "Taste", icon: "🍽️", broogs: "Rich, full, authentic flavour", commercial: "Mild, uniform, bland" },
];

const process = [
  { Icon: Home, title: "Free-Range Farms", desc: "We partner exclusively with free-range farms where hens have outdoor access, natural feed, and clean living conditions." },
  { Icon: Egg, title: "Daily Collection", desc: "Eggs collected fresh each morning, inspected for cracks and cleanliness, and prepared for dispatch immediately." },
  { Icon: Search, title: "Grading & Sorting", desc: "All eggs are graded by size and quality, ensuring uniformity and rejecting any substandard eggs." },
  { Icon: Box, title: "Safe Packaging", desc: "Packed in protective, hygienic packaging that prevents damage, contamination, and maintains freshness." },
  { Icon: Truck, title: "Fast Delivery", desc: "Dispatched within hours of collection — our delivery network ensures your eggs arrive fresh and on time." },
];

const benefits = [
  { Icon: Heart, title: "Heart Health", desc: "High omega-3 fatty acids support cardiovascular health and help maintain healthy cholesterol levels." },
  { Icon: Brain, title: "Brain Power", desc: "Rich in choline and B vitamins that support brain function, memory, and cognitive development." },
  { Icon: Dumbbell, title: "Muscle Building", desc: "Complete proteins provide all essential amino acids — excellent for muscle repair and growth." },
  { Icon: Eye, title: "Eye Health", desc: "Lutein and zeaxanthin protect eyes against macular degeneration and improve overall vision." },
  { Icon: Baby, title: "Child Nutrition", desc: "Essential vitamins, minerals, and healthy fats make country eggs an ideal choice for growing children." },
  { Icon: ShieldCheck, title: "Immune Support", desc: "Vitamins A, D, E and zinc strengthen the immune system and help the body fight infections naturally." },
];

const galleryItems = [
  { cls: "gp1 g-large", icon: "🥚", label: "Fresh Country Eggs" },
  { cls: "gp2", icon: "📦", label: "Standard Tray" },
  { cls: "gp3", icon: "🏭", label: "Bulk Packaging" },
  { cls: "gp4", icon: "🌾", label: "Our Farm Partners" },
  { cls: "gp5", icon: "🚚", label: "Delivery Fleet" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="page-hero-content">
            <div className="hero-badge-pill" style={{ animation: "fadeUp .55s .1s ease both" }}>
              🥚 Fresh Every Day
            </div>
            <h1 className="animate-[fadeUp_.6s_.2s_ease_both]">
              Our <span className="highlight">Products</span>
            </h1>
            <p className="animate-[fadeUp_.6s_.3s_ease_both]">
              Country chicken eggs in every size — for every need.
            </p>
            <nav className="breadcrumb animate-[fadeUp_.6s_.4s_ease_both]" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="opacity-50 text-[0.6rem]">›</span>
              <span>Products</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Product Intro */}
      <section className="py-[90px] bg-[#f5edd8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-tag">Premium Quality</div>
            <h2 className="section-title">100% Country Chicken Eggs</h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[560px] mx-auto">
              All our eggs come from free-range country hens. Naturally raised, naturally nutritious, naturally delicious.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center bg-white rounded-[32px] p-10 lg:p-12 border border-[#E8D5B0] shadow-[0_20px_60px_rgba(139,107,74,0.12)] reveal-up">
            <div className="text-center">
              <div className="text-[7rem] leading-none" style={{ animation: "eggBounce 3s ease-in-out infinite" }}>🥚</div>
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {["🌿 Natural", "⭐ Premium", "⏰ Fresh Daily"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[rgba(212,160,23,0.08)] border border-[rgba(212,160,23,0.2)] rounded-full text-[0.78rem] font-semibold text-[#8B6B4A]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-[1.5rem] text-[#6B4C2A] font-bold mb-3.5">
                Country Chicken Eggs — The Gold Standard
              </h3>
              <p className="text-[0.95rem] text-[#4A4A4A] leading-[1.75] mb-6">
                Our country chicken eggs are laid by indigenous breed hens raised in open, free-range environments. These eggs are naturally richer in nutrients, darker in yolk colour, and more flavourful than commercial alternatives.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: "💪", label: "High Protein" },
                  { icon: "🐟", label: "Rich Omega-3" },
                  { icon: "☀️", label: "Vitamin D" },
                  { icon: "🍎", label: "Vitamin A" },
                  { icon: "⚡", label: "Iron & B12" },
                ].map((n) => (
                  <span key={n.label} className="flex items-center gap-2 px-3.5 py-2 bg-[rgba(212,160,23,0.07)] border border-[rgba(212,160,23,0.18)] rounded-[12px] text-[0.82rem] font-semibold text-[#8B6B4A] hover:bg-[rgba(212,160,23,0.14)] transition-colors duration-200">
                    {n.icon} {n.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pack Sizes */}
      <section className="py-[90px] bg-[#EDE3C8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag">Choose Your Pack</div>
            <h2 className="section-title">Available Pack Sizes</h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[560px] mx-auto">
              From single households to large businesses, we have the right pack for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PRODUCTS.map((p, i) => (
              <div
                key={i}
                className={`bg-white rounded-[24px] border-2 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(139,107,74,0.18)] will-change-transform group ${
                  p.featured
                    ? "border-[#D4A017] shadow-[0_8px_32px_rgba(212,160,23,0.2)]"
                    : "border-[#E8D5B0] hover:border-[rgba(212,160,23,0.3)]"
                }`}
                style={p.featured ? { animation: "glowPulse 3.5s ease-in-out infinite" } : undefined}
              >
                {p.badge && (
                  <div className="bg-gradient-to-r from-[#B8860B] to-[#D4A017] text-white text-center py-2 text-[0.73rem] font-[800] tracking-[0.8px] uppercase">
                    ⭐ {p.badge}
                  </div>
                )}
                <div className="px-7 pt-7 pb-5 text-center border-b border-[#E8D5B0]">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(212,160,23,0.1)] flex items-center justify-center mx-auto mb-3 text-[2.2rem] transition-all duration-300 group-hover:bg-[rgba(212,160,23,0.18)]">
                    {p.emoji}
                  </div>
                  <h3 className="font-heading text-[1.08rem] text-[#6B4C2A] font-bold">{p.name}</h3>
                </div>
                <div className="p-7">
                  <p className="text-[0.875rem] text-[#4A4A4A] leading-[1.65] mb-4">{p.desc}</p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-[0.82rem] text-[#4A4A4A]">
                        <span className="w-4 h-4 rounded-full bg-[rgba(212,160,23,0.15)] flex items-center justify-center shrink-0">
                          <span className="text-[#D4A017] text-[0.6rem] font-bold">✓</span>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-bold text-[0.85rem] border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                      p.featured
                        ? "bg-[#D4A017] text-white border-[#D4A017] hover:bg-[#B8860B] shadow-[0_4px_14px_rgba(212,160,23,0.35)]"
                        : "bg-transparent text-[#B8860B] border-[#D4A017] hover:bg-[#D4A017] hover:text-white"
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-[90px] bg-[#f5edd8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag">Health Benefits</div>
            <h2 className="section-title">Why Country Eggs Are Better for You</h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[560px] mx-auto">
              Backed by nutrition science and chosen by health-conscious consumers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-[#E8D5B0] rounded-[20px] p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(139,107,74,0.14)] hover:border-[rgba(212,160,23,0.3)] group will-change-transform">
                <div className="w-[58px] h-[58px] bg-[rgba(212,160,23,0.1)] rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-[#D4A017]">
                  <b.Icon size={22} className="text-[#D4A017] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading text-[1rem] text-[#6B4C2A] font-bold mb-2.5">{b.title}</h3>
                <p className="text-[0.875rem] text-[#4A4A4A] leading-[1.65]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-[90px] bg-[#EDE3C8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag">Why Country Eggs</div>
            <h2 className="section-title">Broog&apos;s vs Commercial Eggs</h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[560px] mx-auto">
              See why our country chicken eggs are the superior choice for health-conscious consumers.
            </p>
          </div>
          <div className="cmp-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th className="crit text-left">Category</th>
                  <th className="country-col">
                    <div className="th-icon">🥚</div>
                    Broog&apos;s Country Eggs
                  </th>
                  <th>
                    <div className="th-icon"><Factory size={18} /></div>
                    Commercial Eggs
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i}>
                    <td className="font-semibold text-[#8B6B4A]">
                      <span className="mr-2">{row.icon}</span>{row.criteria}
                    </td>
                    <td className="cmp-win">
                      <Trophy size={12} className="text-[#D4A017] inline mr-1.5" />{row.broogs}
                    </td>
                    <td className="cmp-lose">{row.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality Steps */}
      <section className="py-[90px] bg-[#f5edd8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag">Our Standards</div>
            <h2 className="section-title">Quality You Can Trust</h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[560px] mx-auto">
              From collection to delivery, every step is designed to preserve freshness and quality.
            </p>
          </div>
          <div className="flex items-stretch gap-2 flex-wrap justify-center">
            {process.map((p, i) => (
              <div key={i} className="contents">
                <div className="flex-1 min-w-[150px] max-w-[210px] text-center bg-white rounded-[20px] border border-[#E8D5B0] p-6 pt-8 relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(139,107,74,0.14)] hover:border-[rgba(212,160,23,0.3)] group">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#D4A017] text-white rounded-full flex items-center justify-center text-[0.72rem] font-[800] shadow-[0_4px_12px_rgba(212,160,23,0.4)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(212,160,23,0.1)] flex items-center justify-center mx-auto mb-3 mt-1 transition-all duration-300 group-hover:bg-[#D4A017]">
                    <p.Icon size={20} className="text-[#D4A017] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[0.9rem] font-bold text-[#6B4C2A] mb-2">{p.title}</h3>
                  <p className="text-[0.78rem] text-[#7A7A7A] leading-[1.55]">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <span className="text-[1.3rem] text-[#D4A017] opacity-35 flex-shrink-0 self-center hidden lg:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[90px] bg-[#EDE3C8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag">Gallery</div>
            <h2 className="section-title">Our Product Gallery</h2>
            <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[560px] mx-auto">
              A visual showcase of the quality and care that goes into every Broog&apos;s product.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div key={i} className={`gallery-item ${item.cls.includes("g-large") ? "g-large" : ""}`}>
                <div className={`gallery-placeholder ${item.cls.replace(" g-large", "")}`}>
                  <span className="text-[2.5rem]">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[0.8rem] text-[#7A7A7A] mt-5">
            ℹ️ Replace gallery placeholders with actual product photos for best results.
          </p>
        </div>
      </section>

      <CTABanner variant="products" />
    </>
  );
}
