"use client"

import Image from "next/image"
import { useState } from "react"

const breeds = [
  {
    id: "peruvidai-hen",
    tamil: "பேருவிடை கோழி",
    english: "Peruvidai Hen",
    label: "Peruvidai — Hen",
    image: "/images/Peru_vedaii_Hen.jpeg",
    tags: ["🥚 Large Eggs", "🟠 Deep Orange Yolk", "💪 High Protein"],
    shortDesc: "The female Peruvidai — a prized indigenous Tamil Nadu breed, known for large-sized eggs with a rich, deep-orange yolk.",
    detail: [
      "Peruvidai (பேருவிடை) is one of Tamil Nadu's most recognised indigenous chicken ecotypes, predominantly found in the western districts including Coimbatore, Erode, and Salem.",
      "The hens are medium-to-large bodied and lay eggs averaging 45–50 g — noticeably larger than typical country chicken eggs. Studies by TANUVAS (Tamil Nadu Veterinary and Animal Sciences University) confirm their eggs have a deep-orange yolk colour, indicating high carotenoid and beta-carotene content.",
      "Peruvidai hens are hardy free-range birds adapted to the hot, dry Tamil Nadu climate. They forage naturally on grains, greens, and insects, which directly contributes to the superior nutritional profile — higher omega-3, vitamin D, and protein compared to commercial eggs.",
      "Their eggs are prized in local markets for authentic flavour and are a cornerstone of traditional Tamil cooking."
    ]
  },
  {
    id: "peruvidai-rooster",
    tamil: "பேருவிடை சேவல்",
    english: "Peruvidai Rooster",
    label: "Peruvidai — Rooster",
    image: "/images/Peru_vedaii_Rooster.jpeg",
    tags: ["💪 Heavy Build", "🌿 Free-Range", "🏆 Indigenous Breed"],
    shortDesc: "The male Peruvidai — a powerful, heavy-bodied rooster that defines this prized Tamil Nadu indigenous breed.",
    detail: [
      "The Peruvidai rooster (சேவல்) is one of the heaviest indigenous chicken breeds in Tamil Nadu — adult males typically weigh between 4 to 6 kg, giving the breed its name: 'Peru' (பேரு) meaning large/big, 'Vidai' (விடை) meaning bull or stud male.",
      "Historically kept for both egg production and as fighting cocks, Peruvidai roosters are known for their muscular build, upright posture, and assertive temperament. Their genetics directly influence the egg quality of the hens — the stronger the rooster's lineage, the more nutrient-rich the eggs.",
      "Genetic diversity studies (Veterinary Paper Journal, 2024) using microsatellite markers have documented that Peruvidai has a distinct genetic profile from other Tamil Nadu breeds, making it a valuable indigenous genetic resource.",
      "At Brooeggs, we maintain healthy Peruvidai roosters on our partner farms to ensure authentic, pure-breed lineage in every egg we deliver."
    ]
  },
  {
    id: "siruvidai",
    tamil: "சிறுவிடை கோழி",
    english: "Siruvidai",
    label: "Siruvidai",
    imagePair: ["/images/Siru_vedaii_Hen.jpeg", "/images/Siru_vedaii_Rooster.jpeg"],
    tags: ["🥚 Small Dense Eggs", "🐟 Omega-3 Rich", "🌿 Nutrient-Dense"],
    shortDesc: "Tamil Nadu's compact indigenous breed — smaller eggs packed with higher omega-3 and superior nutritional density.",
    detail: [
      "Siruvidai (சிறுவிடை) is an indigenous chicken ecotype native to the Cauvery Delta zone of Tamil Nadu — primarily found in Tiruvannamalai, Dharmapuri, Ariyalur, and Perambalur districts. 'Siru' (சிறு) means small, reflecting the breed's compact body and smaller egg size.",
      "Research published by TANUVAS and ICAR confirms that Siruvidai eggs, while smaller in size, are nutritionally superior in key parameters. They have a higher yolk-to-albumen ratio and concentrated levels of omega-3 fatty acids, making them ideal for health-conscious consumers.",
      "Siruvidai chickens are exceptionally well-adapted to semi-arid conditions and thrive in backyard and free-range farming systems. Their natural foraging behaviour — feeding on insects, seeds, and greens — is the primary driver of their egg's rich nutritional profile.",
      "A 2024 study on egg quality traits of indigenous Tamil Nadu breeds confirmed that Siruvidai eggs have excellent internal quality scores (Haugh Unit), indicating superior freshness and protein quality compared to commercial eggs."
    ]
  },
  {
    id: "sonali",
    tamil: "சோனாலி கோழி",
    english: "Sonali",
    label: "Sonali",
    image: "/images/Sonali_Breads.jpeg",
    tags: ["🥚 Medium Eggs", "⭐ Premium Cross-Breed", "☀️ Vitamin D Rich"],
    shortDesc: "A premium Rhode Island Red × Fayoumi cross-breed — medium-sized golden eggs with outstanding nutritional balance.",
    detail: [
      "Sonali (சோனாலி — meaning 'golden') is a cross-breed of Rhode Island Red roosters and Fayoumi hens, originally developed between 1996–2000. In India, the ICAR-developed CARI Sonali variant is widely recognised as one of the best improved country chicken breeds for backyard and free-range production.",
      "Sonali eggs are medium-sized with a distinctly golden-to-orange yolk. ICAR research confirms that CARI Sonali eggs are nutritionally comparable to pure indigenous breeds — with notably higher vitamin D, lower cholesterol than commercial broiler eggs, and superior serum lipid profiles in the birds themselves.",
      "Sonali birds are hardy, disease-resistant, and adapt well to Tamil Nadu's climate. They require less intensive care than commercial layers, making them ideal for sustainable, ethical farming — the exact model Brooeggs follows on our partner farms.",
      "Their eggs strike the ideal balance between the rich flavour of pure nattu kozhi and the consistent sizing preferred by households and restaurants — making Sonali one of our most popular egg varieties among regular customers."
    ]
  }
]

