import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const previewProducts = PRODUCTS.slice(0, 3);

export default function ProductsPreview() {
  return (
    <section className="py-[90px] bg-[#f5edd8]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14">
          <div className="section-tag">Our Products</div>
          <h2 className="section-title">Country Chicken Eggs</h2>
          <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[520px] mx-auto">
            Naturally raised, nutritiously superior, and delivered with care to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {previewProducts.map((p, i) => (
            <div
              key={i}
              className={`group bg-white rounded-[24px] border-2 transition-all duration-350 relative overflow-hidden product-card-accent hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(139,107,74,0.18)] will-change-transform ${
                p.featured
                  ? "border-[#D4A017] shadow-[0_8px_32px_rgba(212,160,23,0.15)]"
                  : "border-[#E8D5B0] hover:border-[rgba(212,160,23,0.3)]"
              }`}
              style={p.featured ? { animation: "glowPulse 3.5s ease-in-out infinite" } : undefined}
            >
              {/* Best seller ribbon */}
              {p.badge && (
                <div className="absolute top-5 right-[-32px] bg-[#D4A017] text-white text-[0.68rem] font-[800] px-10 py-1.5 rotate-45 whitespace-nowrap tracking-[0.5px] uppercase z-10 shadow-md">
                  {p.badge}
                </div>
              )}

              <div className="p-8 pb-6">
                {/* Emoji in circle */}
                <div className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-5 text-[2.2rem] transition-all duration-300 ${
                  p.featured
                    ? "bg-[rgba(212,160,23,0.14)] group-hover:bg-[rgba(212,160,23,0.22)]"
                    : "bg-[rgba(212,160,23,0.08)] group-hover:bg-[rgba(212,160,23,0.15)]"
                }`}>
                  {p.emoji}
                </div>

                <h3 className="font-heading text-[1.15rem] font-[700] text-[#6B4C2A] mb-2">{p.name}</h3>
                <p className="text-[#4A4A4A] text-[0.875rem] leading-[1.65] mb-5">{p.desc}</p>

                <ul className="mb-6 flex flex-col gap-2">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-[0.85rem] text-[#4A4A4A]">
                      <span className="w-4 h-4 rounded-full bg-[rgba(212,160,23,0.15)] flex items-center justify-center shrink-0">
                        <span className="text-[#D4A017] text-[0.6rem] font-bold">✓</span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/products"
                  className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-bold text-[0.85rem] border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                    p.featured
                      ? "bg-[#D4A017] text-white border-[#D4A017] hover:bg-[#B8860B] hover:border-[#B8860B] shadow-[0_4px_14px_rgba(212,160,23,0.35)]"
                      : "bg-transparent text-[#B8860B] border-[#D4A017] hover:bg-[#D4A017] hover:text-white"
                  }`}
                >
                  View Details <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-[0.925rem] bg-[#D4A017] text-white shadow-[0_4px_20px_rgba(212,160,23,0.35)] hover:bg-[#B8860B] hover:shadow-[0_8px_28px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            🥚 See All Products <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
