import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkPrism from "remark-prism";
import data from '../data/posts.json'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPostList() {
  var list = []
  Object.entries(data).forEach(
    ([key, vaule]) => {
      vaule.link = '/posts/' + key
      list.push(vaule)
    }
  );
  return list
}

export function getAllPostIds() {
  var paths = []
  Object.entries(data).forEach(
    ([key]) => {
      paths.push({
        params: {
          id: key
        }
      })
    }
  );
  return paths
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${data[id].file}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)
  const content = await unified()
    .use(remarkParse)
    // .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(matterResult.content)

  return {
    id,
    markup: { __html: content.toString() },
    ...matterResult.data
  }
}
