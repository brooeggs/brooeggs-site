import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/facebook", "/instagram", "/youtube"],
      },
      // Block AI training crawlers
      { userAgent: "GPTBot",    disallow: "/" },
      { userAgent: "CCBot",     disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
    ],
    sitemap: "https://brooeggs.in/sitemap.xml",
  };
}
