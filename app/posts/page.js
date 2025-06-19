import Shell from "../../components/shell";
import List from "../../components/list";
import { getAllPostList } from "../../lib/posts";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata.posts;

export default async function Posts() {
  const list = await getAllPostList();
  return (
    <Shell>
      <h1>Posts</h1>
      {/* <p>
        I indulge in writing, mostly about my work to share my understanding and
        thoughts, highlighting the process and choices that went into a
        particular project. The remaining are thought-centric about my
        perspective and opinions.
      </p> */}
      <List contents={list} />
    </Shell>
  );
}
