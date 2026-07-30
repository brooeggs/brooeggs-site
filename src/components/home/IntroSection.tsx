import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { emoji: "🐔", title: "The Best Hens", desc: "Indigenous free-range breeds raised on natural grain and pasture. Happy hens lay better eggs — it's that simple." },
  { emoji: "🌾", title: "Our Farms", desc: "Partner farms across Tamil Nadu follow ethical, sustainable practices with open-air housing and clean water access." },
  { emoji: "🥚", title: "Organic Eggs", desc: "Zero artificial additives. Our eggs are 100% chemical-free, collected within hours and packed the same day." },
  { emoji: "🚚", title: "Fast Delivery", desc: "We dispatch orders same-morning so your eggs arrive fresh — whether you're a home buyer or a bulk business." },
];

export default function IntroSection() {
  return (
    <section className="py-22 bg-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-[72px] items-start">
          <div>
            <div className="text-[0.72rem] font-[800] tracking-[2.5px] uppercase text-gold-dark mb-3 flex items-center gap-2">
              <span className="block w-6 h-[1.5px] bg-gold" />Quality Poultry
            </div>
            <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
              <strong className="text-gold-dark italic">Friendly Service</strong><br />You Can Trust
            </h2>
            <div className="w-11 h-[3px] bg-gold rounded-sm my-5" />
            <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[420px] mb-5">
              At Broog&apos;s, we believe great food starts with great farming. Our country chicken eggs come from hens that roam freely, eat naturally, and live well — and you can taste that difference in every single egg.
            </p>
            <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[420px] mb-8">
              We supply households, restaurants, hotels, and retailers across the region with unwavering freshness and quality, day after day.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300 mt-8">
              <ArrowRight size={16} /> View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
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
  );
}
