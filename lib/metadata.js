export const siteConfig = {
  baseUrl: "https://ravisuhag.com",
  author: "Ravi Suhag",
  twitter: "@ravi_suhag",
  title: "Ravi Suhag",
  description:
    "VP Engineering at Pixxel | Founder of Raystack Foundation | Expert in Data Platforms and Engineering Leadership",
};

export const defaultImageDimensions = {
  width: 800,
  height: 600,
};

export const defaultSocialMetadata = {
  card: "summary_large_image",
  site: siteConfig.twitter,
  creator: siteConfig.twitter,
};

export const defaultMetadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.baseUrl,
  metadataBase: new URL(siteConfig.baseUrl),
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
    url: siteConfig.baseUrl,
    siteName: siteConfig.title,
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
    canonical: siteConfig.baseUrl,
  },
};

export const generateMetadata = (overrides = {}) => {
  return {
    ...defaultMetadata,
    ...overrides,
  };
};

export const generateImageMetadata = (
  imageUrl,
  alt,
  dimensions = defaultImageDimensions,
) => ({
  url: imageUrl,
  width: dimensions.width,
  height: dimensions.height,
  alt: alt,
});

export const generatePostStructuredData = (post, url, imageUrl) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  image: imageUrl,
  url,
  datePublished: post.date,
  author: {
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.baseUrl,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  },
});

export const generatePostMetadata = (post, id) => {
  const url = `${siteConfig.baseUrl}/posts/${id}`;
  const imageUrl = `${siteConfig.baseUrl}/api/og?id=${id}`;

  return generateMetadata({
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      site_name: siteConfig.title,
      url,
      type: "article",
      article: {
        publishedTime: post.date,
        authors: [siteConfig.baseUrl],
      },
      images: [generateImageMetadata(imageUrl, post.title)],
    },
    twitter: {
      ...defaultSocialMetadata,
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
    alternates: { canonical: url },
    robots: {
      index: !post.draft,
      follow: !post.draft,
    },
    additionalMetaTags: [
      {
        name: "author",
        content: siteConfig.author,
      },
    ],
    structuredData: generatePostStructuredData(post, url, imageUrl),
  });
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
