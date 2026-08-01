import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Products",
  description: "Broog's Products — Premium country chicken eggs in retail, tray, and bulk packs.",
};

const introCards = [
  { emoji: "🐔", title: "Free-Range Hens",  desc: "Indigenous breeds, open farms, natural sunlight — the foundation of every great egg." },
  { emoji: "🌾", title: "Natural Feed",      desc: "Grains, greens, insects. No synthetic pellets, no hormones, no antibiotics." },
  { emoji: "🔍", title: "Quality Checked",  desc: "Every egg inspected for shell, weight, and freshness before it leaves the farm." },
  { emoji: "📦", title: "Same-Day Packed",  desc: "Collected at dawn and packed before noon — freshness you can see in the yolk." },
];

const products = [
  { emoji: "🥚", name: "Starter Pack — 6 Eggs",    desc: "Perfect for individuals, couples, or anyone trying Broog's for the first time. Sealed fresh, compact, and easy to carry.", features: ["6 premium country eggs","Hygiene-sealed pack","Great for first-time buyers","Same-day fresh"], cta: "Order Now", ctaClass: "btn-outline-gold", featured: false, badge: null, imgStyle: {} },
  { emoji: "🐣", name: "Family Pack — 12 Eggs",    desc: "A handy dozen for small families and weekly home use. Our most convenient everyday household size.", features: ["12 premium country eggs","Stackable carton","Ideal for weekly buyers","Graded & sorted"], cta: "Order Now", ctaClass: "btn-outline-gold", featured: false, badge: null, imgStyle: {} },
  { emoji: "🍳", name: "Standard Tray — 30 Eggs",  desc: "Our bestselling tray. The perfect balance of quantity and value for households, small restaurants, and regular buyers.", features: ["30 graded country eggs","Classic pulp tray","Best household value","Priority dispatch"], cta: "Order Now", ctaClass: "btn-gold", featured: true, badge: "Best Seller", imgStyle: { background: "linear-gradient(145deg,#f5e0a0,#e8c85c)" } },
  { emoji: "📦", name: "Half Case — 90 Eggs",      desc: "Three trays in a box. For growing families, small cafes, and weekly buyers who want the convenience of bulk.", features: ["3 × 30-egg trays","Reinforced box","Better price per egg","Free delivery eligible"], cta: "Order Now", ctaClass: "btn-outline-gold", featured: false, badge: null, imgStyle: {} },
  { emoji: "🏭", name: "Bulk Case — 180 Eggs",     desc: "Six full trays in a reinforced case. The commercial standard for restaurants, hotels, caterers, and cloud kitchens.", features: ["6 × 30-egg trays","Best price per egg","Priority delivery","Invoice & receipt provided"], cta: "Get Quote", ctaClass: "btn-outline-gold", featured: false, badge: null, imgStyle: {} },
  { emoji: "🤝", name: "Wholesale / Custom",       desc: "500+ eggs per order? We handle large-scale supply for distributors, retailers, and food manufacturers.", features: ["500+ eggs per order","Custom packaging options","Dedicated account manager","Flexible payment terms"], cta: "Enquire Now", ctaClass: "btn-outline-gold", featured: false, badge: null, imgStyle: {} },
];

const comparison = [
  { criteria: "Yolk Colour",         icon: "🎨", broogs: "Deep orange — rich carotenoids",       commercial: "Pale yellow" },
  { criteria: "Protein",             icon: "🧬", broogs: "Up to 25% higher quality protein",     commercial: "Standard levels" },
  { criteria: "Omega-3",             icon: "🐟", broogs: "Significantly higher",                 commercial: "Minimal" },
  { criteria: "Vitamin D",           icon: "☀️", broogs: "3–4× more",                            commercial: "Very low" },
  { criteria: "Freshness",           icon: "⏰", broogs: "Same-day collection & dispatch",       commercial: "Cold-stored, days old" },
  { criteria: "Hormones/Antibiotics",icon: "💉", broogs: "Zero — completely clean",              commercial: "Often present" },
  { criteria: "Hen Conditions",      icon: "🏠", broogs: "Free-range, open-air, natural",        commercial: "Battery cages" },
  { criteria: "Taste",               icon: "🍽️", broogs: "Rich, full, authentic flavour",        commercial: "Mild, uniform, bland" },
];

