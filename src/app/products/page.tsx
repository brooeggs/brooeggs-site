import type { Metadata } from "next";
import Link from "next/link";
import { Dna, Fish, Sun, Leaf, Home, Egg, Search, Box, Truck, Trophy, Factory } from "lucide-react";
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
  { Icon: Home, title: "Free-Range Farm", desc: "Hens roam outdoors on partner farms, eating natural feed under open sky." },
  { Icon: Egg, title: "Daily Collection", desc: "Eggs collected fresh each morning by trained farm staff — before 8 AM." },
  { Icon: Search, title: "Quality Inspection", desc: "Every batch checked for shell, size, weight, and freshness standards." },
  { Icon: Box, title: "Careful Packing", desc: "Packed in sturdy trays designed to protect during transport. Labelled & dated." },
  { Icon: Truck, title: "Same-Day Delivery", desc: "Dispatched fresh — no overnight storage, no delays, no compromise." },
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="relative z-[2]">
            <nav className="inline-flex items-center gap-2 text-[0.8rem] text-text-light mb-3.5">
              <Link href="/" className="text-gold-dark font-semibold hover:text-gold">Home</Link>
              <span className="text-[0.55rem] opacity-60">›</span>
              <span>Products</span>
            </nav>
            <div className="text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-3.5 inline-flex items-center gap-[7px]">
              <span className="block w-7 h-[1.5px] bg-gold" />What We Sell<span className="block w-7 h-[1.5px] bg-gold" />
            </div>
            <h1 className="font-heading font-[800] text-[clamp(2rem,5vw,3.2rem)] text-dark tracking-[-0.3px] mb-2.5">
              Our <em className="italic text-gold-dark">Products</em>
            </h1>
            <p className="text-text-mid text-[1rem] max-w-[480px] mb-[18px]">
              Farm-fresh country eggs — available in sizes to suit every home, business, and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-22 bg-[#FAF6EE]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-[72px] items-start">
            <div>
              <div className="text-[0.72rem] font-[800] tracking-[2.5px] uppercase text-gold-dark mb-3 flex items-center gap-2">
                <span className="block w-6 h-[1.5px] bg-gold" />Signature Product
              </div>
              <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
                Broog&apos;s Country <strong className="text-gold-dark italic">Chicken Eggs</strong>
              </h2>
              <div className="w-11 h-[3px] bg-gold rounded-sm my-5" />
              <p className="text-[1rem] text-text-mid leading-[1.75] mb-5">
                Our country chicken eggs come from indigenous desi breeds raised on open, free-range farms. The result is a deeper, richer orange yolk with naturally higher omega-3, vitamin D, and protein content than any commercial egg.
              </p>
              <p className="text-[1rem] text-text-mid leading-[1.75] mb-6">
                Each egg is individually inspected, graded by size and weight, and packed the same day it&apos;s collected — so what arrives at your door is as fresh as possible.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                {[
                  { icon: Dna, label: "High Protein" },
                  { icon: Fish, label: "Omega-3 Rich" },
                  { icon: Sun, label: "Vitamin D" },
                  { icon: Leaf, label: "No Additives" },
                ].map((tag) => (
                  <span key={tag.label} className="inline-flex items-center gap-[7px] px-3.5 py-[7px] bg-[rgba(200,133,26,.06)] rounded-[40px] text-[0.8rem] font-bold text-gold-dark border border-beige">
                    <tag.icon size={14} /> {tag.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { emoji: "🐔", title: "Free-Range Hens", desc: "Indigenous breeds, open farms, natural sunlight — the foundation of every great egg." },
                { emoji: "🌾", title: "Natural Feed", desc: "Grains, greens, insects. No synthetic pellets, no hormones, no antibiotics." },
                { emoji: "🔍", title: "Quality Checked", desc: "Every egg inspected for shell, weight, and freshness before it leaves the farm." },
                { emoji: "📦", title: "Same-Day Packed", desc: "Collected at dawn and packed before noon — freshness you can see in the yolk." },
              ].map((s, i) => (
                <div key={i} className="bg-cream border border-border-light rounded-[14px] p-6 hover:border-gold hover:shadow-[0_6px_28px_rgba(44,36,22,.10)] hover:-translate-y-[3px] transition-all duration-300">
                  <span className="text-[2.2rem] mb-3.5 block">{s.emoji}</span>
                  <h3 className="font-heading text-[0.95rem] font-bold text-dark mb-2 uppercase tracking-[0.5px]">{s.title}</h3>
                  <p className="text-[0.82rem] text-text-mid leading-[1.65]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-22 bg-beige">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
              <span className="block w-7 h-[1.5px] bg-gold" />Choose Your Pack<span className="block w-7 h-[1.5px] bg-gold" />
            </div>
            <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
              Available <strong className="text-gold-dark italic">Pack Sizes</strong>
            </h2>
            <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[580px] mx-auto">
              From individual packs to bulk commercial cases — there&apos;s a Broog&apos;s pack for every need and every scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PRODUCTS.map((p, i) => (
              <div key={i} className={`bg-white border-[1.5px] border-border-light rounded-[14px] overflow-hidden transition-all duration-300 flex flex-col hover:border-gold hover:shadow-[0_6px_28px_rgba(44,36,22,.10)] hover:-translate-y-[5px] ${p.featured ? "border-gold" : ""}`}>
                <div className={`w-full h-48 flex items-center justify-center text-[4.5rem] relative ${p.badge ? "bg-gradient-to-br from-[#f5e0a0] to-[#e8c85c]" : "bg-gradient-to-br from-cream-dark to-beige"}`}>
                  {p.emoji}
                  {p.badge && (
                    <span className="absolute top-3.5 right-3.5 bg-gold text-white text-[0.68rem] font-[800] tracking-[0.5px] px-3 py-1 rounded-[40px] uppercase">{p.badge}</span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-[1.05rem] font-bold text-dark mb-2">{p.name}</h3>
                  <p className="text-[0.85rem] text-text-mid leading-[1.65] mb-3.5 flex-1">{p.desc}</p>
                  <ul className="mb-4.5 flex flex-col gap-1.5">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-[0.82rem] text-text-mid">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[40px] font-bold text-[0.82rem] border-2 transition-all duration-300 hover:-translate-y-0.5 ${p.featured ? "bg-gold text-white border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark" : "bg-transparent text-gold-dark border-gold hover:bg-gold hover:text-white"}`}>
                    {p.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-[#FAF6EE]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="text-center mb-11">
            <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
              <span className="block w-7 h-[1.5px] bg-gold" />Why Country Eggs<span className="block w-7 h-[1.5px] bg-gold" />
            </div>
            <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
              Broog&apos;s vs <strong className="text-gold-dark italic">Commercial Eggs</strong>
            </h2>
            <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[580px] mx-auto">
              The science-backed difference you can see in the yolk and taste in every bite.
            </p>
          </div>
          <div className="cmp-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th className="crit text-left w-[28%] px-[22px] py-[18px]">Criteria</th>
                  <th className="px-[22px] py-[18px] text-gold-bright">
                    <div className="text-[1.3rem] mb-1 text-gold-bright">🥚</div>
                    Broog&apos;s Country Eggs
                  </th>
                  <th className="px-[22px] py-[18px]">
                    <div className="text-[1.3rem] mb-1 text-gold-bright"><Factory size={20} /></div>
                    Commercial Eggs
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-border-light last:border-b-0 hover:bg-beige-light transition-all duration-300">
                    <td className="px-[22px] py-[13px] text-[0.875rem] font-bold text-text-mid flex items-center gap-2">
                      <span>{row.icon}</span> {row.criteria}
                    </td>
                    <td className="cmp-win px-[22px] py-[13px] text-[0.875rem]">
                      <Trophy size={14} className="text-gold inline mr-1" /> {row.broogs}
                    </td>
                    <td className="cmp-lose px-[22px] py-[13px] text-[0.875rem]">{row.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-22 bg-dark">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="text-center mb-11">
            <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-bright mb-2.5">
              <span className="block w-7 h-[1.5px] bg-gold-bright" />Our Process<span className="block w-7 h-[1.5px] bg-gold-bright" />
            </div>
            <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-white tracking-[-0.3px]">
              Farm to <strong className="text-gold-bright italic">Your Table</strong>
            </h2>
            <p className="text-white/60 text-[1rem] max-w-[560px] mx-auto mt-3 mb-11 leading-[1.75]">
              Every egg goes through a careful, five-step journey from farm to delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((p, i) => (
              <div key={i} className="bg-cream-dark border border-border-light rounded-[14px] p-6 text-center transition-all duration-300 hover:bg-white hover:border-gold hover:-translate-y-[3px]">
                <p.Icon size={28} className="text-gold mb-3 mx-auto" />
                <h3 className="font-heading text-[0.9rem] font-bold text-dark mb-[7px]">{p.title}</h3>
                <p className="text-[0.8rem] text-text-mid leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="products" />
    </>
  );
}
