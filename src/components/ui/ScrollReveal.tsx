"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay so the new page's DOM is fully rendered
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
      if (!els.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            // Stagger siblings that are also .reveal elements
            const siblings = Array.from(
              el.parentElement?.children ?? []
            ).filter((c) => c.classList.contains("reveal"));
            const delay = siblings.indexOf(el) * 90;
            setTimeout(() => el.classList.add("visible"), delay);
            io.unobserve(el);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      els.forEach((el) => io.observe(el));

      return () => io.disconnect();
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]); // re-run on every route change

  return null;
}
