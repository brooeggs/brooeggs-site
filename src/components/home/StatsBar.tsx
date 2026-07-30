import { Users, Egg, Store, Star } from "lucide-react";

const stats = [
  { Icon: Users, value: "5,000", suffix: "+", label: "Happy Customers" },
  { Icon: Egg, value: "100,000", suffix: "+", label: "Eggs Delivered" },
  { Icon: Store, value: "200", suffix: "+", label: "Partner Stores" },
  { Icon: Star, value: "98", suffix: "%", label: "Satisfaction Rate" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar py-[52px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center py-10 px-5 border-r border-white/8 last:border-r-0 hover:bg-[rgba(200,133,26,.08)] transition-all duration-300">
              <s.Icon size={26} className="text-gold-bright mb-3 mx-auto" />
              <div>
                <span className="font-heading text-[2.6rem] font-[800] text-white leading-none">{s.value}</span>
                <span className="text-[1.6rem] font-bold text-gold-bright">{s.suffix}</span>
              </div>
              <span className="block text-[0.75rem] text-white/55 mt-2 tracking-[0.5px] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
