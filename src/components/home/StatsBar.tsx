"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Egg, Store, Star } from "lucide-react";
import { STATS } from "@/lib/constants";

const ICON_MAP = {
  users: Users,
  egg: Egg,
  store: Store,
  star: Star,
} as const;

type IconKey = keyof typeof ICON_MAP;

function animateCounter(el: HTMLElement, target: number) {
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    current = Math.min(Math.round(increment * step), target);
    el.textContent =
      current >= 100000
        ? "100K"
        : current >= 1000
        ? current.toLocaleString("en-IN")
        : String(current);
    if (step >= steps) clearInterval(timer);
  }, duration / steps);
}

export default function StatsBar() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const counters = sectionRef.current?.querySelectorAll("[data-target]");
          counters?.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target") || "0", 10);
            animateCounter(el as HTMLElement, target);
          });
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats-bar py-[60px]" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section label */}
        <p className="text-center text-[0.72rem] font-bold uppercase tracking-[2.5px] text-[rgba(240,192,64,0.6)] mb-10">
          Trusted by thousands across Tamil Nadu
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s, i) => {
            const Icon = ICON_MAP[s.icon as IconKey];
            return (
              <div key={i} className="stat-card-dark group cursor-default">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[rgba(212,160,23,0.12)] flex items-center justify-center mx-auto mb-4 transition-all duration-400 group-hover:bg-[rgba(212,160,23,0.22)]">
                  <Icon size={22} className="text-[#D4A017]" strokeWidth={1.8} />
                </div>

                {/* Counter */}
                <div className="flex items-end justify-center gap-0.5 mb-2">
                  <span
                    className="font-heading text-[2.6rem] font-[800] text-white leading-none"
                    data-target={s.value}
                  >
                    0
                  </span>
                  <span className="text-[1.6rem] font-bold text-[#F0C040] leading-none mb-0.5">
                    {s.suffix}
                  </span>
                </div>

                {/* Label */}
                <span className="block text-[0.78rem] font-semibold text-white/55 tracking-[0.8px] uppercase">
                  {s.label}
                </span>

                {/* Bottom accent bar */}
                <div className="w-8 h-[2px] rounded-full bg-[#D4A017] mx-auto mt-4 opacity-40 transition-all duration-300 group-hover:w-14 group-hover:opacity-70" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
