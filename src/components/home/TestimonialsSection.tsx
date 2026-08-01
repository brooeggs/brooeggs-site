import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="sec-pad" style={{ background: "#FAF6EE" }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">Customer Reviews</div>
          <h2 className="section-title">What People <strong>Say About Us</strong></h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Trusted by thousands of homes, restaurants, and stores across the region.
          </p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card reveal reveal-up">
              <div className="testi-quote" aria-hidden="true">&ldquo;</div>
              <div className="testi-stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="testi-person">
                <div className="testi-avatar" aria-hidden="true">{t.avatar}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
