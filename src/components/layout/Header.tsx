"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(240,234,214,0.97)] backdrop-blur-[10px] border-b border-border-light shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="flex items-center justify-between px-5 sm:px-7 py-3.5 max-w-[1180px] mx-auto"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo.svg"
              alt={`${SITE.name} logo`}
              className="h-[48px] sm:h-[52px] w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,.18)]"
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`font-heading text-[1.3rem] sm:text-[1.4rem] font-[800] tracking-[0.5px] transition-colors duration-300 ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                {SITE.name}
              </span>
              <span
                className={`text-[0.6rem] sm:text-[0.65rem] tracking-[1.5px] uppercase transition-colors duration-300 ${
                  scrolled ? "text-text-light" : "text-white/75"
                }`}
              >
                Eggcellence Since {SITE.founded}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`px-3.5 py-[7px] text-[0.9rem] font-semibold rounded-lg transition-all duration-300 relative
                    after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2
                    after:w-0 after:h-[2px] after:bg-gold-bright after:rounded-sm after:transition-[width] after:duration-[250ms]
                    hover:after:w-[55%] ${
                      pathname === link.href
                        ? `after:w-[55%] ${scrolled ? "text-gold-dark" : "text-gold-bright"}`
                        : scrolled
                        ? "text-text-mid hover:text-gold-dark"
                        : "text-white/92 hover:text-gold-bright"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-[7px] px-[22px] py-[9px] bg-gold text-white rounded-[40px] font-bold text-[0.875rem] shadow-[0_3px_14px_rgba(200,133,26,.35)] hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(200,133,26,.4)] transition-all duration-300"
            >
              <Phone size={15} /> Order Now
            </Link>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent transition-colors duration-200 hover:bg-black/5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X size={22} className={scrolled ? "text-dark" : "text-white"} />
              ) : (
                <Menu size={22} className={scrolled ? "text-dark" : "text-white"} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — rendered outside header to avoid stacking context issues */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[min(320px,85vw)] z-50 bg-cream shadow-[−8px_0_32px_rgba(0,0,0,.15)] md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-light">
          <span className="font-heading font-[800] text-[1.1rem] text-dark">{SITE.name}</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-text-mid hover:bg-beige transition-colors duration-200 border-none bg-transparent cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-3">
          <ul role="list" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`flex items-center px-4 py-3 text-[0.95rem] font-semibold rounded-xl transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-gold-dark bg-gold-pale border border-[rgba(200,133,26,.2)]"
                      : "text-text-body hover:text-gold-dark hover:bg-beige-light"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA at bottom */}
        <div className="px-4 pb-6 pt-3 border-t border-border-light">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-4 py-3.5 bg-gold text-white rounded-[40px] font-bold text-[0.9rem] shadow-[0_4px_18px_rgba(200,133,26,.32)] hover:bg-gold-dark transition-all duration-300 w-full"
          >
            <Phone size={15} /> Order Now
          </Link>
          <p className="text-center text-[0.72rem] text-text-light mt-3">
            Call us: <a href={`tel:${SITE.phone}`} className="text-gold-dark font-semibold">{SITE.phoneFormatted}</a>
          </p>
        </div>
      </div>
    </>
  );
}
