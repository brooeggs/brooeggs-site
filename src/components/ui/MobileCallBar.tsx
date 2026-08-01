import { SITE } from "@/lib/constants";

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar" aria-label="Call to order">
      <a href={`tel:${SITE.phone}`}>
        📞 Call to Order: {SITE.phoneFormatted}
      </a>
    </div>
  );
}
