import type { Metadata } from "next";
import Link from "next/link";
import StatsBar from "@/components/home/StatsBar";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Brooeggs (Broo Eggs) — Our story, mission, and commitment to farm-fresh free-range country chicken eggs across Tamil Nadu since 2025.",
  keywords: [
    "About Brooeggs",
    "about broo eggs",
    "Brooeggs story",
    "country eggs Tamil Nadu",
    "free range eggs farm",
    "nattu muttai farm Tamil Nadu",
    "ethical egg farming",
    "Tamil Nadu egg supplier",
  ],
  alternates: { canonical: "https://brooeggs.com/about" },
  openGraph: {
    title: "About Brooeggs — Our Story & Mission",
    description:
      "Broo Eggs (Brooeggs) — A passion for real food, ethical farming, and fresh country chicken eggs delivered across Tamil Nadu since 2025.",
    url: "https://brooeggs.com/about",
  },
};

const checklist = [
  { title: "Free-Range Hens Only",        desc: "We partner exclusively with farms that give hens open-air space and natural feed." },
  { title: "Zero Artificial Inputs",      desc: "No growth hormones, no antibiotics, no synthetic feed additives — ever." },
  { title: "Direct Farm Relationships",   desc: "We know our farmers by name and visit regularly to maintain our standards." },
  { title: "Same-Day Freshness",          desc: "Collected at dawn, inspected and packed before noon, delivered before evening." },
];

const mvCards = [
  { icon: "🎯", title: "Our Mission",   desc: "To make premium, genuinely natural country chicken eggs accessible to every household and business — without compromising on quality, freshness, or ethical farming practices." },
  { icon: "👁️", title: "Our Vision",    desc: "To become South India's most trusted name in farm-fresh, natural eggs — recognised for quality you can see, smell, and taste in every single egg we deliver." },
  { icon: "❤️", title: "Our Promise",   desc: "Every egg you receive from Brooeggs was laid by a free-range hen, inspected by our team, and dispatched the same morning. That promise never changes." },
  { icon: "🤝", title: "Our Community", desc: "We reinvest in the farmers and communities that make our eggs possible. Fair prices, long-term relationships, and sustainable growth for everyone in the chain." },
];

const values = [
  { icon: "🛡️", title: "Integrity",       desc: "What you see on the label is exactly what's in the box. No shortcuts, no exaggerations." },
  { icon: "🌿", title: "Freshness",        desc: "Every decision we make — from farm to delivery — is designed to protect the freshness of your eggs." },
  { icon: "🕊️", title: "Animal Welfare",   desc: "Happy, healthy hens produce better eggs. Animal welfare is not optional for us — it's foundational." },
  { icon: "👥", title: "Community",        desc: "We support small farms and rural livelihoods. Every purchase helps sustain the ecosystem we depend on." },
];

const whyUs = [
  { num: "01", icon: "🌱", title: "Natural Feed Only",      desc: "Our hens eat grains, greens, and insects — no growth hormones, no synthetic additives, no shortcuts." },
  { num: "02", icon: "☀️", title: "Free-Range Living",      desc: "Every hen on our partner farms lives outdoors in natural sunlight, producing eggs with richer yolks and better nutrition." },
  { num: "03", icon: "🚚", title: "Same-Day Delivery",      desc: "Collected at dawn and on your doorstep by evening. No cold-storage delays, no multi-day warehousing." },
  { num: "04", icon: "🏆", title: "Strict Quality Grading", desc: "Every batch is checked for shell, size, weight, and freshness. Anything below standard gets rejected — no exceptions." },
  { num: "05", icon: "👥", title: "Direct Farm Network",    desc: "We buy directly from farms we know and trust — full supply-chain transparency with no middlemen inflating costs." },
  { num: "06", icon: "🎧", title: "7-Day Support",          desc: "Our team is available every day to handle queries, adjust orders, and ensure every delivery meets your expectations." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span style={{ fontSize: ".55rem", opacity: .6 }}>›</span>
              <span>About Us</span>
            </nav>
            <div className="section-eyebrow" style={{ marginTop: 14 }}>Our Story</div>
            <h1>About <em>Brooeggs</em></h1>
            <p>A passion for real food, ethical farming, and the people who make it possible — since 2025.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="sec-pad" style={{ background: "#FAF6EE" }}>
        <div className="container">
          <div className="about-split">
            <div className="about-img-col reveal reveal-left" style={{ position: "relative" }}>
              <div className="about-photo-placeholder">🐓</div>
              <div className="about-badge">
                <strong>2025</strong>
                <span>Founded</span>
              </div>
            </div>
            <div className="reveal reveal-right">
              <div className="section-eyebrow">Our Background</div>
              <h2 className="section-title">Started with a Simple <strong>Belief</strong></h2>
              <div style={{ width: 44, height: 3, background: "#C8851A", borderRadius: 2, margin: "16px 0 20px" }} />
              <p className="section-desc" style={{ maxWidth: "100%" }}>
                Brooeggs was built on one simple idea — that people deserve eggs the way nature intended them: fresh from a free-range farm, laid by a healthy hen, and on your table the same day.
              </p>
              <p style={{ fontSize: "1rem", color: "#6B5D47", lineHeight: 1.75, marginTop: 14, marginBottom: 24 }}>
                What started as a passion project connecting small Tamil Nadu farms with quality-conscious customers quickly grew into a trusted regional supplier. We now serve thousands of households, restaurants, and retail partners who share our belief that real food matters.
              </p>
              <div className="checklist">
                {checklist.map((item, i) => (
                  <div key={i} className="checklist-item">
                    <div className="cl-icon" aria-hidden="true">✓</div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
                <Link href="/products" className="btn btn-gold">🥚 Our Products</Link>
                <Link href="/contact" className="btn btn-outline-gold">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Mission & Vision */}
      <section className="sec-pad" style={{ background: "#F5F0E4" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 44 }}>
            <div className="section-eyebrow">Purpose</div>
            <h2 className="section-title">Mission &amp; <strong>Vision</strong></h2>
          </div>
          <div className="mv-row">
            {mvCards.map((card, i) => (
              <div key={i} className="mv-card reveal reveal-up">
                <div className="mv-card-icon" aria-hidden="true" style={{ fontSize: "1.2rem" }}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="sec-pad" style={{ background: "linear-gradient(145deg,#2C1A0A,#3D2810)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 44 }}>
            <div className="section-eyebrow light">What We Stand For</div>
            <h2 className="section-title light">Our Core <strong style={{ color: "#D4972A" }}>Values</strong></h2>
          </div>
          <div className="values-row">
            {values.map((v, i) => (
              <div key={i} className="value-card reveal reveal-up">
                <div className="value-icon" aria-hidden="true">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="sec-pad" style={{ background: "#FAF6EE" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-eyebrow">Why Brooeggs</div>
            <h2 className="section-title">Six Reasons Customers <strong>Stay With Us</strong></h2>
          </div>
          <div className="services-full-grid">
            {whyUs.map((s, i) => (
              <div key={i} className="svc-full-card reveal reveal-up">
                <div className="sfc-num">{s.num}</div>
                <span className="sfc-icon" aria-hidden="true">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="about" />
    </>
  );
}
