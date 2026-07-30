import { SITE } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappUrl}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}
