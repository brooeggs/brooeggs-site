"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(""); }
  };

  return (
    <section className="sec-pad" style={{ background: "#FAF6EE" }}>
      <div className="container">
        <div className="newsletter-wrap reveal reveal-up">
          <div className="nl-icon" aria-hidden="true">✉️</div>
          <h2>Stay Updated with Brooeggs</h2>
          <p>Subscribe for seasonal offers, new product updates, healthy egg recipes, and farm news delivered to your inbox.</p>
          {submitted ? (
            <div style={{ padding: "14px 16px", borderRadius: 8, background: "rgba(56,142,60,.08)", border: "1px solid rgba(56,142,60,.3)", color: "#2e7d32", fontSize: ".875rem", display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
              ✓ You&apos;re subscribed! Welcome to Brooeggs updates.
            </div>
          ) : (
            <form className="nl-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                placeholder="Your email address"
                required
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-gold">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>
                Subscribe
              </button>
            </form>
          )}
          <small className="nl-note">🔒 No spam, ever. Unsubscribe anytime.</small>
        </div>
      </div>
    </section>
  );
}
