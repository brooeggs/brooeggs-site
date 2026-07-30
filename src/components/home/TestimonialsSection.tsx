import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-22 bg-[#FAF6EE]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
            <span className="block w-7 h-[1.5px] bg-gold" />Customer Reviews<span className="block w-7 h-[1.5px] bg-gold" />
          </div>
          <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
            What People <strong className="text-gold-dark italic">Say About Us</strong>
          </h2>
          <p className="text-[1rem] text-text-mid leading-[1.75] max-w-[580px] mx-auto">Trusted by thousands of homes, restaurants, and stores across the region.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white border-[1.5px] border-border-light rounded-[14px] p-7 transition-all duration-300 hover:border-[rgba(200,133,26,.3)] hover:shadow-[0_6px_28px_rgba(44,36,22,.10)] hover:-translate-y-[3px] relative">
              <div className="font-[Georgia,serif] text-[3.5rem] text-[rgba(200,133,26,.1)] leading-[0.8] mb-2.5">&ldquo;</div>
              <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, si) => (<Star key={si} size={14} className="text-gold fill-gold" />))}</div>
              <p className="text-[0.875rem] text-text-mid leading-[1.7] italic mb-5">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-[800] text-[1rem] shrink-0">{t.avatar}</div>
                <div>
                  <strong className="block text-[0.875rem] text-dark font-bold">{t.name}</strong>
                  <span className="text-[0.78rem] text-text-light">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
