import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Broog's — Fresh Eggs For You, Everyday!",
    template: "%s | Broog's",
  },
  description: "Broog's — Premium Country Chicken Eggs. Farm fresh, free-range, delivered daily across Tamil Nadu.",
  keywords: ["country eggs", "farm fresh eggs", "free range eggs", "Tamil Nadu eggs", "broog's", "organic eggs", "country chicken eggs"],
  metadataBase: new URL("https://brooeggs.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Broog's",
    title: "Broog's — Fresh Eggs For You, Everyday!",
    description: "Premium Country Chicken Eggs. Farm fresh, free-range, delivered daily across Tamil Nadu.",
    images: ["/images/og/og-default.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Broog's — Fresh Eggs For You, Everyday!",
    description: "Premium Country Chicken Eggs. Farm fresh, free-range, delivered daily across Tamil Nadu.",
    images: ["/images/og/og-default.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`} suppressHydrationWarning>
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
