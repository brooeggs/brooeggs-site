import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import LoadingScreen from "@/components/ui/LoadingScreen";
import MobileCallBar from "@/components/ui/MobileCallBar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ToastProvider } from "@/components/ui/Toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["700", "800", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D4A017",
};

export const metadata: Metadata = {
  title: {
    default: "Brooeggs — Fresh Eggs For You, Everyday!",
    template: "%s | Brooeggs",
  },
  description:
    "Brooeggs (also known as Broo Eggs) — Premium Country Chicken Eggs. Farm fresh, free-range, delivered daily across Tamil Nadu.",
  keywords: [
    "brooeggs",
    "broo eggs",
    "Brooeggs",
    "broogs",
    "broo eggs Tamil Nadu",
    "country eggs",
    "country chicken eggs",
    "nattu muttai",
    "nattu kozhi muttai",
    "farm fresh eggs",
    "free range eggs",
    "Tamil Nadu eggs",
    "organic eggs",
    "desi eggs",
    "free range country eggs Tamil Nadu",
    "buy eggs online Tamil Nadu",
    "fresh eggs delivery Tamil Nadu",
    "egg delivery Tamil Nadu",
    "brooeggs.in",
  ],
  metadataBase: new URL("https://brooeggs.in"),
  alternates: {
    canonical: "https://brooeggs.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Brooeggs",
    url: "https://brooeggs.in",
    title: "Brooeggs — Fresh Eggs For You, Everyday!",
    description:
      "Broo Eggs (Brooeggs) — Premium Country Chicken Eggs. Farm fresh, free-range, delivered daily across Tamil Nadu.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Brooeggs — Premium Country Chicken Eggs, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brooeggs — Fresh Eggs For You, Everyday!",
    description:
      "Broo Eggs (Brooeggs) — Premium Country Chicken Eggs. Farm fresh, free-range, delivered daily across Tamil Nadu.",
    images: [{ url: "/opengraph-image", alt: "Brooeggs — Premium Country Chicken Eggs, Tamil Nadu" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/images/logo/logo.svg",
    apple: "/images/logo/logo.svg",
  },
  verification: {
    google: "JuhCIlBr6pOuh92HfJ1tRHBZrPIuURc8zS2YkcseFjI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://brooeggs.in/#organization",
        name: "Brooeggs",
        alternateName: ["Broo Eggs", "Brooeggs", "Broogs", "Broo Eggs Tamil Nadu"],
        url: "https://brooeggs.in",
        logo: {
          "@type": "ImageObject",
          url: "https://brooeggs.in/images/logo/logo.svg",
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9865643953",
          contactType: "customer service",
          availableLanguage: ["English", "Tamil"],
          areaServed: "IN",
        },
        sameAs: [
          "https://www.facebook.com/brooeggs",
          "https://www.instagram.com/brooeggs",
          "https://www.youtube.com/@brooeggs",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://brooeggs.in/#localbusiness",
        name: "Brooeggs — Premium Country Eggs",
        alternateName: ["Broo Eggs", "Brooeggs"],
        description:
          "Brooeggs (Broo Eggs) supplies premium free-range country chicken eggs across Tamil Nadu. Farm fresh, collected daily, delivered to homes, restaurants, and businesses.",
        url: "https://brooeggs.in",
        telephone: "+91-9865643953",
        email: "support@brooeggs.in",
        image: "https://brooeggs.in/opengraph-image",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 11.0168,
          longitude: 77.0266,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "06:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "07:00",
            closes: "12:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Country Chicken Eggs",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Starter Pack — 6 Country Eggs" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Family Pack — 12 Country Eggs" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Standard Tray — 30 Country Eggs" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Half Case — 90 Country Eggs" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bulk Case — 180 Country Eggs" } },
          ],
        },
        areaServed: {
          "@type": "State",
          name: "Tamil Nadu",
          containedInPlace: { "@type": "Country", name: "India" },
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://brooeggs.in/#website",
        url: "https://brooeggs.in",
        name: "Brooeggs",
        description: "Premium Country Chicken Eggs delivered across Tamil Nadu",
        publisher: { "@id": "https://brooeggs.in/#organization" },
      },
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ToastProvider>
          <LoadingScreen />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppFloat />
          <MobileCallBar />
          <ScrollReveal />
        </ToastProvider>
      </body>
    </html>
  );
}
