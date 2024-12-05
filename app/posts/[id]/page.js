import Header from '@/components/header';
import { getPostData } from '@/lib/posts'
import data from '@/data/posts.json'

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPostData(id);
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPostData(id);
  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="row">
          <div className="column">
            {post.date}
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={post.markup} />
          </div>
        </div>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = Object.keys(data).map(key => ({ id: key }));
  return posts
}