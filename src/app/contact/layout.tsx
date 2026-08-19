import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Order Country Eggs",
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
    "brooeggs whatsapp order",
  ],
  alternates: { canonical: "https://brooeggs.in/contact" },
  openGraph: {
    title: "Contact Brooeggs — Order Country Eggs | Tamil Nadu",
    description:
      "Broo Eggs (Brooeggs) — Order farm-fresh country chicken eggs by call or WhatsApp. Wholesale & retail available across Tamil Nadu.",
    url: "https://brooeggs.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const contactBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://brooeggs.in/contact#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",       item: { "@id": "https://brooeggs.in", name: "Home" } },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: { "@id": "https://brooeggs.in/contact", name: "Contact Us" } },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://brooeggs.in/contact#webpage",
    url: "https://brooeggs.in/contact",
    name: "Contact Brooeggs — Order Country Eggs",
    description:
      "Contact Brooeggs to place orders for farm-fresh country chicken eggs, wholesale enquiries, or delivery questions. Call or WhatsApp +91 9865 643953.",
    isPartOf: { "@id": "https://brooeggs.in/#website" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      {children}
    </>
  );
}
