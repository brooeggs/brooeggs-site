import Link from "next/link";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialItems = [
  { href: SOCIAL_LINKS.facebook,  label: "Facebook",  icon: "f", external: false },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: "📷", external: false },
  { href: SOCIAL_LINKS.whatsapp,  label: "WhatsApp",  icon: "💬", external: true  },
  { href: SOCIAL_LINKS.youtube,   label: "YouTube",   icon: "▶",  external: false },
];

export default function Footer() {
  return (
    <footer className="footer-bg text-white" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-tagline">Eggcellence Since {SITE.founded}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo/logo.jpg" alt={`${SITE.name} logo`} className="footer-logo-img" />
            <p>Premium country chicken eggs from free-range farms. Fresh, natural, and delivered with care every single day.</p>
            <div className="social-row">
              {socialItems.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`${SITE.name} on ${s.label}`}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                >
                  <span aria-hidden="true" style={{ fontSize: "0.85rem" }}>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              {FOOTER_LINKS.productLinks.map((link, i) => (
                <li key={i}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-row">
              <span aria-hidden="true">📞</span>
              <a href={`tel:${SITE.phone}`}>{SITE.phoneFormatted}</a>
            </div>
            <div className="footer-contact-row">
              <span aria-hidden="true">✉️</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="footer-contact-row">
              <span aria-hidden="true">📍</span>
              <span>{SITE.location}</span>
            </div>
            <div className="footer-contact-row">
              <span aria-hidden="true">🕐</span>
              <span>{SITE.hours}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {SITE.founded} <span>{SITE.name}</span> — Eggcellence Since {SITE.founded}. All rights reserved.</p>
      </div>
    </footer>
  );
}
