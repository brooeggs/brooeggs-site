import Link from "next/link";
import { ShoppingBasket, Layers, Boxes, Handshake, Truck, Award, ArrowRight } from "lucide-react";

const services = [
  { num: "01", Icon: ShoppingBasket, title: "Retail Packs", desc: "Convenient 6-egg and 12-egg packs for households. Sealed fresh, easy to carry, and perfect for everyday cooking.", href: "/products", linkText: "View Details" },
  { num: "02", Icon: Layers, title: "Standard Tray (30)", desc: "Our best-seller. A full tray of 30 premium country eggs — perfect for families, small eateries, and weekly buyers.", href: "/products", linkText: "View Details" },
  { num: "03", Icon: Boxes, title: "Bulk / Wholesale", desc: "180-egg cases for restaurants, hotels, bakeries and distributors. Custom quantities available with priority delivery.", href: "/contact", linkText: "Get Quote" },
  { num: "04", Icon: Handshake, title: "Farm Partnerships", desc: "We work directly with small farmers — ethical sourcing, fair pricing, and a transparent supply chain you can trust.", href: "/about", linkText: "Learn More" },
  { num: "05", Icon: Truck, title: "Same-Day Delivery", desc: "Order before 10 AM, receive same day. Our logistics are built around keeping your eggs as fresh as possible.", href: "/contact", linkText: "Order Now" },
  { num: "06", Icon: Award, title: "Quality Grading", desc: "Every egg is individually inspected, graded by size and weight, and rejected if it doesn't meet our standards.", href: "/products", linkText: "Our Standards" },
];

export default function ServicesSection() {
  return (
    <section className="py-22 bg-cream-dark relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
            <span className="block w-7 h-[1.5px] bg-gold" />What We Offer<span className="block w-7 h-[1.5px] bg-gold" />
          </div>
          <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
            Our <strong className="text-gold-dark italic">Products &amp; Services</strong>
          </h2>
          <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[580px] mx-auto">
            From small retail packs to large commercial orders — Broog&apos;s has the right egg for every kitchen and every scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-[1]">
          {services.map((s) => (
            <div key={s.num} className="bg-white border border-border-light rounded-[14px] p-8 transition-all duration-300 hover:border-[rgba(200,133,26,.35)] hover:shadow-[0_6px_28px_rgba(44,36,22,.10)] hover:-translate-y-1">
              <div className="font-heading text-[2rem] font-[800] text-[rgba(200,133,26,.2)] leading-none mb-3">{s.num}</div>
              <s.Icon size={28} className="text-gold mb-3.5" />
              <h3 className="font-heading text-[1.05rem] font-bold text-dark mb-2.5 uppercase tracking-[0.5px]">{s.title}</h3>
              <p className="text-[0.875rem] text-text-mid leading-[1.7] mb-4">{s.desc}</p>
              <Link href={s.href} className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-gold-dark uppercase tracking-[0.5px] hover:text-gold hover:gap-2.5 transition-all duration-300">
                {s.linkText} <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="services-big-label">Services</div>
    </section>
  );
}
