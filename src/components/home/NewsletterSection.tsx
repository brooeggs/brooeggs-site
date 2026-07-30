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
    <section className="py-22 bg-[#FAF6EE]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <div className="max-w-[560px] mx-auto text-center py-10 sm:py-[52px] px-6 sm:px-10 bg-white rounded-[40px] border-2 border-border shadow-[0_16px_56px_rgba(44,36,22,.13)]">
          <Send size={32} className="text-gold mb-4 mx-auto" aria-hidden="true" />
          <h2 className="font-heading text-[1.5rem] sm:text-[1.7rem] text-dark mb-2.5">
            Stay Updated with Broog&apos;s
          </h2>
          <p className="text-[0.875rem] sm:text-[0.9rem] text-text-mid mb-6">
            Subscribe for seasonal offers, new product updates, healthy egg recipes, and farm
            news delivered to your inbox.
          </p>

          {submitted ? (
            <div className="py-4 px-5 rounded-lg bg-[rgba(56,142,60,.08)] border border-[rgba(56,142,60,.3)] text-[#2e7d32] text-[0.875rem]">
              Thank you! You&apos;ve been subscribed.
            </div>
          ) : (
            <form
              className="flex gap-2.5 flex-wrap justify-center"
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
                className="flex-1 min-w-[200px] px-[18px] py-3 border-[1.5px] border-border rounded-[40px] text-[0.875rem] text-text-body bg-cream font-body transition-all duration-300 focus:outline-none focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,133,26,.1)]"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <Send size={14} aria-hidden="true" /> Subscribe
              </button>
            </form>
          )}

          <small className="block mt-3.5 text-[0.74rem] text-text-light">
            <Lock size={11} className="inline mr-1" aria-hidden="true" />
            No spam, ever. Unsubscribe anytime.
          </small>
        </div>
      </div>
    </section>
  );
}
