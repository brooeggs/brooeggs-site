import type { Metadata } from "next";
import { Check, Eye, Heart, Handshake, ShieldCheck, Leaf, Truck, Award, Users, Headphones, Sun, Home } from "lucide-react";
import Link from "next/link";
import StatsBar from "@/components/home/StatsBar";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Broog's — Our story, mission, and commitment to farm-fresh country eggs.",
};

const checklist = [
  { title: "Free-Range Hens Only", desc: "We partner exclusively with farms that give hens open-air space and natural feed." },
  { title: "Zero Artificial Inputs", desc: "No growth hormones, no antibiotics, no synthetic feed additives — ever." },
  { title: "Direct Farm Relationships", desc: "We know our farmers by name and visit regularly to maintain our standards." },
  { title: "Same-Day Freshness", desc: "Collected at dawn, inspected and packed before noon, delivered before evening." },
];

const mvCards = [
  { Icon: Eye, title: "Our Mission", desc: "To make premium, genuinely natural country chicken eggs accessible to every household and business — without compromising on quality, freshness, or ethical farming practices." },
  { Icon: Home, title: "Our Vision", desc: "To become South India's most trusted name in farm-fresh, natural eggs — recognised for quality you can see, smell, and taste in every single egg we deliver." },
  { Icon: Heart, title: "Our Promise", desc: "Every egg you receive from Broog's was laid by a free-range hen, inspected by our team, and dispatched the same morning. That promise never changes." },
  { Icon: Handshake, title: "Our Community", desc: "We reinvest in the farmers and communities that make our eggs possible. Fair prices, long-term relationships, and sustainable growth for everyone in the chain." },
];

const values = [
  { Icon: ShieldCheck, title: "Integrity", desc: "What you see on the label is exactly what's in the box. No shortcuts, no exaggerations." },
  { Icon: Leaf, title: "Freshness", desc: "Every decision we make — from farm to delivery — is designed to protect the freshness of your eggs." },
  { Icon: Heart, title: "Animal Welfare", desc: "Happy, healthy hens produce better eggs. Animal welfare is not optional for us — it's foundational." },
  { Icon: Users, title: "Community", desc: "We support small farms and rural livelihoods. Every purchase helps sustain the ecosystem we depend on." },
];

