import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="footer-bg text-white/75 pt-[60px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-10 pb-12 border-b border-white/8">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-gold-bright text-[0.72rem] tracking-[1.5px] uppercase mb-1.5 font-bold">
              Eggcellence Since 2025
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo/logo.svg" alt="Broog's" className="h-14 w-auto object-contain brightness-110 drop-shadow-[0_2px_6px_rgba(0,0,0,.3)] mb-3.5" />
            <p className="text-[0.875rem] leading-7 max-w-[240px]">
              Premium country chicken eggs from free-range farms. Fresh, natural, and delivered with care every single day.
            </p>
            <div className="flex gap-2.5 mt-4.5">
              {[
                { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: "fb" },
                { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: "ig" },
                { href: SOCIAL_LINKS.whatsapp, label: "WhatsApp", icon: "wa", external: true },
                { href: SOCIAL_LINKS.youtube, label: "YouTube", icon: "yt" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg bg-white/7 border border-white/12 flex items-center justify-center text-white/60 text-[0.85rem] hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
                >
                  {s.icon === "fb" && "f"}
                  {s.icon === "ig" && "ig"}
                  {s.icon === "wa" && "w"}
                  {s.icon === "yt" && "▶"}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-[0.8rem] font-[800] text-white tracking-[1.5px] uppercase mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[0.875rem] text-white/60 hover:text-gold-bright hover:pl-1 transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[0.8rem] font-[800] text-white tracking-[1.5px] uppercase mb-4">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.productLinks.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <Link href={link.href} className="text-[0.875rem] text-white/60 hover:text-gold-bright hover:pl-1 transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[0.8rem] font-[800] text-white tracking-[1.5px] uppercase mb-4">
              Contact
            </h4>
            <div className="flex gap-2.5 items-start mb-3">
              <Phone size={14} className="text-gold mt-[3px] shrink-0" />
              <a href={`tel:${SITE.phone}`} className="text-[0.875rem] text-white/60 hover:text-gold-bright">{SITE.phoneFormatted}</a>
            </div>
            <div className="flex gap-2.5 items-start mb-3">
              <Mail size={14} className="text-gold mt-[3px] shrink-0" />
              <a href={`mailto:${SITE.email}`} className="text-[0.875rem] text-white/60 hover:text-gold-bright">{SITE.email}</a>
            </div>
            <div className="flex gap-2.5 items-start mb-3">
              <MapPin size={14} className="text-gold mt-[3px] shrink-0" />
              <span className="text-[0.875rem] text-white/60">{SITE.location}</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <Clock size={14} className="text-gold mt-[3px] shrink-0" />
              <span className="text-[0.875rem] text-white/60">{SITE.hours}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5 text-[0.78rem] text-white/35">
        © 2025 <span className="text-gold-bright">Broog's</span> — Eggcellence Since 2025. All rights reserved.
      </div>
    </footer>
  );
}
