import Link from "next/link";
import type { FC } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

// Brand SVGs — included inline because lucide-react v1 removed social icons
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
    <footer className="footer-bg text-white/75 pt-[60px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-x-6 gap-y-10 pb-12 border-b border-white/8">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="text-gold-bright text-[0.72rem] tracking-[1.5px] uppercase mb-1.5 font-bold">
              Eggcellence Since {SITE.founded}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo.svg"
              alt={`${SITE.name} logo`}
              className="h-14 w-auto object-contain brightness-110 drop-shadow-[0_2px_6px_rgba(0,0,0,.3)] mb-3.5"
            />
            <p className="text-[0.875rem] leading-7 max-w-[260px]">
              Premium country chicken eggs from free-range farms. Fresh, natural, and delivered
              with care every single day.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-5">
              {SOCIAL_ITEMS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`${SITE.name} on ${s.label}`}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg bg-white/7 border border-white/12 flex items-center justify-center text-white/60 hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
                >
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-[800] text-white tracking-[1.5px] uppercase mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.875rem] text-white/60 hover:text-gold-bright hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-[800] text-white tracking-[1.5px] uppercase mb-4">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.productLinks.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-[0.875rem] text-white/60 hover:text-gold-bright hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-[800] text-white tracking-[1.5px] uppercase mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2.5 items-start">
                <Phone size={14} className="text-gold mt-[3px] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-[0.875rem] text-white/60 hover:text-gold-bright transition-colors duration-200"
                >
                  {SITE.phoneFormatted}
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <Mail size={14} className="text-gold mt-[3px] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[0.875rem] text-white/60 hover:text-gold-bright transition-colors duration-200"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <MapPin size={14} className="text-gold mt-[3px] shrink-0" aria-hidden="true" />
                <span className="text-[0.875rem] text-white/60">{SITE.location}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Clock size={14} className="text-gold mt-[3px] shrink-0" aria-hidden="true" />
                <span className="text-[0.875rem] text-white/60">{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center py-5 text-[0.78rem] text-white/35 px-5">
        © {SITE.founded}{" "}
        <span className="text-gold-bright">{SITE.name}</span> — Eggcellence Since {SITE.founded}.
        All rights reserved.
      </div>
    </footer>
  );
}
