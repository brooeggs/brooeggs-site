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
  const items = [...FEATURES_STRIP, ...FEATURES_STRIP];

  return (
    <div className="features-strip-bg">
      <div className="max-w-[1200px] mx-auto overflow-hidden">
        <div className="strip-grid-inner">
          {items.map((f, i) => {
            const Icon = ICON_MAP[f.icon as IconKey];
            return (
              <div key={i} className="strip-item">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Icon size={13} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span>{f.title}</span>
                {i % FEATURES_STRIP.length === FEATURES_STRIP.length - 1 && (
                  <span className="strip-separator mx-2">✦</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
