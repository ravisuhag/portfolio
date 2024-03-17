import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
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

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    markup: { __html: contentHtml },
    ...matterResult.data
  }
}
