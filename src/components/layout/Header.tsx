"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f5edd8]/95 backdrop-blur-[12px] shadow-[0_2px_24px_rgba(139,107,74,0.12)]"
            : "bg-transparent"
        }`}
        id="header"
      >
        <nav
          className="flex items-center justify-between px-6 py-3 max-w-[1200px] mx-auto"
          aria-label="Main navigation"
        >
          {/* Logo — no text, just image */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label={`${SITE.name} — Home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo.jpg"
              alt={`${SITE.name} logo`}
              className="w-14 h-14 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`relative px-4 py-2 text-[0.925rem] font-semibold rounded-lg transition-all duration-300
                    after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2
                    after:w-0 after:h-[2px] after:bg-[#D4A017] after:rounded-full after:transition-[width] after:duration-300
                    hover:after:w-[55%] ${
                      pathname === link.href
                        ? `after:w-[55%] ${scrolled ? "text-[#B8860B]" : "text-[#F0C040]"}`
                        : scrolled
                        ? "text-[#4A4A4A] hover:text-[#8B6B4A]"
                        : "text-white/90 hover:text-[#F0C040]"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#D4A017] text-white rounded-full font-semibold text-[0.875rem] shadow-[0_4px_16px_rgba(212,160,23,0.35)] hover:bg-[#B8860B] hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(212,160,23,0.45)] transition-all duration-300"
            >
              <Phone size={14} strokeWidth={2.5} /> Call Now
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg cursor-pointer border-none bg-transparent"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${scrolled ? "bg-[#6B4C2A]" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${scrolled ? "bg-[#6B4C2A]" : "bg-white"} ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${scrolled ? "bg-[#6B4C2A]" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[3px] md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[min(300px,82vw)] z-50 bg-[#f5edd8] shadow-[-8px_0_40px_rgba(0,0,0,0.12)] md:hidden flex flex-col transition-transform duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8D5B0]">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center" aria-label={`${SITE.name} — Home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo.jpg"
              alt={`${SITE.name} logo`}
              className="w-10 h-10 object-cover rounded-lg"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[#6B4C2A] hover:bg-[#E8D5B0] transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul role="list" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`flex items-center px-4 py-3.5 text-[0.95rem] font-semibold rounded-xl transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#B8860B] bg-[rgba(212,160,23,0.1)] border border-[rgba(212,160,23,0.25)]"
                      : "text-[#4A4A4A] hover:text-[#8B6B4A] hover:bg-[rgba(212,160,23,0.06)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="px-4 pb-8 pt-3 border-t border-[#E8D5B0]">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center justify-center gap-2 px-4 py-3.5 bg-[#D4A017] text-white rounded-full font-bold text-[0.9rem] shadow-[0_4px_20px_rgba(212,160,23,0.35)] hover:bg-[#B8860B] transition-all duration-300 w-full"
          >
            <Phone size={15} /> Call Now
          </a>
          <p className="text-center text-[0.72rem] text-[#7A7A7A] mt-3">
            {SITE.phoneFormatted}
          </p>
        </div>
      </div>
    </>
  );
}
