"use client";

import { useState } from "react";
import { Send, Lock, Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-[90px] bg-[#f5edd8] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(212,160,23,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="max-w-[580px] w-full mx-auto reveal-up">
          {/* Card */}
          <div className="bg-white rounded-[32px] border border-[#E8D5B0] shadow-[0_20px_60px_rgba(139,107,74,0.14)] overflow-hidden">
            {/* Top gradient bar */}
            <div
              className="h-1.5 w-full"
              style={{
                background: "linear-gradient(90deg, #B8860B, #D4A017, #F0C040, #D4A017, #B8860B)",
              }}
            />

            <div className="px-10 py-11 text-center">
              {/* Icon */}
              <div className="w-14 h-14 bg-[rgba(212,160,23,0.1)] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Mail size={24} className="text-[#D4A017]" strokeWidth={1.8} />
              </div>

              <h2 className="font-heading text-[1.75rem] font-[700] text-[#6B4C2A] mb-3 leading-snug">
                Stay Updated with Broog&apos;s
              </h2>
              <p className="text-[0.925rem] text-[#4A4A4A] mb-8 leading-[1.75] max-w-[420px] mx-auto">
                Subscribe for fresh availability updates, seasonal offers, and healthy egg recipes delivered straight to your inbox.
              </p>

              {submitted ? (
                <div className="py-4 px-6 rounded-[14px] bg-[rgba(76,175,80,0.08)] border border-[rgba(76,175,80,0.25)] text-[#2E7D32] text-[0.875rem] font-semibold">
                  ✓ You&apos;re subscribed! Welcome to Broog&apos;s updates.
                </div>
              ) : (
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 w-full px-5 py-3.5 border-2 border-[#E8D5B0] rounded-full text-[0.9rem] text-[#1A1A1A] bg-[#FDFAF4] transition-all duration-300 focus:outline-none focus:border-[#D4A017] focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,160,23,0.1)]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[0.875rem] bg-[#D4A017] text-white shadow-[0_4px_16px_rgba(212,160,23,0.35)] hover:bg-[#B8860B] hover:shadow-[0_6px_22px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <Send size={14} strokeWidth={2.5} aria-hidden="true" />
                    Subscribe
                  </button>
                </form>
              )}

              <p className="mt-4 text-[0.76rem] text-[#7A7A7A] flex items-center justify-center gap-1.5">
                <Lock size={10} aria-hidden="true" />
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
