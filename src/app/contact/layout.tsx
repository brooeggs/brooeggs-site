import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Brooeggs (Broo Eggs) — Place orders, wholesale enquiries, delivery questions. Call or WhatsApp +91 9865 643953. Serving Tamil Nadu daily.",
  keywords: [
    "contact brooeggs",
    "contact broo eggs",
    "order country eggs Tamil Nadu",
    "egg delivery order",
    "wholesale eggs enquiry Tamil Nadu",
    "Brooeggs phone number",
    "nattu muttai order",
    "farm fresh eggs contact",
    "egg supplier contact Tamil Nadu",
  ],
  alternates: { canonical: "https://brooeggs.com/contact" },
  openGraph: {
    title: "Contact Brooeggs — Order Country Eggs | Tamil Nadu",
    description:
      "Broo Eggs (Brooeggs) — Order farm-fresh country chicken eggs by call or WhatsApp. Wholesale & retail available across Tamil Nadu.",
    url: "https://brooeggs.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
