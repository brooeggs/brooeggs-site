import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "About Broog's — Our Story & Mission | Country Eggs Tamil Nadu";
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
          background: "linear-gradient(135deg, #2C1A0A 0%, #4A2E10 60%, #C8851A 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 8,
            background: "linear-gradient(90deg, #C8851A, #F0C040, #C8851A)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            padding: "48px 80px",
          }}
        >
          <div style={{ fontSize: 80, lineHeight: 1 }}>🐓</div>
          <div style={{ fontSize: 22, color: "#C8851A", fontFamily: "Arial, sans-serif", letterSpacing: 4, textTransform: "uppercase" }}>
            Our Story
          </div>
          <div style={{ fontSize: 76, fontWeight: 900, color: "#F0C040", letterSpacing: "-2px", lineHeight: 1 }}>
            About Broog&apos;s
          </div>
          <div style={{ width: 100, height: 3, background: "linear-gradient(90deg, transparent, #C8851A, transparent)", borderRadius: 2 }} />
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.80)", fontFamily: "Arial, sans-serif", textAlign: "center", maxWidth: 700 }}>
            A passion for real food, ethical farming, and the people who make it possible — since 2025.
          </div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", fontFamily: "Arial, sans-serif", marginTop: 8 }}>
            brooeggs.com · Tamil Nadu, India
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 8,
            background: "linear-gradient(90deg, #C8851A, #F0C040, #C8851A)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
