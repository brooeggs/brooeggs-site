"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(240,234,214,0.97)] backdrop-blur-[10px] border-b border-border-light shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-7 py-3.5 max-w-[1180px] mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo/logo.svg" alt="Broog's" className="h-[52px] w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,.18)]" />
          <div className="flex flex-col leading-tight">
            <span className={`font-heading text-[1.4rem] font-[800] tracking-[0.5px] transition-colors duration-300 ${scrolled ? "text-dark" : "text-white"}`}>
              Broog's
            </span>
            <span className={`text-[0.65rem] tracking-[1.5px] uppercase transition-colors duration-300 ${scrolled ? "text-text-light" : "text-white/75"}`}>
              Eggcellence Since 2025
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3.5 py-[7px] text-[0.9rem] font-semibold rounded-lg transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-gold-bright after:rounded-sm after:transition-[width] after:duration-[250ms] hover:after:w-[55%] ${
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

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-[7px] px-[22px] py-[9px] bg-gold text-white rounded-[40px] font-bold text-[0.875rem] shadow-[0_3px_14px_rgba(200,133,26,.35)] hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(200,133,26,.4)] transition-all duration-300"
          >
            <Phone size={15} /> Order Now
          </Link>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer border-none bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} className={scrolled ? "text-dark" : "text-white"} />
            ) : (
              <>
                <span className={`block w-[22px] h-[2px] rounded-sm transition-all duration-300 ${scrolled ? "bg-dark" : "bg-white"}`} />
                <span className={`block w-[22px] h-[2px] rounded-sm transition-all duration-300 ${scrolled ? "bg-dark" : "bg-white"}`} />
                <span className={`block w-[22px] h-[2px] rounded-sm transition-all duration-300 ${scrolled ? "bg-dark" : "bg-white"}`} />
              </>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-[70px] left-0 right-0 bg-cream flex flex-col items-stretch p-4 gap-1 border-b border-border shadow-md md:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-[0.9rem] font-semibold rounded-lg transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-gold-dark bg-gold-pale"
                    : "text-text-body hover:text-gold-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-gold text-white rounded-[40px] font-bold text-[0.875rem]"
            >
              <Phone size={15} /> Order Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