const processSteps = [
  { icon: "🏠", title: "Free-Range Farm",     desc: "Hens roam outdoors on partner farms, eating natural feed under open sky." },
  { icon: "🥚", title: "Daily Collection",    desc: "Eggs collected fresh each morning by trained farm staff — before 8 AM." },
  { icon: "🔍", title: "Quality Inspection",  desc: "Every batch checked for shell, size, weight, and freshness standards." },
  { icon: "📦", title: "Careful Packing",     desc: "Packed in sturdy trays designed to protect during transport. Labelled & dated." },
  { icon: "🚚", title: "Same-Day Delivery",   desc: "Dispatched fresh — no overnight storage, no delays, no compromise." },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span style={{ fontSize: ".55rem", opacity: .6 }}>›</span>
              <span>Products</span>
            </nav>
            <div className="section-eyebrow" style={{ marginTop: 14 }}>What We Sell</div>
            <h1>Our <em>Products</em></h1>
            <p>Farm-fresh country eggs — available in sizes to suit every home, business, and budget.</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="sec-pad" style={{ background: "#FAF6EE" }}>
        <div className="container">
          <div className="intro-grid">
            <div className="reveal reveal-left">
              <div className="intro-overline">Signature Product</div>
              <h2 className="section-title">Broog&apos;s Country <strong>Chicken Eggs</strong></h2>
              <div className="intro-divider" />
              <p className="intro-lead">Our country chicken eggs come from indigenous desi breeds raised on open, free-range farms. The result is a deeper, richer orange yolk with naturally higher omega-3, vitamin D, and protein content than any commercial egg.</p>
              <p className="intro-lead">Each egg is individually inspected, graded by size and weight, and packed the same day it&apos;s collected — so what arrives at your door is as fresh as possible.</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
                {["💪 High Protein", "🐟 Omega-3 Rich", "☀️ Vitamin D", "🌿 No Additives"].map((b) => (
                  <span key={b} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 14px", background: "rgba(200,133,26,.06)", borderRadius: 40, fontSize: ".8rem", fontWeight: 700, color: "#A86E10", border: "1px solid #E8D5B0" }}>{b}</span>
                ))}
              </div>
            </div>
            <div className="services-grid reveal reveal-right">
              {introCards.map((c, i) => (
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

      {/* Pack Sizes */}
      <section className="sec-pad" style={{ background: "#F5F0E4" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-eyebrow">Choose Your Pack</div>
            <h2 className="section-title">Available <strong>Pack Sizes</strong></h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>From individual packs to bulk commercial cases — there&apos;s a Broog&apos;s pack for every need and every scale.</p>
          </div>
          <div className="products-grid">
            {products.map((p, i) => (
              <div key={i} className={`product-card reveal reveal-up${p.featured ? " featured" : ""}`}>
                <div className="product-img-placeholder" style={p.imgStyle}>
                  <span>{p.emoji}</span>
                  {p.badge && <span className="product-badge">{p.badge}</span>}
                </div>
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <ul className="product-features">
                    {p.features.map((f, fi) => (
                      <li key={fi}><span className="product-feat-dot" aria-hidden="true" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`btn ${p.ctaClass} btn-sm`}>{p.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="sec-pad" style={{ background: "#FAF6EE" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 44 }}>
            <div className="section-eyebrow">Why Country Eggs</div>
            <h2 className="section-title">Broog&apos;s vs <strong>Commercial Eggs</strong></h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>The science-backed difference you can see in the yolk and taste in every bite.</p>
          </div>
          <div className="cmp-wrap reveal reveal-up">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th className="crit">Criteria</th>
                  <th className="country"><div className="th-ic">🥚</div>Broog&apos;s Country Eggs</th>
                  <th><div className="th-ic">🏭</div>Commercial Eggs</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i}>
                    <td className="crit">{row.icon} {row.criteria}</td>
                    <td className="cmp-win">🏆 {row.broogs}</td>
                    <td className="cmp-lose">{row.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="sec-pad" style={{ background: "linear-gradient(145deg,#2C1A0A,#3D2810)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 44 }}>
            <div className="section-eyebrow light">Our Process</div>
            <h2 className="section-title light">Farm to <strong style={{ color: "#D4972A" }}>Your Table</strong></h2>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: "1rem", maxWidth: 560, margin: "0 auto 44px", lineHeight: 1.75 }}>Every egg goes through a careful, five-step journey from farm to delivery.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
            {processSteps.map((s, i) => (
              <div key={i} className="value-card reveal reveal-up">
                <div className="value-icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="products" />
    </>
  );
}
