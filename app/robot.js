export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/*?*", // Prevent crawling of search pages or any potential duplicate content
      ],
    },
    sitemap: "https://ravisuhag.com/sitemap.xml",
    host: "https://ravisuhag.com",
  };
}
