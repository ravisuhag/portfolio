import Shell from "../../components/shell";
import List from "../../components/list";
import { getAllPostList } from "../../lib/posts";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata.posts;

export default async function Posts() {
  const list = await getAllPostList();
  return (
    <Shell>
      <p>
        Every now and then, I write to share ideas and perspectives I find worth
        holding on to. These essays reflect what I've come to believe about
        systems, leadership, and the craft of building things that last. They'll
        continue to grow as my thinking does.
      </p>
      <List contents={list} />
    </Shell>
  );
}
