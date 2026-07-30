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
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = ICON_MAP[s.icon as IconKey];
            return (
              <div
                key={i}
                className="text-center py-10 px-5 border-r border-white/8 last:border-r-0 even:border-r-0 md:even:border-r hover:bg-[rgba(200,133,26,.08)] transition-all duration-300 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <Icon size={26} className="text-gold-bright mb-3 mx-auto" />
                <div>
                  <span className="font-heading text-[2.6rem] font-[800] text-white leading-none">
                    {s.value.toLocaleString()}
                  </span>
                  <span className="text-[1.6rem] font-bold text-gold-bright">{s.suffix}</span>
                </div>
                <span className="block text-[0.75rem] text-white/55 mt-2 tracking-[0.5px] uppercase">
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
