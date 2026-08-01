import Link from "next/link";
import { ShoppingBasket, Layers, Boxes, Handshake, Truck, Award, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    Icon: ShoppingBasket,
    title: "Retail Packs",
    desc: "Convenient 6-egg and 12-egg packs for households. Sealed fresh, easy to carry, perfect for everyday cooking.",
    href: "/products",
    linkText: "View Details",
  },
  {
    num: "02",
    Icon: Layers,
    title: "Standard Tray (30)",
    desc: "Our best-seller. A full tray of 30 premium country eggs — ideal for families, small eateries, and weekly buyers.",
    href: "/products",
    linkText: "View Details",
  },
  {
    num: "03",
    Icon: Boxes,
    title: "Bulk / Wholesale",
    desc: "180-egg cases for restaurants, hotels, bakeries and distributors. Custom quantities with priority delivery.",
    href: "/contact",
    linkText: "Get Quote",
  },
  {
    num: "04",
    Icon: Handshake,
    title: "Farm Partnerships",
    desc: "We work directly with small farmers — ethical sourcing, fair pricing, and a transparent supply chain you can trust.",
    href: "/about",
    linkText: "Learn More",
  },
  {
    num: "05",
    Icon: Truck,
    title: "Same-Day Delivery",
    desc: "Order before 10 AM and receive your eggs the same day. Built for freshness, not convenience-store shelf life.",
    href: "/contact",
    linkText: "Order Now",
  },
  {
    num: "06",
    Icon: Award,
    title: "Quality Grading",
    desc: "Every egg is individually inspected, graded by size and weight, and rejected if it doesn&apos;t meet our standards.",
    href: "/products",
    linkText: "Our Standards",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-[90px] bg-[#f5edd8] relative overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute bottom-[-30px] left-0 right-0 font-heading text-center leading-none pointer-events-none select-none uppercase tracking-[-3px]"
        style={{
          fontSize: "clamp(5rem, 14vw, 11rem)",
          fontWeight: 900,
          color: "rgba(212,160,23,0.055)",
        }}
        aria-hidden="true"
      >
        Services
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-14">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">
            Our Products &amp;{" "}
            <em className="italic text-[#B8860B] not-italic" style={{ fontStyle: "italic" }}>Services</em>
          </h2>
          <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[560px] mx-auto">
            From small retail packs to large commercial orders — Broog&apos;s has the right egg for every kitchen and every scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="group bg-white rounded-[20px] border border-[#E8D5B0] p-8 transition-all duration-350 hover:border-[rgba(212,160,23,0.35)] hover:shadow-[0_20px_50px_rgba(139,107,74,0.14)] hover:-translate-y-1.5 will-change-transform relative overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px] scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left"
                style={{ background: "linear-gradient(90deg, #D4A017, #8B6B4A)" }} />

              <div className="font-heading text-[1.8rem] font-[800] leading-none mb-3"
                style={{ color: "rgba(212,160,23,0.2)" }}>
                {s.num}
              </div>

              <div className="w-11 h-11 rounded-xl bg-[rgba(212,160,23,0.1)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#D4A017]">
                <s.Icon size={22} className="text-[#D4A017] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>

              <h3 className="font-heading text-[1.02rem] font-bold text-[#6B4C2A] mb-2.5 tracking-[0.2px]">
                {s.title}
              </h3>
              <p className="text-[0.875rem] text-[#4A4A4A] leading-[1.72] mb-5">{s.desc}</p>

              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-[#B8860B] uppercase tracking-[0.6px] hover:text-[#D4A017] hover:gap-2.5 transition-all duration-300"
              >
                {s.linkText} <ArrowRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
