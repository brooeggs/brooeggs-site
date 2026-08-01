"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: "👥", value: 5000,   suffix: "+", label: "Happy Customers" },
  { icon: "🥚", value: 100000, suffix: "+", label: "Eggs Delivered" },
  { icon: "🏪", value: 200,    suffix: "+", label: "Partner Stores" },
  { icon: "⭐", value: 98,     suffix: "%", label: "Satisfaction Rate" },
];

function animateCounter(el: HTMLElement, target: number) {
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    const current = Math.min(Math.round(increment * step), target);
    el.textContent = current >= 100000 ? "100K" : current >= 1000 ? current.toLocaleString("en-IN") : String(current);
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
          sectionRef.current?.querySelectorAll("[data-target]").forEach((el) => {
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
    <section className="stats-bar sec-pad-sm" ref={sectionRef}>
      <div className="container">
        <div className="stats-bar-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-bar-item reveal reveal-up">
              <div className="sbi-icon" aria-hidden="true">{s.icon}</div>
              <div>
                <span className="sbi-num" data-target={s.value}>0</span>
                <span className="sbi-suf">{s.suffix}</span>
              </div>
              <span className="sbi-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
