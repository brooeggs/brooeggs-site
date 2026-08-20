import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  image?: string;
};

export default function TestimonialsSection() {
  const testimonials = TESTIMONIALS as unknown as Testimonial[];

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
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card reveal reveal-up">
              {/* Review image — top of card, bleeds edge-to-edge */}
              {t.image && (
                <div style={{ position: "relative", width: "calc(100% + 48px)", height: 180, margin: "-28px -24px 20px -24px", overflow: "hidden", borderRadius: "12px 12px 0 0", flexShrink: 0 }}>
                  <Image
                    src={t.image}
                    alt={`${t.name} review`}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </div>
              )}
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
