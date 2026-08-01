"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, Building2, Share2, Loader2, Plus } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import { SITE, SOCIAL_LINKS, FAQ_CONTACT } from "@/lib/constants";
import { useToast } from "@/components/ui/Toast";

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-[90px] bg-[#EDE3C8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-tag">Quick Answers</div>
          <h2 className="section-title">Common Order Questions</h2>
        </div>
        <div className="max-w-[860px] mx-auto flex flex-col gap-3">
          {FAQ_CONTACT.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-[18px] border overflow-hidden shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-[rgba(212,160,23,0.4)] shadow-[0_4px_20px_rgba(212,160,23,0.12)] bg-white"
                    : "border-[#E8D5B0] bg-white/80 hover:border-[rgba(212,160,23,0.3)] hover:shadow-[0_2px_12px_rgba(212,160,23,0.08)]"
                }`}
              >
                <button
                  className="flex items-center justify-between w-full px-6 py-5 bg-transparent text-left gap-4 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-[0.95rem] transition-colors duration-200 ${isOpen ? "text-[#B8860B]" : "text-[#6B4C2A]"}`}>
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
                  className="overflow-hidden transition-all duration-[380ms] ease-in-out"
                  style={{ maxHeight: isOpen ? "220px" : "0" }}
                >
                  <p className="px-6 pb-6 text-[0.9rem] text-[#4A4A4A] leading-[1.75]">{faq.a}</p>
                </div>
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
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", subject: "", message: "", newsletter: false,
  });
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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name, phone: formData.phone, email: formData.email,
          subject: formData.subject, message: formData.message, newsletter: formData.newsletter,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast("success", "Thank you! Your message has been sent. We'll reply within 24 hours.");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "", newsletter: false });
      } else {
        showToast("error", data?.error || "Something went wrong. Please try again later.");
      }
    } catch {
      showToast("error", "Network error. Please check your connection and try again.");
    }
    setLoading(false);
  };

  const inputBase = "px-4 py-3 border-2 rounded-[14px] text-[0.9rem] text-[#1A1A1A] bg-white font-body transition-all duration-300 focus:outline-none focus:border-[#D4A017] focus:shadow-[0_0_0_4px_rgba(212,160,23,0.1)]";
  const inputError = "border-red-400";
  const inputNormal = "border-[#E8D5B0] hover:border-[rgba(212,160,23,0.3)]";

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="page-hero-content">
            <div className="hero-badge-pill" style={{ animation: "fadeUp .55s .1s ease both" }}>
              🎧 We&apos;re Here to Help
            </div>
            <h1 className="animate-[fadeUp_.6s_.2s_ease_both]">
              Contact <span className="highlight">Us</span>
            </h1>
            <p className="animate-[fadeUp_.6s_.3s_ease_both]">
              Questions, orders, or bulk supply enquiries — we&apos;d love to hear from you.
            </p>
            <nav className="breadcrumb animate-[fadeUp_.6s_.4s_ease_both]" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="opacity-50 text-[0.6rem]">›</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-10 bg-[#f5edd8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: `tel:${SITE.phone}`, Icon: Phone, label: "Call Us", value: SITE.phoneFormatted, sub: "Mon–Sat, 7AM–7PM", external: false },
              { href: `mailto:${SITE.email}`, Icon: Mail, label: "Email Us", value: SITE.email, sub: "Reply within 24 hours", external: false },
              { href: SITE.whatsappUrl, Icon: MessageCircle, label: "WhatsApp", value: SITE.phoneFormatted, sub: "Quick chat support", external: true },
              { href: "#", Icon: Clock, label: "Business Hours", value: "Mon – Saturday", sub: "7:00 AM – 7:00 PM", external: false },
            ].map((card, i) => (
              <a
                key={i}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3.5 p-5 bg-white rounded-[18px] border border-[#E8D5B0] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(139,107,74,0.14)] hover:border-[rgba(212,160,23,0.3)] group"
              >
                <div className="w-12 h-12 bg-[rgba(212,160,23,0.1)] rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#D4A017]">
                  <card.Icon size={20} className="text-[#D4A017] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.6px] text-[#7A7A7A] mb-0.5">{card.label}</h4>
                  <p className="text-[0.875rem] font-semibold text-[#6B4C2A] truncate">{card.value}</p>
                  <span className="text-[0.75rem] text-[#7A7A7A]">{card.sub}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-[90px] bg-[#f5edd8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-16 items-start">

            {/* Form */}
            <div>
              <div className="section-tag">Send a Message</div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-[1.02rem] text-[#4A4A4A] leading-[1.75] mb-7">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.875rem] font-semibold text-[#6B4C2A]">
                      Full Name <span className="text-[#D4A017]">*</span>
                    </label>
                    <input
                      type="text" name="name" placeholder="Your full name"
                      value={formData.name} onChange={handleChange}
                      className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                    />
                    {errors.name && <span className="text-[0.78rem] text-red-500">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.875rem] font-semibold text-[#6B4C2A]">Phone Number</label>
                    <input
                      type="tel" name="phone" placeholder="+91 XXXXX XXXXX"
                      value={formData.phone} onChange={handleChange}
                      className={`${inputBase} ${inputNormal}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.875rem] font-semibold text-[#6B4C2A]">
                      Email Address <span className="text-[#D4A017]">*</span>
                    </label>
                    <input
                      type="email" name="email" placeholder="your@email.com"
                      value={formData.email} onChange={handleChange}
                      className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                    />
                    {errors.email && <span className="text-[0.78rem] text-red-500">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.875rem] font-semibold text-[#6B4C2A]">
                      Subject <span className="text-[#D4A017]">*</span>
                    </label>
                    <select
                      name="subject" value={formData.subject} onChange={handleChange}
                      className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
                    >
                      <option value="">— Select a subject —</option>
                      <option value="order">Place an Order</option>
                      <option value="wholesale">Wholesale / Bulk Pricing</option>
                      <option value="delivery">Delivery Enquiry</option>
                      <option value="quality">Quality / Feedback</option>
                      <option value="partnership">Farm Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <span className="text-[0.78rem] text-red-500">{errors.subject}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.875rem] font-semibold text-[#6B4C2A]">
                    Your Message <span className="text-[#D4A017]">*</span>
                  </label>
                  <textarea
                    name="message" placeholder="Tell us how we can help you..."
                    value={formData.message} onChange={handleChange} rows={5}
                    className={`${inputBase} resize-y min-h-[130px] ${errors.message ? inputError : inputNormal}`}
                  />
                  {errors.message && <span className="text-[0.78rem] text-red-500">{errors.message}</span>}
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox" name="newsletter"
                    checked={formData.newsletter} onChange={handleChange}
                    className="w-[18px] h-[18px] mt-0.5 shrink-0 accent-[#D4A017]"
                  />
                  <span className="text-[0.875rem] text-[#4A4A4A] group-hover:text-[#6B4C2A] transition-colors duration-200">
                    Subscribe me to Broog&apos;s newsletter for updates and offers
                  </span>
                </label>

                {loading && (
                  <div className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-[14px] bg-[rgba(212,160,23,0.07)] border border-[rgba(212,160,23,0.25)] text-[#B8860B] text-[0.875rem]">
                    <Loader2 size={17} className="animate-spin" /> Sending your message...
                  </div>
                )}

                <button
                  type="submit" disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-[0.925rem] bg-[#D4A017] text-white shadow-[0_4px_20px_rgba(212,160,23,0.35)] hover:bg-[#B8860B] hover:shadow-[0_8px_28px_rgba(212,160,23,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  <Mail size={16} strokeWidth={2.5} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="flex flex-col gap-5">
              {/* Map */}
              <div className="bg-white rounded-[20px] border border-[#E8D5B0] overflow-hidden shadow-sm">
                <h3 className="px-5 py-4 font-heading text-[0.95rem] text-[#6B4C2A] font-bold border-b border-[#E8D5B0] flex items-center gap-2">
                  <MapPin size={16} className="text-[#D4A017]" strokeWidth={2} /> Find Us
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.265!2d77.0266!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjQiTiA3N8KwMDEnMzUuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" height="200"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen loading="lazy"
                  title="Broog's location"
                />
                <p className="px-5 py-2.5 text-[0.76rem] text-[#7A7A7A] border-t border-[#E8D5B0] flex items-center gap-1.5">
                  ℹ️ Update with your exact business address for accurate location.
                </p>
              </div>

              {/* Business Details */}
              <div className="bg-white rounded-[20px] border border-[#E8D5B0] overflow-hidden shadow-sm">
                <h3 className="px-5 py-4 font-heading text-[0.95rem] text-[#6B4C2A] font-bold border-b border-[#E8D5B0] flex items-center gap-2">
                  <Building2 size={16} className="text-[#D4A017]" strokeWidth={2} /> Business Details
                </h3>
                {[
                  { Icon: Building2, label: "Business", value: "Broog's — Country Chicken Egg Supplier", href: undefined },
                  { Icon: Phone, label: "Phone", value: SITE.phoneFormatted, href: `tel:${SITE.phone}` },
                  { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                  { Icon: Clock, label: "Hours", value: "Monday – Saturday: 7:00 AM – 7:00 PM", href: undefined },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 px-5 py-3.5 border-b border-[#E8D5B0] last:border-b-0 hover:bg-[rgba(245,237,216,0.5)] transition-colors duration-200">
                    <div className="w-7 h-7 rounded-lg bg-[rgba(212,160,23,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                      <item.Icon size={13} className="text-[#D4A017]" />
                    </div>
                    <div>
                      <strong className="block text-[0.75rem] text-[#7A7A7A] uppercase tracking-[0.5px] mb-0.5">{item.label}</strong>
                      {item.href
                        ? <a href={item.href} className="text-[0.875rem] text-[#6B4C2A] hover:text-[#B8860B] transition-colors">{item.value}</a>
                        : <p className="text-[0.875rem] text-[#6B4C2A] m-0">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-[20px] border border-[#E8D5B0] overflow-hidden shadow-sm">
                <h3 className="px-5 py-4 font-heading text-[0.95rem] text-[#6B4C2A] font-bold border-b border-[#E8D5B0] flex items-center gap-2">
                  <Share2 size={16} className="text-[#D4A017]" strokeWidth={2} /> Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-2.5 p-4">
                  {[
                    { href: SOCIAL_LINKS.facebook, label: "Facebook", bg: "bg-[#1877F2]", text: "📘 Facebook", external: false },
                    { href: SOCIAL_LINKS.instagram, label: "Instagram", bg: "bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]", text: "📷 Instagram", external: false },
                    { href: SOCIAL_LINKS.whatsapp, label: "WhatsApp", bg: "bg-[#25D366]", text: "💬 WhatsApp", external: true },
                    { href: SOCIAL_LINKS.youtube, label: "YouTube", bg: "bg-[#FF0000]", text: "▶️ YouTube", external: false },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.external ? "_blank" : undefined}
                      rel={s.external ? "noopener noreferrer" : undefined}
                      aria-label={s.label}
                      className={`flex items-center gap-2 p-3 rounded-[12px] text-[0.85rem] font-bold text-white ${s.bg} hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md transition-all duration-300`}
                    >
                      {s.text}
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
