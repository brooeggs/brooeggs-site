import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="hero" style={{ position: "relative" }}>
      {/* Background image */}
      <Image
        src="/images/img_001.jpeg"
        alt=""
        fill
        className="object-cover"
        style={{ opacity: 0.38, zIndex: 0 }}
        priority
      />
      <div className="hero-inner" style={{ position: "relative", zIndex: 1 }}>

        {/* LEFT: Text */}
        <div className="hero-text">
          <div className="hero-eyebrow" style={{ animation: "fadeUp .6s .1s ease both", opacity: 0 }}>
            <span />Quality Poultry &amp; Farm Fresh<span />
          </div>
          <h1 className="hero-title" style={{ animation: "fadeUp .6s .25s ease both", opacity: 0 }}>
            Fresh Eggs<br />For You
            <span className="big-word"><em>Everyday!</em></span>
          </h1>
          <p className="hero-sub" style={{ animation: "fadeUp .6s .4s ease both", opacity: 0 }}>
            Taste our delicious and nutritious country chicken eggs — naturally raised
            on free-range farms, collected fresh daily, and delivered straight to your table.
          </p>
          <div className="hero-actions" style={{ animation: "fadeUp .6s .55s ease both", opacity: 0 }}>
            <Link href="/products" className="btn btn-gold">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="12" rx="10" ry="7"/><path d="M12 5v14"/></svg>
              View All Products
            </Link>
            <Link href="/about" className="btn btn-outline-gold">Learn More</Link>
          </div>
          <div className="hero-trust" style={{ animation: "fadeUp .6s .7s ease both", opacity: 0 }}>
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              100% Natural
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="16" height="13" x="1" y="3" rx="2"/><path d="M21 10c1 0 2 1 2 2v3c0 1-1 2-2 2h-1v-7z"/></svg>
              Daily Delivery
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Quality Assured
            </div>
          </div>
        </div>

        {/* RIGHT: Visual */}
        <div className="hero-visual" style={{ animation: "fadeUp .7s .3s ease both", opacity: 0 }}>
          <div className="hero-photo-placeholder">
            <Image
              src="/images/img_055.jpeg"
              alt="Fresh farm eggs"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hero-badge-float">
            <span className="hbf-icon">🥚</span>
            <div className="hbf-text">
              <strong>Farm Fresh</strong>
              <span>Collected daily</span>
            </div>
          </div>
          <div className="hero-badge-float2">
            ★ 5000+ Happy Customers
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true" style={{ position: "relative", zIndex: 1 }}>
        <span>Scroll</span>
        <div className="scroll-chevron" />
      </div>
    </section>
  );
}
