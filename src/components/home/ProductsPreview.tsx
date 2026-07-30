import Link from "next/link";
import { Egg } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const previewProducts = PRODUCTS.slice(0, 3);

export default function ProductsPreview() {
  return (
    <section className="py-22 bg-beige">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
            <span className="block w-7 h-[1.5px] bg-gold" />Fresh From the Farm<span className="block w-7 h-[1.5px] bg-gold" />
          </div>
          <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
            Country Chicken <strong className="text-gold-dark italic">Eggs</strong>
          </h2>
          <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[580px] mx-auto">
            Naturally raised, nutritiously superior, and delivered with care — available in sizes to suit every need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {previewProducts.map((p, i) => (
            <div key={i} className={`bg-white border-[1.5px] border-border-light rounded-[14px] overflow-hidden transition-all duration-300 flex flex-col hover:border-gold hover:shadow-[0_6px_28px_rgba(44,36,22,.10)] hover:-translate-y-[5px] ${p.featured ? "border-gold" : ""}`}>
              <div className="w-full h-48 bg-gradient-to-br from-cream-dark to-beige flex items-center justify-center text-[4.5rem] relative">
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
                <Link href="/products" className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[40px] font-bold text-[0.82rem] border-2 transition-all duration-300 hover:-translate-y-0.5 ${p.featured ? "bg-gold text-white border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark" : "bg-transparent text-gold-dark border-gold hover:bg-gold hover:text-white"}`}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300">
            <Egg size={16} /> See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
