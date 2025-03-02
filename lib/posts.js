import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@shikijs/rehype";
import data from "@/data/posts.json";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostTitle(id) {
  return data[id].title;
}

export function getAllPostList() {
  const list = [];
  Object.entries(data).forEach(([key, value]) => {
    value.link = "/posts/" + key;
    list.push(value);
  });
  return list;
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${data[id].file}.md`);

  const fileContents = await fs.readFile(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, { themes: { light: "light-plus", dark: "vitesse-dark" } })
    .use(rehypeStringify)
    .process(matterResult.content);

  return {
    id,
    markup: { __html: content.toString() },
    ...matterResult.data,
  };
}
