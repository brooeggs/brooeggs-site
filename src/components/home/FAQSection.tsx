"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_HOME } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-22 bg-beige">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="text-center mb-11">
          <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
            <span className="block w-7 h-[1.5px] bg-gold" />FAQs<span className="block w-7 h-[1.5px] bg-gold" />
          </div>
          <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
            Frequently Asked <strong className="text-gold-dark italic">Questions</strong>
          </h2>
        </div>
        <div className="max-w-[760px] mx-auto flex flex-col gap-2.5">
          {FAQ_HOME.map((faq, i) => (
            <div key={i} className="bg-white border-[1.5px] border-border-light rounded-[14px] overflow-hidden transition-all duration-300 hover:border-[rgba(200,133,26,.3)]">
              <button className="flex items-center justify-between w-full px-[22px] py-[18px] bg-transparent text-left gap-4 cursor-pointer" onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i}>
                <span className="font-bold text-[0.9rem] text-dark">{faq.q}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[0.65rem] transition-all duration-300 ${openIndex === i ? "bg-gold text-white rotate-45" : "bg-[rgba(200,133,26,.06)] text-gold-dark"}`}>
                  <Plus size={14} />
                </span>
              </button>
              <div className="overflow-hidden transition-all duration-[400ms]" style={{ maxHeight: openIndex === i ? "220px" : "0", padding: openIndex === i ? "0 22px 18px" : "0 22px" }}>
                <p className="text-[0.875rem] text-text-mid leading-[1.7]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