const whyChoose = [
  { num: "01", Icon: Leaf, title: "Natural Feed Only", desc: "Our hens eat grains, greens, and insects — no growth hormones, no synthetic additives, no shortcuts." },
  { num: "02", Icon: Sun, title: "Free-Range Living", desc: "Every hen on our partner farms lives outdoors in natural sunlight, producing eggs with richer yolks and better nutrition." },
  { num: "03", Icon: Truck, title: "Same-Day Delivery", desc: "Collected at dawn and on your doorstep by evening. No cold-storage delays, no multi-day warehousing." },
  { num: "04", Icon: Award, title: "Strict Quality Grading", desc: "Every batch is checked for shell, size, weight, and freshness. Anything below standard gets rejected — no exceptions." },
  { num: "05", Icon: Users, title: "Direct Farm Network", desc: "We buy directly from farms we know and trust — full supply-chain transparency with no middlemen inflating costs." },
  { num: "06", Icon: Headphones, title: "7-Day Support", desc: "Our team is available every day to handle queries, adjust orders, and ensure every delivery meets your expectations." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="relative z-[2]">
            <nav className="inline-flex items-center gap-2 text-[0.8rem] text-text-light mb-3.5">
              <Link href="/" className="text-gold-dark font-semibold hover:text-gold">Home</Link>
              <span className="text-[0.55rem] opacity-60">›</span>
              <span>About Us</span>
            </nav>
            <div className="text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-3.5 inline-flex items-center gap-[7px]">
              <span className="block w-7 h-[1.5px] bg-gold" />Our Story<span className="block w-7 h-[1.5px] bg-gold" />
            </div>
            <h1 className="font-heading font-[800] text-[clamp(2rem,5vw,3.2rem)] text-dark tracking-[-0.3px] mb-2.5">
              About <em className="italic text-gold-dark">Broog&apos;s</em>
            </h1>
            <p className="text-text-mid text-[1rem] max-w-[480px] mb-[18px]">
              A passion for real food, ethical farming, and the people who make it possible — since 2025.
            </p>
          </div>
        </div>
      </section>

      <section className="py-22 bg-[#FAF6EE]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
            <div className="relative">
              <div className="w-full h-[460px] bg-gradient-to-br from-[#f0e2c0] via-[#e6d49c] to-[#d8c47c] rounded-[22px] flex items-center justify-center text-[8rem] shadow-lg">🐓</div>
              <div className="absolute -bottom-5 -right-5 bg-gold text-white rounded-[14px] p-[18px] text-center shadow-[0_6px_24px_rgba(200,133,26,.4)]">
                <strong className="block font-heading text-[1.8rem] font-[800] leading-none">2025</strong>
                <span className="text-[0.75rem] tracking-[1px] opacity-90">Founded</span>
              </div>
            </div>
            <div>
              <div className="text-[0.72rem] font-[800] tracking-[2.5px] uppercase text-gold-dark mb-3 flex items-center gap-2">
                <span className="block w-6 h-[1.5px] bg-gold" />Our Background
              </div>
              <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
                Started with a Simple <strong className="text-gold-dark italic">Belief</strong>
              </h2>
              <div className="w-11 h-[3px] bg-gold rounded-sm my-4" />
              <p className="text-[1rem] text-text-mid leading-[1.75] mb-5">
                Broog&apos;s was built on one simple idea — that people deserve eggs the way nature intended them: fresh from a free-range farm, laid by a healthy hen, and on your table the same day.
              </p>
              <p className="text-[1rem] text-text-mid leading-[1.75] mb-6">
                What started as a passion project connecting small Tamil Nadu farms with quality-conscious customers quickly grew into a trusted regional supplier. We now serve thousands of households, restaurants, and retail partners who share our belief that real food matters.
              </p>
              <div className="flex flex-col gap-3.5 mb-8">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="shrink-0 w-8 h-8 bg-[rgba(200,133,26,.06)] border border-[rgba(200,133,26,.3)] rounded-full flex items-center justify-center text-gold-dark text-[0.85rem] mt-[1px]">
                      <Check size={14} />
                    </div>
                    <div>
                      <strong className="block text-[0.9rem] text-dark font-bold mb-0.5">{item.title}</strong>
                      <p className="text-[0.83rem] text-text-light m-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/products" className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5 transition-all duration-300">
                  🥚 Our Products
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-transparent text-gold-dark border-2 border-gold hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-0.5 transition-all duration-300">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="py-22 bg-beige">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="text-center mb-11">
            <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
              <span className="block w-7 h-[1.5px] bg-gold" />Purpose<span className="block w-7 h-[1.5px] bg-gold" />
            </div>
            <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark tracking-[-0.3px]">
              Mission &amp; <strong className="text-gold-dark italic">Vision</strong>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {mvCards.map((card, i) => (
              <div key={i} className="bg-white border-[1.5px] border-border-light rounded-[14px] p-7 transition-all duration-300 hover:border-gold hover:shadow-[0_2px_12px_rgba(44,36,22,.08)]">
                <div className="w-[46px] h-[46px] bg-[rgba(200,133,26,.06)] border border-[rgba(200,133,26,.3)] rounded-lg flex items-center justify-center text-gold-dark text-[1.2rem] mb-3.5">
                  <card.Icon size={22} />
                </div>
                <h3 className="font-heading text-[0.95rem] font-bold text-dark mb-2">{card.title}</h3>
                <p className="text-[0.84rem] text-text-mid leading-[1.65]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-dark">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="text-center mb-11">
            <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-bright mb-2.5">
              <span className="block w-7 h-[1.5px] bg-gold-bright" />What We Stand For<span className="block w-7 h-[1.5px] bg-gold-bright" />
            </div>
            <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-white tracking-[-0.3px]">
              Our Core <strong className="text-gold-bright italic">Values</strong>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="bg-cream-dark border border-border-light rounded-[14px] p-6 text-center transition-all duration-300 hover:bg-white hover:border-gold hover:-translate-y-[3px]">
                <v.Icon size={28} className="text-gold mb-3 mx-auto" />
                <h3 className="font-heading text-[0.9rem] font-bold text-dark mb-[7px]">{v.title}</h3>
                <p className="text-[0.8rem] text-text-mid leading-[1.6]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-[#FAF6EE]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
              <span className="block w-7 h-[1.5px] bg-gold" />Why Broog&apos;s<span className="block w-7 h-[1.5px] bg-gold" />
            </div>
            <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
              Six Reasons Customers <strong className="text-gold-dark italic">Stay With Us</strong>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyChoose.map((s) => (
              <div key={s.num} className="bg-white border border-border-light rounded-[14px] p-8 transition-all duration-300 hover:border-[rgba(200,133,26,.35)] hover:shadow-[0_6px_28px_rgba(44,36,22,.10)] hover:-translate-y-1">
                <div className="font-heading text-[2rem] font-[800] text-[rgba(200,133,26,.2)] leading-none mb-3">{s.num}</div>
                <s.Icon size={28} className="text-gold mb-3.5" />
                <h3 className="font-heading text-[1.05rem] font-bold text-dark mb-2.5 uppercase tracking-[0.5px]">{s.title}</h3>
                <p className="text-[0.875rem] text-text-mid leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="about" />
    </>
  );
}
