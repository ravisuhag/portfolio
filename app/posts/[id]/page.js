import PageLayout from "@/components/page-layout";
import { getAllPostList, getPostData } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPostData(id);
  const url = `https://ravisuhag.com/posts/${id}`;
  const imageUrl = `https://ravisuhag.com/api/og?id=${id}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      site_name: "Ravi Suhag",
      url,
      type: "article",
      article: {
        publishedTime: post.date,
        authors: ["https://ravisuhag.com"],
      },
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      site: "@ravi_suhag",
      creator: "@ravi_suhag",
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: !post.draft,
      follow: !post.draft,
    },
    additionalMetaTags: [
      {
        name: "author",
        content: "Ravi Suhag",
      },
      // {
      //   name: "keywords",
      //   content: post.keywords.join(", "),
      // },
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: imageUrl,
      url,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: "Ravi Suhag",
        url: "https://ravisuhag.com",
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
            item: "https://ravisuhag.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://ravisuhag.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    },
  };
}

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPostData(id);
  return (
    <PageLayout>
      <div className="row">
        <div className="column">
          {formatDate(post.date)}
          <h1>{post.title}</h1>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted markdown content */}
          <div dangerouslySetInnerHTML={post.markup} />
        </div>
      </div>
    </PageLayout>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostList();
  return posts.map((post) => ({ id: post.id }));
}
