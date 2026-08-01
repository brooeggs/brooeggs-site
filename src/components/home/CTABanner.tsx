import Link from "next/link";
import { Phone, MessageCircle, Egg, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  description?: string;
  variant?: "home" | "products" | "contact" | "about";
}

export default function CTABanner({ title, description, variant = "home" }: CTABannerProps) {
  const content = {
    home: {
      title: "Ready to Experience the Freshness?",
      desc: "Order your premium country chicken eggs today and taste the natural difference.",
      buttons: [
        { href: `tel:${SITE.phone}`, label: "Call to Order", icon: Phone, primary: true, external: undefined },
        { href: `mailto:${SITE.email}`, label: "Email Us", icon: Mail, primary: false, external: undefined },
      ],
    },
    products: {
      title: "Ready to Order Fresh Country Eggs?",
      desc: "Contact us today and we'll set up the perfect supply plan for your needs.",
      buttons: [
        { href: "/contact", label: "Contact Us", icon: Mail, primary: true, external: undefined },
        { href: `tel:${SITE.phone}`, label: SITE.phoneFormatted, icon: Phone, primary: false, external: undefined },
      ],
    },
    contact: {
      title: "Still Have Questions?",
      desc: "Call or WhatsApp us directly — our team responds fast, every single day.",
      buttons: [
        { href: `tel:${SITE.phone}`, label: "Call Now", icon: Phone, primary: true, external: undefined },
        { href: SITE.whatsappUrl, label: "WhatsApp", icon: MessageCircle, primary: false, external: true },
      ],
    },
    about: {
      title: "Ready to Partner with Broog\u2019s?",
      desc: "Whether you're a family buyer or a business, we have the right egg solution for you.",
      buttons: [
        { href: "/contact", label: "Get In Touch", icon: Phone, primary: true, external: undefined },
        { href: "/products", label: "View Products", icon: Egg, primary: false, external: undefined },
      ],
    },
  };

  const c = content[variant];

  return (
    <section className="cta-banner relative overflow-hidden">
      {/* Decorative egg emojis */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <span className="absolute top-[20%] left-[5%] text-[2.5rem] opacity-10"
          style={{ animation: "floatEgg 7s ease-in-out infinite" }}>🥚</span>
        <span className="absolute bottom-[20%] right-[6%] text-[2rem] opacity-10"
          style={{ animation: "floatEgg 7s 2s ease-in-out infinite" }}>🥚</span>
        <span className="absolute top-[55%] left-[45%] text-[3rem] opacity-5"
          style={{ animation: "floatEgg 9s 1s ease-in-out infinite" }}>🐓</span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="text-center max-w-[620px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[0.75rem] font-semibold uppercase tracking-[1.2px] mb-5">
            🥚 Broog&apos;s — Farm Fresh
          </div>

          <h2
            className="font-heading font-[800] text-white mb-4 leading-[1.15]"
            style={{ fontSize: "clamp(1.65rem, 3.5vw, 2.5rem)" }}
          >
            {title || c.title}
          </h2>
          <p className="text-white/75 text-[1rem] mb-9 leading-[1.75]">
            {description || c.desc}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {c.buttons.map((b, i) => (
              <Link
                key={i}
                href={b.href}
                target={b.external ? "_blank" : undefined}
                rel={b.external ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.925rem] border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                  b.primary
                    ? "bg-white text-[#8B6B4A] border-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:bg-[#FFFBF0] hover:shadow-[0_6px_22px_rgba(0,0,0,0.2)]"
                    : "bg-transparent text-white border-white/50 hover:bg-white/12 hover:border-white"
                }`}
              >
                <b.icon size={15} strokeWidth={2.5} />
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
