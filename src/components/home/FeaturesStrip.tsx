import { Egg, Leaf, ShieldCheck, Truck, Headphones } from "lucide-react";

const features = [
  { Icon: Egg, title: "Farm Fresh Daily", desc: "Collected every morning" },
  { Icon: Leaf, title: "100% Natural Feed", desc: "No hormones or antibiotics" },
  { Icon: ShieldCheck, title: "Quality Certified", desc: "Inspected before packing" },
  { Icon: Truck, title: "Reliable Delivery", desc: "Same-day dispatch" },
  { Icon: Headphones, title: "24/7 Support", desc: "Always here for you" },
];

export default function FeaturesStrip() {
  return (
    <div className="features-strip-bg overflow-hidden">
      <div className="flex flex-col sm:flex-row items-stretch max-w-[1180px] mx-auto">
        {features.map((f, i) => (
          <div key={i} className="flex-1 flex items-center gap-3 px-6 py-5 text-white border-r-0 sm:border-r border-white/20 last:border-r-0 hover:bg-white/10 transition-all duration-300">
            <div className="w-[42px] h-[42px] shrink-0 bg-white/18 rounded-full flex items-center justify-center text-[1.1rem]">
              <f.Icon size={18} />
            </div>
            <div>
              <strong className="block text-[0.875rem] font-bold">{f.title}</strong>
              <span className="block text-[0.72rem] opacity-82 mt-0.5">{f.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
