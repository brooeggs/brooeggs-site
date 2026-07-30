import { Users, Egg, Store, Star } from "lucide-react";
import { STATS } from "@/lib/constants";

const ICON_MAP = {
  users: Users,
  egg: Egg,
  store: Store,
  star: Star,
} as const;

type IconKey = keyof typeof ICON_MAP;

export default function StatsBar() {
  return (
    <section className="stats-bar py-[52px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = ICON_MAP[s.icon as IconKey];
            return (
              <div
                key={i}
                className="text-center py-8 sm:py-10 px-4 border-r border-white/10 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r hover:bg-[rgba(200,133,26,.08)] transition-all duration-300"
              >
                <Icon size={24} className="text-gold-bright mb-3 mx-auto" />
                <div className="flex items-end justify-center gap-0.5">
                  <span className="font-heading text-[2.2rem] sm:text-[2.6rem] font-[800] text-white leading-none">
                    {s.value >= 1000 ? (s.value >= 100000 ? "1L" : s.value.toLocaleString("en-IN")) : s.value}
                  </span>
                  <span className="text-[1.3rem] sm:text-[1.6rem] font-bold text-gold-bright leading-none mb-0.5">{s.suffix}</span>
                </div>
                <span className="block text-[0.7rem] sm:text-[0.75rem] text-white/55 mt-2 tracking-[0.5px] uppercase">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
