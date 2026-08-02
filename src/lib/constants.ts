export const SITE = {
  name: "Brooeggs",
  tagline: "Fresh Eggs For You, Everyday!",
  description: "Brooeggs — Premium Country Chicken Eggs. Farm fresh, free-range, delivered daily across Tamil Nadu.",
  phone: "+919865643953",
  phoneFormatted: "+91 9865 643953",
  email: "support@brooeggs.com",
  supportEmail: "support@brooeggs.com",
  whatsapp: "919865643953",
  whatsappUrl: "https://wa.me/919865643953",
  location: "Tamil Nadu, India",
  hours: "Mon–Sat: 6 AM – 8 PM",
  hoursDetailed: "Monday – Saturday: 6:00 AM – 8:00 PM / Sunday: 7:00 AM – 12:00 PM",
  founded: "2025",
  domain: "brooeggs.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const FEATURES_STRIP = [
  { icon: "egg", title: "Farm Fresh Daily", desc: "Collected every morning" },
  { icon: "leaf", title: "100% Natural Feed", desc: "No hormones or antibiotics" },
  { icon: "shield", title: "Quality Certified", desc: "Inspected before packing" },
  { icon: "truck", title: "Reliable Delivery", desc: "Same-day dispatch" },
  { icon: "headphones", title: "24/7 Support", desc: "Always here for you" },
] as const;

export const STATS = [
  { icon: "users", value: 5000, suffix: "+", label: "Happy Customers" },
  { icon: "egg", value: 100000, suffix: "+", label: "Eggs Delivered" },
  { icon: "store", value: 200, suffix: "+", label: "Partner Stores" },
  { icon: "star", value: 98, suffix: "%", label: "Satisfaction Rate" },
] as const;

export const PRODUCTS = [
  {
    name: "Starter Pack — 6 Eggs",
    desc: "Perfect for individuals, couples, or anyone trying Brooeggs for the first time.",
    emoji: "🥚",
    features: ["6 premium country eggs", "Hygiene-sealed pack", "Great for first-time buyers", "Same-day fresh"],
    cta: "Order Now",
    featured: false,
    badge: undefined,
  },
  {
    name: "Family Pack — 12 Eggs",
    desc: "A handy dozen for small families and weekly home use.",
    emoji: "🐣",
    features: ["12 premium country eggs", "Stackable carton", "Ideal for weekly buyers", "Graded & sorted"],
    cta: "Order Now",
    featured: false,
    badge: undefined,
  },
  {
    name: "Standard Tray — 30 Eggs",
    desc: "Our bestselling tray. The perfect balance of quantity and value.",
    emoji: "🍳",
    badge: "Best Seller",
    features: ["30 graded country eggs", "Classic pulp tray", "Best household value", "Priority dispatch"],
    cta: "Order Now",
    featured: true,
  },
  {
    name: "Half Case — 90 Eggs",
    desc: "Three trays in a box. For growing families and small cafes.",
    emoji: "📦",
    features: ["3 × 30-egg trays", "Reinforced box", "Better price per egg", "Free delivery eligible"],
    cta: "Order Now",
    featured: false,
    badge: undefined,
  },
  {
    name: "Bulk Case — 180 Eggs",
    desc: "Six full trays in a reinforced case. The commercial standard.",
    emoji: "🏭",
    features: ["6 × 30-egg trays", "Best price per egg", "Priority delivery", "Invoice & receipt provided"],
    cta: "Get Quote",
    featured: false,
    badge: undefined,
  },
  {
    name: "Wholesale / Custom",
    desc: "500+ eggs per order? We handle large-scale supply.",
    emoji: "🤝",
    features: ["500+ eggs per order", "Custom packaging options", "Dedicated account manager", "Flexible payment terms"],
    cta: "Enquire Now",
    featured: false,
    badge: undefined,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "The yolks are a stunning deep orange — you can immediately see these are genuine free-range eggs. Taste is incomparable to anything from a supermarket.",
    name: "Ramya Suresh",
    role: "Home Customer, Chennai",
    avatar: "R",
  },
  {
    quote: "We switched our hotel kitchen to Brooeggs six months ago. Our breakfast guests notice the difference immediately — richer taste, better texture. Highly recommended.",
    name: "Karthik Menon",
    role: "Hotel Owner, Coimbatore",
    avatar: "K",
  },
  {
    quote: "Delivery is always on time, the packaging is neat and the quality is rock-solid every single batch. As a nutritionist I'm confident recommending Brooeggs to all my clients.",
    name: "Priya Anand",
    role: "Nutritionist, Madurai",
    avatar: "P",
  },
] as const;

export const FAQ_HOME = [
  { q: "What makes country chicken eggs different?", a: "Country chicken eggs come from indigenous free-range breeds eating natural diets. They have richer, darker yolks with significantly higher omega-3, vitamin D, and protein compared to battery-farm commercial eggs." },
  { q: "How fresh are the eggs when delivered?", a: "We collect eggs every morning and dispatch them the same day. Most customers receive their eggs within 12–24 hours of collection — as fresh as it gets without owning a farm yourself." },
  { q: "Do you supply restaurants and hotels?", a: "Yes. We work with restaurants, hotels, bakeries, cloud kitchens, and retail distributors. Contact us to discuss custom volumes, pricing, and delivery schedules tailored to your business." },
  { q: "Are the eggs hormone and antibiotic free?", a: "Absolutely. Our hens are raised with zero artificial growth hormones and no antibiotic treatments. They live in stress-free, natural environments — healthy birds produce healthy eggs." },
  { q: "Which areas do you deliver to?", a: "We currently deliver across Tamil Nadu and are expanding steadily. WhatsApp or call us at +91 9865 643953 to confirm delivery availability for your specific location." },
] as const;

export const FAQ_CONTACT = [
  { q: "How do I place an order?", a: "Call or WhatsApp us at +91 9865 643953, or fill in the contact form. We'll confirm your order, discuss delivery details, and arrange dispatch the same day if ordered before 10 AM." },
  { q: "Do you offer bulk or wholesale pricing?", a: "Yes — we offer special pricing for restaurants, hotels, caterers, and retail shops. Contact us with your volume requirements and we'll prepare a custom quote within 24 hours." },
  { q: "What are your delivery timings?", a: "We dispatch same-day for orders placed before 10 AM. Afternoon orders are delivered the following morning. Exact timing depends on your location. WhatsApp us for real-time updates." },
  { q: "Do you accept returns or replacements?", a: "If any eggs arrive cracked or unsatisfactory, contact us within 24 hours with a photo and we'll arrange a replacement or credit it in your next order — no questions asked." },
  { q: "What areas do you currently deliver to?", a: "We currently deliver across Tamil Nadu and are expanding steadily into neighbouring states. WhatsApp us to quickly confirm delivery availability in your specific area." },
] as const;

export const SOCIAL_LINKS = {
  facebook: "/facebook",
  instagram: "/instagram",
  youtube: "/youtube",
  whatsapp: "https://wa.me/919865643953",
} as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact Us" },
  ],
  productLinks: [
    { href: "/products", label: "Country Eggs" },
    { href: "/products", label: "Retail Packs" },
    { href: "/products", label: "Tray — 30 Eggs" },
    { href: "/products", label: "Bulk / Wholesale" },
  ],
} as const;
