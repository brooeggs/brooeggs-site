import { Egg, Leaf, ShieldCheck, Truck, Headphones } from "lucide-react";
import { FEATURES_STRIP } from "@/lib/constants";

const ICON_MAP = {
  egg: Egg,
  leaf: Leaf,
  shield: ShieldCheck,
  truck: Truck,
  headphones: Headphones,
} as const;

type IconKey = keyof typeof ICON_MAP;

export default function FeaturesStrip() {
  return (
    <div className="features-strip-bg">
      {/* On mobile: 2-col grid. On md: single row. */}
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {FEATURES_STRIP.map((f, i) => {
            const Icon = ICON_MAP[f.icon as IconKey];
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 text-white border-b md:border-b-0 border-r border-white/15 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 shrink-0 bg-white/15 rounded-full flex items-center justify-center">
                  <Icon size={17} />
                </div>
                <div className="min-w-0">
                  <strong className="block text-[0.82rem] font-bold leading-tight truncate">{f.title}</strong>
                  <span className="block text-[0.7rem] opacity-75 mt-0.5 leading-tight truncate">{f.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
