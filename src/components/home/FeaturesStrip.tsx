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
    <div className="features-strip-bg overflow-hidden">
      <div className="flex flex-col sm:flex-row items-stretch max-w-[1180px] mx-auto">
        {FEATURES_STRIP.map((f, i) => {
          const Icon = ICON_MAP[f.icon as IconKey];
          return (
            <div
              key={i}
              className="flex-1 flex items-center gap-3 px-6 py-5 text-white border-b sm:border-b-0 sm:border-r border-white/20 last:border-b-0 last:sm:border-r-0 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-[42px] h-[42px] shrink-0 bg-white/18 rounded-full flex items-center justify-center">
                <Icon size={18} />
              </div>
              <div>
                <strong className="block text-[0.875rem] font-bold">{f.title}</strong>
                <span className="block text-[0.72rem] opacity-80 mt-0.5">{f.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
