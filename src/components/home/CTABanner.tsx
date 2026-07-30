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
      title: "Ready to Taste the Difference?",
      desc: "Order your premium country chicken eggs today — fresh, natural, and delivered to your door.",
      buttons: [
        { href: `tel:${SITE.phone}`, label: "Call to Order", icon: Phone, dark: true, external: undefined },
        { href: SITE.whatsappUrl, label: "WhatsApp Us", icon: MessageCircle, dark: false, external: true },
      ],
    },
    products: {
      title: "Ready to Place Your Order?",
      desc: "Contact us for pricing, bulk quotes, and delivery details for your area.",
      buttons: [
        { href: "/contact", label: "Enquire Now", icon: Mail, dark: true, external: undefined },
        { href: SITE.whatsappUrl, label: "WhatsApp Us", icon: MessageCircle, dark: false, external: true },
      ],
    },
    contact: {
      title: "Still Have Questions?",
      desc: "Call or WhatsApp us directly — our team responds fast, every single day.",
      buttons: [
        { href: `tel:${SITE.phone}`, label: "Call Now", icon: Phone, dark: true, external: undefined },
        { href: SITE.whatsappUrl, label: "WhatsApp", icon: MessageCircle, dark: false, external: true },
      ],
    },
    about: {
      title: "Taste the Broog's Difference",
      desc: "Order today and experience what real country eggs taste and feel like.",
      buttons: [
        { href: "/products", label: "View Products", icon: Egg, dark: true, external: undefined },
        { href: "/contact", label: "Contact Us", icon: Mail, dark: false, external: undefined },
      ],
    },
  };

  const c = content[variant];

  return (
    <section className="cta-banner">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="text-center">
          <h2 className="font-heading font-[800] text-[clamp(1.7rem,3.5vw,2.5rem)] text-white mb-2.5">
            {title || c.title}
          </h2>
          <p className="text-white/88 text-[1rem] mb-8">{description || c.desc}</p>
          <div className="flex justify-center gap-3.5 flex-wrap">
            {c.buttons.map((b, i) => (
              <Link
                key={i}
                href={b.href}
                target={b.external ? "_blank" : undefined}
                rel={b.external ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-[40px] font-bold text-[0.9rem] border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                  b.dark
                    ? "bg-dark text-white border-dark hover:bg-charcoal"
                    : "bg-transparent text-white border-white/65 hover:bg-white/15 hover:border-white"
                }`}
              >
                <b.icon size={16} /> {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
