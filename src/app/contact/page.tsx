"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/home/CTABanner";
import { SITE, SOCIAL_LINKS, FAQ_CONTACT } from "@/lib/constants";
import { useToast } from "@/components/ui/Toast";

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="sec-pad" style={{ background: "#FAF6EE" }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">FAQs</div>
          <h2 className="section-title">Common <strong>Questions</strong></h2>
        </div>
        <div className="faq-wrap">
          {FAQ_CONTACT.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="faq-item reveal reveal-up">
                <button
                  className="faq-btn"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-ico" aria-hidden="true">+</span>
                </button>
                <div className={`faq-body${isOpen ? " open" : ""}`}>{faq.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const { show: showToast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "", newsletter: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim())    newErrors.name    = "Name is required";
    if (!formData.email.trim())   newErrors.email   = "Email is required";
    if (!formData.subject)        newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        showToast("success", "Thank you! Your message has been sent. We'll reply within 24 hours.");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "", newsletter: false });
      } else {
        showToast("error", data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      showToast("error", "Network error. Please check your connection and try again.");
    }
    setLoading(false);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <Image src="/images/img_030.jpeg" alt="" fill className="object-cover" style={{ opacity: 0.38 }} priority />
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span style={{ fontSize: ".55rem", opacity: .6 }}>›</span>
              <span>Contact</span>
            </nav>
            <div className="section-eyebrow" style={{ marginTop: 14 }}>Get In Touch</div>
            <h1>Contact <em>Brooeggs</em></h1>
            <p>For orders, wholesale enquiries, delivery questions, or anything else — we&apos;re here to help.</p>
          </div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="sec-pad-sm" style={{ background: "#FAF6EE" }}>
        <div className="container">
          <div className="qc-grid" style={{ gridTemplateColumns: "repeat(4,1fr)", maxWidth: 760, margin: "0 auto" }}>
            <a href={`tel:${SITE.phone}`} className="qc-btn call reveal reveal-up">
              <span aria-hidden="true">📞</span>
              <div><strong style={{ display: "block", fontSize: ".82rem" }}>Call Us</strong><span style={{ fontSize: ".72rem", opacity: .8 }}>{SITE.phoneFormatted}</span></div>
            </a>
            <a href={SITE.whatsappUrl} className="qc-btn wa reveal reveal-up" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">💬</span>
              <div><strong style={{ display: "block", fontSize: ".82rem" }}>WhatsApp</strong><span style={{ fontSize: ".72rem", opacity: .8 }}>Chat Now</span></div>
            </a>
            <a href={`mailto:${SITE.email}`} className="qc-btn email reveal reveal-up">
              <span aria-hidden="true">✉️</span>
              <div><strong style={{ display: "block", fontSize: ".82rem" }}>Email</strong><span style={{ fontSize: ".72rem", opacity: .8 }}>{SITE.email}</span></div>
            </a>
            <a href="https://maps.google.com" className="qc-btn maps reveal reveal-up" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">📍</span>
              <div><strong style={{ display: "block", fontSize: ".82rem" }}>Location</strong><span style={{ fontSize: ".72rem", opacity: .8 }}>Tamil Nadu</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="sec-pad" style={{ background: "#F5F0E4" }}>
        <div className="container">
          <div className="contact-grid">

            {/* FORM */}
            <div className="reveal reveal-left">
              <div className="section-eyebrow">Send a Message</div>
              <h2 className="section-title">We&apos;d Love to <strong>Hear From You</strong></h2>
              <p className="section-desc" style={{ maxWidth: "100%", marginBottom: 8 }}>
                Whether you want to place an order, ask about pricing, or just learn more — fill in the form and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span style={{ color: "#C8851A" }}>*</span></label>
                    <input type="text" id="name" name="name" placeholder="e.g. Ramya Suresh" value={formData.name} onChange={handleChange} className={errors.name ? "err" : ""} autoComplete="name" />
                    <span className="err-msg">{errors.name}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} autoComplete="tel" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span style={{ color: "#C8851A" }}>*</span></label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className={errors.email ? "err" : ""} autoComplete="email" />
                  <span className="err-msg">{errors.email}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject <span style={{ color: "#C8851A" }}>*</span></label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={errors.subject ? "err" : ""}>
                    <option value="">Select a subject…</option>
                    <option value="order">Place an Order</option>
                    <option value="wholesale">Wholesale / Bulk Pricing</option>
                    <option value="delivery">Delivery Enquiry</option>
                    <option value="quality">Quality / Feedback</option>
                    <option value="partnership">Farm Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <span className="err-msg">{errors.subject}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="msg">Message <span style={{ color: "#C8851A" }}>*</span></label>
                  <textarea id="msg" name="message" placeholder="Tell us what you need — pack size, quantity, delivery area, or any questions…" value={formData.message} onChange={handleChange} className={errors.message ? "err" : ""} />
                  <span className="err-msg">{errors.message}</span>
                </div>
                <div className="form-group" style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <input type="checkbox" id="newsletter" name="newsletter" checked={formData.newsletter} onChange={handleChange} style={{ width: 16, height: 16, accentColor: "#C8851A", flexShrink: 0 }} />
                  <label htmlFor="newsletter" style={{ fontSize: ".83rem", color: "#6B5D47", cursor: "pointer" }}>Subscribe to updates and seasonal offers from Brooeggs</label>
                </div>
                <button type="submit" className="btn btn-gold w-full justify-center" disabled={loading} style={{ width: "100%", justifyContent: "center" }}>
                  {loading ? "Sending…" : "✉️ Send Message"}
                </button>
              </form>
            </div>

            {/* INFO SIDE */}
            <div className="reveal reveal-right">
              <div className="contact-info-box">
                <h3>🏢 Business Details</h3>
                <div className="cinfo-row"><span style={{ color: "#C8851A" }}>🏪</span><div><strong>Business Name</strong><p>Brooeggs — Premium Country Eggs</p></div></div>
                <div className="cinfo-row"><span style={{ color: "#C8851A" }}>📍</span><div><strong>Service Area</strong><p>Tamil Nadu, India (expanding)</p></div></div>
                <div className="cinfo-row"><span style={{ color: "#C8851A" }}>📞</span><div><strong>Phone / WhatsApp</strong><p><a href={`tel:${SITE.phone}`}>{SITE.phoneFormatted}</a></p></div></div>
                <div className="cinfo-row"><span style={{ color: "#C8851A" }}>✉️</span><div><strong>Email</strong><p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p></div></div>
                <div className="cinfo-row"><span style={{ color: "#C8851A" }}>🕐</span><div><strong>Business Hours</strong><p>{SITE.hoursDetailed}</p></div></div>
              </div>

              <div className="contact-info-box">
                <h3>📍 Find Us</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.265!2d77.0266!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjQiTiA3N8KwMDEnMzUuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" height="180"
                  style={{ border: 0, borderRadius: 8, display: "block" }}
                  allowFullScreen loading="lazy" title="Brooeggs location"
                />
                <p style={{ fontSize: ".75rem", color: "#9E8E75", marginTop: 8 }}>ℹ️ Replace with your exact business address for accurate location.</p>
              </div>

              <div className="contact-info-box">
                <h3>🔗 Follow Us</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 4 }}>
                  {[
                    { href: SOCIAL_LINKS.facebook,  label: "📘 Facebook",  color: "#1877F2", external: false },
                    { href: SOCIAL_LINKS.instagram,  label: "📷 Instagram", color: "#E4405F", external: false },
                    { href: SOCIAL_LINKS.whatsapp,   label: "💬 WhatsApp",  color: "#25D366", external: true  },
                    { href: SOCIAL_LINKS.youtube,    label: "▶️ YouTube",   color: "#FF0000", external: false },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.external ? "_blank" : undefined}
                      rel={s.external ? "noopener noreferrer" : undefined}
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", border: `1.5px solid ${s.color}`, borderRadius: 8, color: s.color, fontSize: ".84rem", fontWeight: 700, transition: "all .25s", textDecoration: "none" }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFAQ />
      <CTABanner variant="contact" />
    </>
  );
}
