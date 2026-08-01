import Link from "next/link";
import type { FC } from "react";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

function IconFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconYoutube({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

type SocialItem = {
  href: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: FC<{ size?: number; className?: string; [key: string]: any }>;
  external?: boolean;
};

const SOCIAL_ITEMS: SocialItem[] = [
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: IconFacebook },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: IconInstagram },
  { href: SOCIAL_LINKS.whatsapp, label: "WhatsApp", Icon: MessageCircle, external: true },
  { href: SOCIAL_LINKS.youtube, label: "YouTube", Icon: IconYoutube },
];

export default function Footer() {
  return (
    <footer className="footer-bg text-white/75 pt-[64px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top rule */}
        <div className="h-px w-full mb-12"
          style={{ background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)" }} />

        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-x-10 gap-y-10 pb-12 border-b border-white/6">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-[0.68rem] font-bold uppercase tracking-[2px] text-[rgba(240,192,64,0.55)] mb-4">
              Eggcellence Since {SITE.founded}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo.jpg"
              alt={`${SITE.name} logo`}
              className="w-14 h-14 object-cover rounded-xl mb-4 ring-2 ring-[rgba(212,160,23,0.3)]"
            />
            <h3 className="font-heading text-[1.25rem] text-[#F0C040] font-bold mb-2.5">{SITE.name}</h3>
            <p className="text-[0.875rem] leading-[1.75] max-w-[250px] text-white/50 mb-6">
              Your trusted supplier of premium country chicken eggs. Naturally raised, freshly delivered, nutritiously superior.
            </p>
            <div className="flex gap-2">
              {SOCIAL_ITEMS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`${SITE.name} on ${s.label}`}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <s.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[0.95rem] text-[#F0C040] font-bold mb-5 tracking-[0.3px]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.85rem] text-white/55 hover:text-[#F0C040] hover:pl-1.5 transition-all duration-250 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#D4A017] text-[0.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200">▶</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-[0.95rem] text-[#F0C040] font-bold mb-5 tracking-[0.3px]">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.productLinks.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-[0.85rem] text-white/55 hover:text-[#F0C040] hover:pl-1.5 transition-all duration-250 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#D4A017] text-[0.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200">▶</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-[0.95rem] text-[#F0C040] font-bold mb-5 tracking-[0.3px]">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-lg bg-[rgba(212,160,23,0.12)] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={13} className="text-[#D4A017]" aria-hidden="true" />
                </div>
                <a href={`mailto:${SITE.email}`} className="text-[0.85rem] text-white/55 hover:text-[#F0C040] transition-colors duration-200 break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-lg bg-[rgba(212,160,23,0.12)] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={13} className="text-[#D4A017]" aria-hidden="true" />
                </div>
                <a href={`tel:${SITE.phone}`} className="text-[0.85rem] text-white/55 hover:text-[#F0C040] transition-colors duration-200">
                  {SITE.phoneFormatted}
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-lg bg-[rgba(212,160,23,0.12)] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={13} className="text-[#D4A017]" aria-hidden="true" />
                </div>
                <span className="text-[0.85rem] text-white/55">{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.8rem] text-white/35">
        <p>
          © {SITE.founded}{" "}
          <span className="text-[#F0C040] font-semibold">{SITE.name}</span>.
          {" "}All rights reserved.
        </p>
        <p className="text-white/25">
          Designed with ❤️ for quality eggs
        </p>
      </div>
    </footer>
  );
}
