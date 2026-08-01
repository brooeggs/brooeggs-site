"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <header id={scrolled ? "header scrolled" : "header"} className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${scrolled ? "bg-[rgba(240,234,214,0.97)] backdrop-blur-[10px] border-b border-[#EDE4D4] shadow-[0_2px_12px_rgba(44,36,22,0.08)]" : "bg-transparent"}`}>
      <nav className="navbar" aria-label="Main navigation">

        {/* Brand */}
        <Link href="/" className="nav-brand" aria-label={`${SITE.name} — Home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo/logo.jpg" alt={`${SITE.name} logo`} className="nav-logo" />
          <div className="brand-text">
            <span className="brand-name">{SITE.name}</span>
            <span className="brand-tagline">Eggcellence Since {SITE.founded}</span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-menu hidden md:flex" id="navMenu" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a href="#" className="nav-search hidden md:flex" aria-label="Search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </a>
          <Link href="/contact" className="nav-cta hidden sm:flex">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Order Now
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger md:hidden${menuOpen ? " open" : ""}`}
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div ref={menuRef}>
        <ul className={`nav-menu${menuOpen ? " open" : ""} md:hidden`} id="mobileNavMenu" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn btn-gold btn-sm mt-2 w-full justify-center">
              Order Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