export default function BreedCategories() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const active = breeds.find(b => b.id === activeId) ?? null

  return (
    <section className="sec-pad" style={{ background: "#fff" }}>
      <div className="container">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">நமது கோழி இனங்கள்</div>
          <h2 className="section-title">Egg <strong>Categories</strong></h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            We source from three distinct indigenous Tamil Nadu breeds — each with its own history, character, and nutritional profile.
            <span style={{ display: "block", marginTop: 6, fontSize: ".85rem", color: "#9E8E75" }}>
              Click any card to learn more about the breed.
            </span>
          </p>
        </div>

        {/* 4-card grid */}
        <div className="breed-categories-grid">
          {breeds.map((b) => (
            <button
              key={b.id}
              className={`breed-card${activeId === b.id ? " breed-card--active" : ""}`}
              onClick={() => setActiveId(activeId === b.id ? null : b.id)}
              aria-expanded={activeId === b.id}
              aria-label={`Learn about ${b.english}`}
            >
              {/* Image area */}
              <div className="breed-card-img-wrap">
                {"imagePair" in b && b.imagePair ? (
                  <>
                    <Image src={b.imagePair[0]} alt={`${b.english} Hen`}  fill
                      className="object-cover breed-img breed-img-left"
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 20vw" />
                    <Image src={b.imagePair[1]} alt={`${b.english} Rooster`} fill
                      className="object-cover breed-img breed-img-right"
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 20vw" />
                  </>
                ) : (
                  <Image src={(b as {image:string}).image} alt={b.english} fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                )}
                <div className="breed-img-overlay" />
                <span className="breed-card-label">{b.label}</span>

                {/* Click hint */}
                <span className="breed-click-hint" aria-hidden="true">
                  {activeId === b.id ? "✕ Close" : "👆 Tap to learn more"}
                </span>
              </div>

              {/* Card body */}
              <div className="breed-card-body">
                <h3>
                  {b.tamil}
                  <span className="breed-en">{b.english}</span>
                </h3>
                <p className="breed-short-desc">{b.shortDesc}</p>
                <div className="breed-tags">
                  {b.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>

              {/* Expand icon */}
              <div className="breed-card-expand-icon" aria-hidden="true">
                {activeId === b.id ? "▲" : "▼"}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel — slides open below the grid when a card is clicked */}
        {active && (
          <div className="breed-detail-panel reveal-up" key={active.id}>
            <div className="breed-detail-header">
              <div className="breed-detail-title-wrap">
                <span className="breed-detail-tag">{active.label}</span>
                <h3>{active.tamil} <span className="breed-en">{active.english}</span></h3>
              </div>
              <button
                className="breed-detail-close"
                onClick={() => setActiveId(null)}
                aria-label="Close detail panel"
              >✕</button>
            </div>
            <div className="breed-detail-body">
              {active.detail.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="breed-tags" style={{ marginTop: 16 }}>
              {active.tags.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
