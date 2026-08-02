import Link from "next/link";

const services = [
  { num: "01", icon: "🛒", title: "Retail Packs",       desc: "Convenient 6-egg and 12-egg packs for households. Sealed fresh, easy to carry, and perfect for everyday cooking.", href: "/products", linkText: "View Details" },
  { num: "02", icon: "📦", title: "Standard Tray (30)", desc: "Our best-seller. A full tray of 30 premium country eggs — perfect for families, small eateries, and weekly buyers.", href: "/products", linkText: "View Details" },
  { num: "03", icon: "🏭", title: "Bulk / Wholesale",   desc: "180-egg cases for restaurants, hotels, bakeries and distributors. Custom quantities available with priority delivery.", href: "/contact", linkText: "Get Quote" },
  { num: "04", icon: "🤝", title: "Farm Partnerships",  desc: "We work directly with small farmers — ethical sourcing, fair pricing, and a transparent supply chain you can trust.", href: "/about",   linkText: "Learn More" },
  { num: "05", icon: "🚚", title: "Same-Day Delivery",  desc: "Order before 10 AM, receive same day. Our logistics are built around keeping your eggs as fresh as possible.", href: "/contact", linkText: "Order Now" },
  { num: "06", icon: "🏆", title: "Quality Grading",    desc: "Every egg is individually inspected, graded by size and weight, and rejected if it doesn't meet our standards.", href: "/products", linkText: "Our Standards" },
];

export default function ServicesSection() {
  return (
    <section className="services-section sec-pad">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">What We Offer</div>
          <h2 className="section-title">Our <strong>Products &amp; Services</strong></h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            From small retail packs to large commercial orders — Brooeggs has the right egg for every kitchen and every scale.
          </p>
        </div>
        <div className="services-full-grid">
          {services.map((s, i) => (
            <div key={i} className="svc-full-card reveal reveal-up">
              <div className="sfc-num">{s.num}</div>
              <span className="sfc-icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link href={s.href} className="sfc-link">
                {s.linkText}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="services-big-label" aria-hidden="true">Services</div>
    </section>
  );
}
