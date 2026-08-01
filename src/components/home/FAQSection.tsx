"use client";

import { useState } from "react";
import { FAQ_HOME } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="sec-pad" style={{ background: "#F5F0E4" }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">FAQs</div>
          <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
        </div>
        <div className="faq-wrap">
          {FAQ_HOME.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="faq-item reveal reveal-up">
                <button
                  className="faq-btn"
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${i}`}
                  id={`faq-btn-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-ico" aria-hidden="true">+</span>
                </button>
                <div
                  id={`faq-body-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`faq-body${isOpen ? " open" : ""}`}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
