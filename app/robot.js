export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/api/log/*",
    },
    // sitemap: "https://ravisuhag.com/sitemap.xml",
  };
}
