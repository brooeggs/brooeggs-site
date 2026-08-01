const items = [
  { icon: "🥚", title: "Farm Fresh Daily",    desc: "Collected every morning" },
  { icon: "🌿", title: "100% Natural Feed",   desc: "No hormones or antibiotics" },
  { icon: "🛡️", title: "Quality Certified",   desc: "Inspected before packing" },
  { icon: "🚚", title: "Reliable Delivery",   desc: "Same-day dispatch" },
  { icon: "🎧", title: "24/7 Support",        desc: "Always here for you" },
];

export default function FeaturesStrip() {
  return (
    <div className="features-strip">
      <div className="strip-inner">
        {items.map((f, i) => (
          <div key={i} className="strip-item">
            <div className="strip-icon" aria-hidden="true">{f.icon}</div>
            <div>
              <strong>{f.title}</strong>
              <span>{f.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
