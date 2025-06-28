import Shell from "@/components/shell";
import { getAllPostList, getPostData } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { generatePostMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPostData(id);
  return generatePostMetadata(post, id);
}

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPostData(id);
  return (
    <Shell>
      <div className="row">
        <div className="column">
          {/* <div className="post__date">{formatDate(post.date)}</div> */}
          <h1>{post.title}</h1>

          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted markdown content */}
          <div dangerouslySetInnerHTML={post.markup} />
        </div>
      </div>
    </Shell>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostList();
  return posts.map((post) => ({ id: post.id }));
}
