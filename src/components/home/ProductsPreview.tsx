import Link from "next/link";
import { Egg } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const previewProducts = PRODUCTS.slice(0, 3);

export default function ProductsPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-22 bg-beige">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
            <span className="block w-7 h-[1.5px] bg-gold" />
            Fresh From the Farm
            <span className="block w-7 h-[1.5px] bg-gold" />
          </div>
          <h2 className="font-heading font-[800] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.7rem)" }}>
            Country Chicken <strong className="text-gold-dark italic">Eggs</strong>
          </h2>
          <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[540px] mx-auto">
            Naturally raised, nutritiously superior, and delivered with care — available in sizes to suit every need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {previewProducts.map((p, i) => (
            <div
              key={i}
              className={`bg-white border-[1.5px] rounded-[16px] overflow-hidden transition-all duration-300 flex flex-col hover:shadow-[0_8px_32px_rgba(44,36,22,.12)] hover:-translate-y-1 ${
                p.featured ? "border-gold shadow-[0_4px_20px_rgba(200,133,26,.15)]" : "border-border-light hover:border-gold"
              }`}
            >
              {/* Image area */}
              <div className={`w-full h-44 flex items-center justify-center text-[4.5rem] relative ${
                p.featured
                  ? "bg-gradient-to-br from-[#f5e0a0] to-[#e8c85c]"
                  : "bg-gradient-to-br from-cream-dark to-beige"
              }`}>
                <span className="select-none leading-none">{p.emoji}</span>
                {p.badge && (
                  <span className="absolute top-3 right-3 bg-gold text-white text-[0.65rem] font-[800] tracking-[0.5px] px-3 py-1 rounded-[40px] uppercase shadow-sm">
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-heading text-[1rem] sm:text-[1.05rem] font-bold text-dark mb-2 leading-tight">
                  {p.name}
                </h3>
                <p className="text-[0.84rem] text-text-mid leading-[1.65] mb-4 flex-1">{p.desc}</p>
                <ul className="mb-5 flex flex-col gap-1.5">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-[0.8rem] text-text-mid">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[40px] font-bold text-[0.82rem] border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                    p.featured
                      ? "bg-gold text-white border-gold shadow-[0_4px_14px_rgba(200,133,26,.3)] hover:bg-gold-dark"
                      : "bg-transparent text-gold-dark border-gold hover:bg-gold hover:text-white"
                  }`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            <Egg size={16} /> See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
