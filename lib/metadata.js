export const defaultMetadata = {
  title: "Ravi Suhag",
  description:
    "VP Engineering at Pixxel | Founder of Raystack Foundation | Expert in Data Platforms and Engineering Leadership",
  url: "https://ravisuhag.com",
  metadataBase: new URL("https://ravisuhag.com"),
  type: "website",
  keywords: [
    "engineering leadership",
    "data platforms",
    "software engineering",
    "tech consulting",
    "open source",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravisuhag.com",
    siteName: "Ravi Suhag",
    images: [
      {
        url: "https://ravisuhag.com/ravi_suhag_full.png",
        width: 800,
        height: 600,
        alt: "Ravi Suhag",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Suhag",
    description: "VP Engineering at Pixxel | Founder of Raystack Foundation",
    images: ["https://ravisuhag.com/ravi_suhag_full.png"],
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
  alternates: {
    canonical: "https://ravisuhag.com",
  },
};

export const generateMetadata = (overrides = {}) => {
  return {
    ...defaultMetadata,
    ...overrides,
  };
};

export const pageMetadata = {
  home: generateMetadata({
    title: "Ravi Suhag",
    description:
      "VP Engineering at Pixxel, Founder of Raystack Foundation. Experienced in building large-scale data platforms and engineering leadership.",
  }),
  work: generateMetadata({
    title: "Ravi Suhag – Work",
    description:
      "Leadership experience at Pixxel, Gojek, and Harvard University. Expertise in data platforms, engineering leadership, and open source development.",
  }),
  posts: generateMetadata({
    title: "Ravi Suhag – Writing",
    description:
      "Technical articles and insights on engineering leadership, data platforms, and software development best practices by Ravi Suhag",
  }),
  talks: generateMetadata({
    title: "Ravi Suhag – Talks",
    description: "Conference talks and presentations by Ravi Suhag",
  }),
  contact: generateMetadata({
    title: "Ravi Suhag – Contact",
    description: "Get in touch with Ravi Suhag",
  }),
  resume: generateMetadata({
    title: "Ravi Suhag – Resume",
    description: "Professional resume of Ravi Suhag",
  }),
};
