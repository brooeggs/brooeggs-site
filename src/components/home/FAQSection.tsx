"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_HOME } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[90px] bg-[#EDE3C8] relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(212,160,23,0.09) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-14">
          <div className="section-tag">FAQs</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] max-w-[520px] mx-auto">
            Find answers to the most common questions about our eggs and services.
          </p>
        </div>

        <div className="max-w-[820px] mx-auto flex flex-col gap-3">
          {FAQ_HOME.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-[18px] border overflow-hidden shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-[rgba(212,160,23,0.4)] shadow-[0_4px_20px_rgba(212,160,23,0.12)] bg-white"
                    : "border-[#E8D5B0] bg-white/80 hover:border-[rgba(212,160,23,0.3)] hover:shadow-[0_2px_12px_rgba(212,160,23,0.1)]"
                }`}
              >
                <button
                  className="flex items-center justify-between w-full px-6 py-5 bg-transparent text-left gap-4 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span
                    className={`font-semibold text-[0.95rem] transition-colors duration-200 ${
                      isOpen ? "text-[#B8860B]" : "text-[#6B4C2A]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#D4A017] text-white rotate-45 shadow-[0_2px_8px_rgba(212,160,23,0.4)]"
                        : "bg-[rgba(212,160,23,0.1)] text-[#B8860B]"
                    }`}
                    aria-hidden="true"
                  >
                    <Plus size={14} strokeWidth={2.5} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="overflow-hidden transition-all duration-[380ms] ease-in-out"
                  style={{ maxHeight: isOpen ? "220px" : "0" }}
                >
                  <p className="px-6 pb-6 text-[0.9rem] text-[#4A4A4A] leading-[1.75]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
