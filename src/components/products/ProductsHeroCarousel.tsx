"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// All 59 farm images
const IMAGES = Array.from({ length: 59 }, (_, i) => {
  const n = String(i + 1).padStart(3, "0")
  return `/images/img_${n}.jpeg`
})

export default function ProductsHeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTransitioning(false)
    }, 400)
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % IMAGES.length)
    }, 3000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, transitioning])

  const prev = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    goTo((current - 1 + IMAGES.length) % IMAGES.length)
  }

  const next = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    goTo((current + 1) % IMAGES.length)
  }

  return (
    <section className="page-hero products-carousel-hero" aria-label="Products hero image carousel">
      {/* Carousel images — crossfade */}
      <div className="pch-track" aria-hidden="true">
        {/* Preload prev + current + next for smooth transitions */}
        {[-1, 0, 1].map((offset) => {
          const idx = (current + offset + IMAGES.length) % IMAGES.length
          return (
            <div
              key={idx}
              className="pch-slide"
              style={{
                opacity: offset === 0 ? (transitioning ? 0 : 0.38) : 0,
                transition: "opacity 0.8s ease",
                position: "absolute",
                inset: 0,
              }}
            >
              <Image
                src={IMAGES[idx]}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                priority={offset === 0}
              />
            </div>
          )
        })}
      </div>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="page-hero-inner">
          <div className="section-eyebrow" style={{ marginTop: 14 }}>What We Sell</div>
          <h1>Our <em>Products</em></h1>
          <p>Farm-fresh country eggs — available in sizes to suit every home, business, and budget.</p>

          {/* Carousel controls */}
          <div className="pch-controls" aria-label="Carousel controls">
            <button className="pch-btn" onClick={prev} aria-label="Previous image">‹</button>
            <span className="pch-counter" aria-live="polite">{current + 1} / {IMAGES.length}</span>
            <button className="pch-btn" onClick={next} aria-label="Next image">›</button>
          </div>

          {/* Dot strip — shows 7 dots max centered on current */}
          <div className="pch-dots" role="tablist" aria-label="Image navigation">
            {(() => {
              const total = IMAGES.length
              const half = 3
              let start = Math.max(0, current - half)
              let end = Math.min(total - 1, start + 6)
              if (end - start < 6) start = Math.max(0, end - 6)
              return Array.from({ length: end - start + 1 }, (_, i) => {
                const di = start + i
                return (
                  <button
                    key={di}
                    className={`pch-dot${di === current ? " active" : ""}`}
                    onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); goTo(di) }}
                    role="tab"
                    aria-selected={di === current}
                    aria-label={`Image ${di + 1}`}
                  />
                )
              })
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
