import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-[90px] bg-[#f5edd8] relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(rgba(212,160,23,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-14">
          <div className="section-tag">Customer Reviews</div>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[520px] mx-auto">
            Trusted by thousands of happy customers across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="group bg-white rounded-[24px] border border-[#E8D5B0] p-8 transition-all duration-350 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,107,74,0.14)] hover:border-[rgba(212,160,23,0.25)] relative will-change-transform flex flex-col"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-[rgba(212,160,23,0.3)] to-transparent" />

              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-[rgba(212,160,23,0.1)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#D4A017]">
                <Quote size={16} className="text-[#D4A017] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={13} className="text-[#D4A017] fill-[#D4A017]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[0.9rem] text-[#4A4A4A] leading-[1.75] italic mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#E8D5B0] to-transparent mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-[800] text-[0.95rem] shrink-0 shadow-[0_4px_12px_rgba(212,160,23,0.3)]"
                  style={{ background: "linear-gradient(135deg, #D4A017, #8B6B4A)" }}>
                  {t.avatar}
                </div>
                <div>
                  <strong className="block text-[0.875rem] text-[#6B4C2A] font-bold leading-snug">{t.name}</strong>
                  <span className="text-[0.78rem] text-[#7A7A7A]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-[#E8D5B0] shadow-sm text-[0.85rem] text-[#6B4C2A] font-semibold">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-[#D4A017] fill-[#D4A017]" />
              ))}
            </span>
            <span>Rated 4.9/5 from 500+ verified customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
