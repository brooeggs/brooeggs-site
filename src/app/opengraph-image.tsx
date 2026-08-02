import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Broog's — Premium Country Chicken Eggs, Tamil Nadu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2C1A0A 0%, #4A2E10 50%, #C8851A 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Background pattern dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #C8851A, #F0C040, #C8851A)",
          }}
        />

        {/* Card container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1.5px solid rgba(200,133,26,0.4)",
            borderRadius: 24,
            padding: "56px 80px",
            gap: 16,
          }}
        >
          {/* Egg emoji */}
          <div style={{ fontSize: 96, lineHeight: 1, marginBottom: 8 }}>🥚</div>

          {/* Brand name */}
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#F0C040",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Broog&apos;s
          </div>

          {/* Divider */}
          <div
            style={{
              width: 120,
              height: 3,
              background: "linear-gradient(90deg, transparent, #C8851A, transparent)",
              borderRadius: 2,
              margin: "4px 0",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.88)",
              letterSpacing: "0.5px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
            }}
          >
            Fresh Eggs For You, Everyday!
          </div>

          {/* Sub-line */}
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.55)",
              fontFamily: "Arial, sans-serif",
              marginTop: 4,
            }}
          >
            Premium Country Chicken Eggs · Tamil Nadu · brooeggs.com
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #C8851A, #F0C040, #C8851A)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
