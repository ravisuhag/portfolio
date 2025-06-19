"use client";

export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ravi Suhag",
    url: "https://ravisuhag.com",
    image: "https://ravisuhag.com/ravi_suhag_full.png",
    jobTitle: "VP Engineering",
    worksFor: {
      "@type": "Organization",
      name: "Pixxel",
      url: "https://www.pixxel.space",
    },
    alumniOf: [
      {
        "@type": "Organization",
        name: "Gojek",
        url: "https://www.gojek.com",
      },
      {
        "@type": "Organization",
        name: "Harvard University",
      },
    ],
    description:
      "VP Engineering at Pixxel, Founder of Raystack Foundation. Expert in data platforms and engineering leadership.",
    sameAs: [
      "https://github.com/ravisuhag",
      "https://linkedin.com/in/ravisuhag",
      "https://twitter.com/ravisuhag",
    ],
    knowsAbout: [
      "Engineering Leadership",
      "Data Platforms",
      "Software Architecture",
      "Open Source",
      "Tech Strategy",
    ],
  };

  return (
    <script
      type="application/ld+json"
      /* biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted markdown content */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ArticleSchema = ({ article }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: "Ravi Suhag",
      url: "https://ravisuhag.com",
    },
    datePublished: article.date,
    dateModified: article.lastModified || article.date,
    image: article.image || "https://ravisuhag.com/ravi_suhag_full.png",
    url: `https://ravisuhag.com/posts/${article.slug}`,
    wordCount: article.wordCount,
    articleBody: article.content,
    keywords: article.keywords?.join(", "),
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: "Ravi Suhag",
      url: "https://ravisuhag.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ravisuhag.com/posts/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      /* biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted markdown content */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ravi Suhag",
    url: "https://ravisuhag.com",
    description:
      "Personal website of Ravi Suhag - Engineering Leader & Data Platform Expert",
    author: {
      "@type": "Person",
      name: "Ravi Suhag",
    },
    publisher: {
      "@type": "Person",
      name: "Ravi Suhag",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ravisuhag.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    keywords: [
      "Engineering Leadership",
      "Data Platforms",
      "Software Architecture",
      "Tech Strategy",
      "Open Source",
    ],
  };
  return (
    <script
      type="application/ld+json"
      /* biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted markdown content */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
