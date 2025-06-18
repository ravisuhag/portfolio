export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: ["/api/log/*", "/api/og/*"],
		},
		// sitemap: "https://ravisuhag.com/sitemap.xml",
	};
}
