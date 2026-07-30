"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, Building2, Share2, Loader2 } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { useToast } from "@/components/ui/Toast";

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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true);
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formId || formId === "your_formspree_id_here") {
        showToast("error", "Formspree ID not configured. Please set NEXT_PUBLIC_FORMSPREE_ID in .env.local");
        setLoading(false);
        return;
      }
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: formData.name, phone: formData.phone, email: formData.email, subject: formData.subject, message: formData.message, newsletter: formData.newsletter }),
      });
      if (res.ok) {
        showToast("success", "Thank you! Your message has been sent. We'll reply within 24 hours.");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "", newsletter: false });
      } else {
        const data = await res.json();
        showToast("error", data?.error || "Something went wrong. Please try again later.");
      }
    } catch {
      showToast("error", "Network error. Please check your connection and try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <section className="page-hero">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="relative z-[2]">
            <nav className="inline-flex items-center gap-2 text-[0.8rem] text-text-light mb-3.5">
              <Link href="/" className="text-gold-dark font-semibold hover:text-gold">Home</Link>
              <span className="text-[0.55rem] opacity-60">›</span>
              <span>Contact</span>
            </nav>
            <div className="text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-3.5 inline-flex items-center gap-[7px]">
              <span className="block w-7 h-[1.5px] bg-gold" />Get In Touch<span className="block w-7 h-[1.5px] bg-gold" />
            </div>
            <h1 className="font-heading font-[800] text-[clamp(2rem,5vw,3.2rem)] text-dark tracking-[-0.3px] mb-2.5">
              Contact <em className="italic text-gold-dark">Broog&apos;s</em>
            </h1>
            <p className="text-text-mid text-[1rem] max-w-[480px] mb-[18px]">
              For orders, wholesale enquiries, delivery questions, or anything else — we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[52px] bg-[#FAF6EE]">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-[760px] mx-auto mt-4">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 p-3 border-[1.5px] rounded-lg text-[0.84rem] font-bold text-gold-dark border-gold hover:bg-gold hover:text-white hover:-translate-y-0.5 transition-all duration-300">
              <Phone size={18} />
              <div>
                <strong className="block text-[0.82rem]">Call Us</strong>
                <span className="text-[0.72rem] opacity-80">{SITE.phoneFormatted}</span>
              </div>
            </a>
            <a href={SITE.whatsappUrl} className="flex items-center gap-2.5 p-3 border-[1.5px] border-[#25D366] rounded-lg text-[0.84rem] font-bold text-[#1a8a3a] hover:bg-[#25D366] hover:text-white hover:-translate-y-0.5 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              <div>
                <strong className="block text-[0.82rem]">WhatsApp</strong>
                <span className="text-[0.72rem] opacity-80">Chat Now</span>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 p-3 border-[1.5px] rounded-lg text-[0.84rem] font-bold text-text-mid hover:bg-dark hover:text-white hover:-translate-y-0.5 transition-all duration-300">
              <Mail size={18} />
              <div>
                <strong className="block text-[0.82rem]">Email</strong>
                <span className="text-[0.72rem] opacity-80">{SITE.email}</span>
              </div>
            </a>
            <a href="https://maps.google.com" className="flex items-center gap-2.5 p-3 border-[1.5px] rounded-lg text-[0.84rem] font-bold text-text-mid hover:bg-[#1565C0] hover:text-white hover:-translate-y-0.5 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <MapPin size={18} />
              <div>
                <strong className="block text-[0.82rem]">Location</strong>
                <span className="text-[0.72rem] opacity-80">Tamil Nadu</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-22 bg-beige">
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 items-start">
            <div>
              <div className="text-[0.72rem] font-[800] tracking-[2px] uppercase text-gold-dark mb-2.5 inline-flex items-center gap-[7px]">
                <span className="block w-7 h-[1.5px] bg-gold" />Send a Message<span className="block w-7 h-[1.5px] bg-gold" />
              </div>
              <h2 className="font-heading font-[800] text-[clamp(1.8rem,3.8vw,2.7rem)] leading-[1.18] text-dark mb-3.5 tracking-[-0.3px]">
                We&apos;d Love to <strong className="text-gold-dark italic">Hear From You</strong>
              </h2>
              <p className="text-[1rem] text-text-mid leading-[1.75] mb-2">Whether you want to place an order, ask about pricing, or just learn more — fill in the form and we&apos;ll get back to you within 24 hours.</p>
              <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-bold text-dark">Full Name <span className="text-gold">*</span></label>
                    <input type="text" name="name" placeholder="e.g. Ramya Suresh" autoComplete="name" value={formData.name} onChange={handleChange} className={`px-2.5 py-2.5 border-[1.5px] rounded-lg text-[0.875rem] text-text-body bg-cream font-body transition-all duration-300 focus:outline-none focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,133,26,.1)] ${errors.name ? "border-red-600" : "border-border"}`} />
                    {errors.name && <span className="text-[0.74rem] text-red-600">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-bold text-dark">Phone Number</label>
                    <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" autoComplete="tel" value={formData.phone} onChange={handleChange} className="px-2.5 py-2.5 border-[1.5px] border-border rounded-lg text-[0.875rem] text-text-body bg-cream font-body transition-all duration-300 focus:outline-none focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,133,26,.1)]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.82rem] font-bold text-dark">Email Address <span className="text-gold">*</span></label>
                  <input type="email" name="email" placeholder="you@example.com" autoComplete="email" value={formData.email} onChange={handleChange} className={`px-2.5 py-2.5 border-[1.5px] rounded-lg text-[0.875rem] text-text-body bg-cream font-body transition-all duration-300 focus:outline-none focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,133,26,.1)] ${errors.email ? "border-red-600" : "border-border"}`} />
                  {errors.email && <span className="text-[0.74rem] text-red-600">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.82rem] font-bold text-dark">Subject <span className="text-gold">*</span></label>
                  <select name="subject" value={formData.subject} onChange={handleChange} className={`px-2.5 py-2.5 border-[1.5px] rounded-lg text-[0.875rem] text-text-body bg-cream font-body transition-all duration-300 focus:outline-none focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,133,26,.1)] ${errors.subject ? "border-red-600" : "border-border"}`}>
                    <option value="">Select a subject…</option>
                    <option value="order">Place an Order</option>
                    <option value="wholesale">Wholesale / Bulk Pricing</option>
                    <option value="delivery">Delivery Enquiry</option>
                    <option value="quality">Quality / Feedback</option>
                    <option value="partnership">Farm Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <span className="text-[0.74rem] text-red-600">{errors.subject}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.82rem] font-bold text-dark">Message <span className="text-gold">*</span></label>
                  <textarea name="message" placeholder="Tell us what you need — pack size, quantity, delivery area, or any questions…" value={formData.message} onChange={handleChange} className={`px-2.5 py-2.5 border-[1.5px] rounded-lg text-[0.875rem] text-text-body bg-cream font-body transition-all duration-300 focus:outline-none focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,133,26,.1)] resize-y min-h-[120px] ${errors.message ? "border-red-600" : "border-border"}`} />
                  {errors.message && <span className="text-[0.74rem] text-red-600">{errors.message}</span>}
                </div>
                <div className="flex items-center gap-2.5">
                  <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="w-4 h-4 accent-gold shrink-0" />
                  <label className="text-[0.83rem] text-text-mid cursor-pointer">Subscribe to updates and seasonal offers from Broog&apos;s</label>
                </div>
                {loading && (
                  <div className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[rgba(200,133,26,.08)] border border-[rgba(200,133,26,.3)] text-gold-dark text-[0.875rem]">
                    <Loader2 size={18} className="animate-spin" /> Sending your message...
                  </div>
                )}
                <button type="submit" disabled={loading} className={`w-full inline-flex items-center justify-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] bg-gold text-white border-2 border-gold shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark hover:shadow-[0_7px_24px_rgba(200,133,26,.42)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}>
                  <Mail size={16} /> {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div>
              <div className="bg-cream-dark border-[1.5px] border-border rounded-[14px] p-7 mb-5">
                <h3 className="font-heading text-[1rem] font-bold text-dark mb-4 flex items-center gap-2"><Building2 size={18} className="text-gold" /> Business Details</h3>
                <div className="flex gap-3 mb-3.5 items-start">
                  <Building2 size={16} className="text-gold mt-[3px] shrink-0" />
                  <div><strong className="text-[0.82rem] font-bold text-dark block mb-0.5">Business Name</strong><p className="text-[0.85rem] text-text-mid m-0">Broog&apos;s — Premium Country Eggs</p></div>
                </div>
                <div className="flex gap-3 mb-3.5 items-start">
                  <MapPin size={16} className="text-gold mt-[3px] shrink-0" />
                  <div><strong className="text-[0.82rem] font-bold text-dark block mb-0.5">Service Area</strong><p className="text-[0.85rem] text-text-mid m-0">Tamil Nadu, India (expanding)</p></div>
                </div>
                <div className="flex gap-3 mb-3.5 items-start">
                  <Phone size={16} className="text-gold mt-[3px] shrink-0" />
                  <div><strong className="text-[0.82rem] font-bold text-dark block mb-0.5">Phone / WhatsApp</strong><a href={`tel:${SITE.phone}`} className="text-[0.85rem] text-text-mid hover:text-gold-dark m-0">{SITE.phoneFormatted}</a></div>
                </div>
                <div className="flex gap-3 mb-3.5 items-start">
                  <Mail size={16} className="text-gold mt-[3px] shrink-0" />
                  <div><strong className="text-[0.82rem] font-bold text-dark block mb-0.5">Email</strong><a href={`mailto:${SITE.email}`} className="text-[0.85rem] text-text-mid hover:text-gold-dark m-0">{SITE.email}</a></div>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock size={16} className="text-gold mt-[3px] shrink-0" />
                  <div><strong className="text-[0.82rem] font-bold text-dark block mb-0.5">Business Hours</strong><p className="text-[0.85rem] text-text-mid m-0">Monday – Saturday: 6:00 AM – 8:00 PM<br />Sunday: 7:00 AM – 12:00 PM</p></div>
                </div>
              </div>

              <div className="bg-cream-dark border-[1.5px] border-border rounded-[14px] p-7 mb-5">
                <h3 className="font-heading text-[1rem] font-bold text-dark mb-4 flex items-center gap-2"><MapPin size={18} className="text-gold" /> Find Us</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.265!2d77.0266!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjQiTiA3N8KwMDEnMzUuOCJF!5e0!3m2!1sen!2sin!4v1700000000000" width="100%" height="180" style={{ border: 0, borderRadius: "8px", display: "block" }} allowFullScreen loading="lazy" title="Broog's location" />
                <p className="text-[0.75rem] text-text-light mt-2"><span className="text-gold mr-1">ℹ</span>Replace iframe src with your exact farm or office location.</p>
              </div>

              <div className="bg-cream-dark border-[1.5px] border-border rounded-[14px] p-7">
                <h3 className="font-heading text-[1rem] font-bold text-dark mb-4 flex items-center gap-2"><Share2 size={18} className="text-gold" /> Follow Us</h3>
                <div className="grid grid-cols-2 gap-2.5 mt-1">
                  <a href={SOCIAL_LINKS.facebook} className="flex items-center gap-2 p-2.5 border-[1.5px] border-[#1877F2] rounded-lg text-[#1877F2] text-[0.84rem] font-bold hover:bg-[#1877F2] hover:text-white transition-all duration-300">f Facebook</a>
                  <a href={SOCIAL_LINKS.instagram} className="flex items-center gap-2 p-2.5 border-[1.5px] border-[#E4405F] rounded-lg text-[#E4405F] text-[0.84rem] font-bold hover:bg-[#E4405F] hover:text-white transition-all duration-300">ig Instagram</a>
                  <a href={SOCIAL_LINKS.whatsapp} className="flex items-center gap-2 p-2.5 border-[1.5px] border-[#25D366] rounded-lg text-[#25D366] text-[0.84rem] font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">w WhatsApp</a>
                  <a href={SOCIAL_LINKS.youtube} className="flex items-center gap-2 p-2.5 border-[1.5px] border-[#FF0000] rounded-lg text-[#FF0000] text-[0.84rem] font-bold hover:bg-[#FF0000] hover:text-white transition-all duration-300">▶ YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <CTABanner variant="contact" />
    </>
  );
}
