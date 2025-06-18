export const defaultMetadata = {
  title: "Ravi Suhag",
  description: "Ravi Suhag's personal homepage",
  url: "https://ravisuhag.com",
  type: "website",
  images: [
    {
      url: "https://ravisuhag.com/ravi_suhag_full.png",
      width: 800,
      height: 600,
      alt: "Ravi Suhag",
    },
  ],
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
    description: "Ravi Suhag's personal homepage - Crafting data experiences",
  }),
  work: generateMetadata({
    title: "Ravi Suhag – Work",
    description: "Professional experience and career highlights of Ravi Suhag",
  }),
  posts: generateMetadata({
    title: "Ravi Suhag – Writing",
    description: "Blog posts and articles by Ravi Suhag",
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
