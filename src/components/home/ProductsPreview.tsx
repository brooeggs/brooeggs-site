import Link from "next/link";
import Image from "next/image";

const products = [
  {
    img: null as string | null,           // ← replace null with image path when ready
    count: "6",
    unit: "Eggs",
    name: "Retail Pack — 6 Eggs",
    desc: "Ideal for individuals and small families. Fresh, sealed, and ready to cook the moment they arrive at your door.",
    features: ["6 premium country eggs", "Hygiene-sealed pack", "Same-day fresh"],
    cta: "View Details",
    ctaClass: "btn-outline-gold",
    featured: false,
    badge: null as string | null,
  },
  {
    img: null as string | null,           // ← replace null with image path when ready
    count: "30",
    unit: "Eggs Tray",
    name: "Standard Tray — 30 Eggs",
    desc: "Our bestselling tray — the perfect balance of quantity and value for households, small restaurants, and weekly buyers.",
    features: ["30 graded country eggs", "Classic egg tray", "Graded & sorted"],
    cta: "View Details",
    ctaClass: "btn-gold",
    featured: true,
    badge: "Most Popular" as string | null,
  },
  {
    img: null as string | null,           // ← replace null with image path when ready
    count: "180",
    unit: "Eggs · 6 Trays",
    name: "Bulk Case — 180 Eggs",
    desc: "Six full trays in a reinforced box. Designed for restaurants, caterers, hotels, and bulk distributors.",
    features: ["6 × 30-egg trays", "Best price per egg", "Priority delivery"],
    cta: "Request Quote",
    ctaClass: "btn-outline-gold",
    featured: false,
    badge: null as string | null,
  },
];

export default function ProductsPreview() {
  return (
    <section className="sec-pad" style={{ background: "#F5F0E4" }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">Fresh From the Farm</div>
          <h2 className="section-title">Country Chicken <strong>Eggs</strong></h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Naturally raised, nutritiously superior, and delivered with care — available in sizes to suit every need.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <div key={i} className={`product-card reveal reveal-up${p.featured ? " featured" : ""}`}>

              {/* Image / Placeholder area */}
              <div className="product-img-placeholder" style={{ position: "relative", overflow: "hidden" }}>
                {p.img ? (
                  /* Real image — shown once path is set */
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                ) : (
                  /* Clean count placeholder — shown until image is provided */
                  <div className="prod-count-placeholder">
                    <span className="prod-count-num">{p.count}</span>
                    <span className="prod-count-unit">{p.unit}</span>
                  </div>
                )}
                {p.badge && <span className="product-badge">{p.badge}</span>}
              </div>
              <div className="product-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <ul className="product-features">
                  {p.features.map((f, fi) => (
                    <li key={fi}>
                      <span className="product-feat-dot" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/products" className={`btn ${p.ctaClass} btn-sm`}>
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 48 }}>
          <Link href="/products" className="btn btn-gold">
            <span aria-hidden="true">🥚</span> See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
