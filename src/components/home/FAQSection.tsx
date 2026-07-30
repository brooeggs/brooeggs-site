"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_HOME } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-22 bg-beige">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <div className="text-center mb-11">
          <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5">
            <span className="block w-7 h-[1.5px] bg-gold" />FAQs<span className="block w-7 h-[1.5px] bg-gold" />
          </div>
          <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
            Frequently Asked <strong className="text-gold-dark italic">Questions</strong>
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-2.5">
          {FAQ_HOME.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border-[1.5px] border-border-light rounded-[14px] overflow-hidden transition-colors duration-300 hover:border-[rgba(200,133,26,.3)]"
              >
                <button
                  className="flex items-center justify-between w-full px-5 sm:px-[22px] py-[18px] bg-transparent text-left gap-4 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className="font-bold text-[0.88rem] sm:text-[0.9rem] text-dark">{faq.q}</span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-gold text-white rotate-45"
                        : "bg-[rgba(200,133,26,.06)] text-gold-dark"
                    }`}
                    aria-hidden="true"
                  >
                    <Plus size={14} />
                  </span>
                </button>

                {/* Answer — uses CSS grid trick so height animates to/from auto */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="grid transition-all duration-[380ms] ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-[22px] pb-[18px] text-[0.875rem] text-text-mid leading-[1.7]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
