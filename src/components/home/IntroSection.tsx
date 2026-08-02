import Link from "next/link";

const serviceCards = [
  { emoji: "🐔", title: "The Best Hens",  desc: "Indigenous free-range breeds raised on natural grain and pasture. Happy hens lay better eggs — it's that simple." },
  { emoji: "🌾", title: "Our Farms",       desc: "Partner farms across Tamil Nadu follow ethical, sustainable practices with open-air housing and clean water access." },
  { emoji: "🥚", title: "Organic Eggs",    desc: "Zero artificial additives. Our eggs are 100% chemical-free, collected within hours and packed the same day." },
  { emoji: "🚚", title: "Fast Delivery",   desc: "We dispatch orders same-morning so your eggs arrive fresh — whether you're a home buyer or a bulk business." },
];

export default function IntroSection() {
  return (
    <section className="intro-section sec-pad">
      <div className="container">
        <div className="intro-grid">

          {/* LEFT */}
          <div className="reveal reveal-left">
            <div className="intro-overline">Quality Poultry</div>
            <h2 className="section-title">
              <strong>Friendly Service</strong><br />You Can Trust
            </h2>
            <div className="intro-divider" />
            <p className="intro-lead">
              At Brooeggs, we believe great food starts with great farming. Our country chicken eggs come from hens that roam freely, eat naturally, and live well — and you can taste that difference in every single egg.
            </p>
            <p className="intro-lead">
              We supply households, restaurants, hotels, and retailers across the region with unwavering freshness and quality, day after day.
            </p>
            <Link href="/about" className="btn btn-gold mt-8 inline-flex">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              View All Services
            </Link>
          </div>

          {/* RIGHT: 2×2 service cards */}
          <div className="services-grid reveal reveal-right">
            {serviceCards.map((c, i) => (
              <div key={i} className="service-card">
                <span className="svc-icon-emoji" aria-hidden="true">{c.emoji}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
