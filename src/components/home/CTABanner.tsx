import Link from "next/link";
import { SITE } from "@/lib/constants";

interface CTABannerProps {
  variant?: "home" | "products" | "contact" | "about";
}

const content = {
  home: {
    title: "Ready to Taste the Difference?",
    desc: "Order your premium country chicken eggs today — fresh, natural, and delivered to your door.",
    buttons: [
      { href: `tel:${SITE.phone}`,    label: "Call to Order", dark: true,  external: false },
      { href: SITE.whatsappUrl,       label: "WhatsApp Us",   dark: false, external: true  },
    ],
  },
  products: {
    title: "Ready to Place Your Order?",
    desc: "Contact us for pricing, bulk quotes, and delivery details for your area.",
    buttons: [
      { href: "/contact",             label: "Enquire Now",   dark: true,  external: false },
      { href: SITE.whatsappUrl,       label: "WhatsApp Us",   dark: false, external: true  },
    ],
  },
  contact: {
    title: "Still Have Questions?",
    desc: "Call or WhatsApp us directly — our team responds fast, every single day.",
    buttons: [
      { href: `tel:${SITE.phone}`,    label: "Call Now",      dark: true,  external: false },
      { href: SITE.whatsappUrl,       label: "WhatsApp",      dark: false, external: true  },
    ],
  },
  about: {
    title: "Taste the Broog\u2019s Difference",
    desc: "Order today and experience what real country eggs taste and feel like.",
    buttons: [
      { href: "/products",            label: "View Products", dark: true,  external: false },
      { href: "/contact",             label: "Contact Us",    dark: false, external: false },
    ],
  },
};

export default function CTABanner({ variant = "home" }: CTABannerProps) {
  const c = content[variant];
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-inner">
          <h2>{c.title}</h2>
          <p>{c.desc}</p>
          <div className="cta-btns">
            {c.buttons.map((b, i) => (
              <Link
                key={i}
                href={b.href}
                target={b.external ? "_blank" : undefined}
                rel={b.external ? "noopener noreferrer" : undefined}
                className={`btn ${b.dark ? "btn-dark" : "btn-outline-white"}`}
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
