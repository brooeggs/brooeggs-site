"use client";

import { useState } from "react";
import { Send, Lock } from "lucide-react";

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
    <section className="py-16 sm:py-20 lg:py-22 bg-[#FAF6EE]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 lg:px-8">
        <div className="max-w-[560px] w-full mx-auto text-center bg-white rounded-[32px] border-2 border-border shadow-[0_16px_56px_rgba(44,36,22,.11)] overflow-hidden">
          <div className="px-6 sm:px-10 py-10 sm:py-12">
            <div className="w-12 h-12 rounded-full bg-[rgba(200,133,26,.08)] border border-[rgba(200,133,26,.2)] flex items-center justify-center mx-auto mb-4">
              <Send size={20} className="text-gold" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-[1.5rem] sm:text-[1.7rem] font-[800] text-dark mb-2.5 leading-tight">
              Stay Updated with Broog&apos;s
            </h2>
            <p className="text-[0.875rem] sm:text-[0.9rem] text-text-mid mb-7 leading-[1.7]">
              Subscribe for seasonal offers, new product updates, healthy egg recipes, and farm
              news delivered to your inbox.
            </p>

            {submitted ? (
              <div className="py-4 px-5 rounded-[12px] bg-[rgba(56,142,60,.08)] border border-[rgba(56,142,60,.25)] text-[#2e7d32] text-[0.875rem] font-semibold">
                ✓ Thank you! You&apos;ve been subscribed.
              </div>
            ) : (
              <form
                className="flex flex-col sm:flex-row gap-2.5"
                onSubmit={handleSubmit}
                noValidate
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 w-full px-5 py-3 border-[1.5px] border-border rounded-[40px] text-[0.875rem] text-text-body bg-cream transition-all duration-300 focus:outline-none focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,133,26,.1)]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[40px] font-bold text-[0.875rem] bg-gold text-white border-2 border-gold shadow-[0_4px_14px_rgba(200,133,26,.3)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <Send size={14} aria-hidden="true" /> Subscribe
                </button>
              </form>
            )}

            <small className="block mt-4 text-[0.72rem] text-text-light">
              <Lock size={11} className="inline mr-1" aria-hidden="true" />
              No spam, ever. Unsubscribe anytime.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
