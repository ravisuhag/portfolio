import Header from '../../../components/header';
import { getAllPostIds, getPostData } from '../../../lib/posts'

export async function generateMetadata(props) {
  const params = await props.params;
  const post = await getPostData(params.id);
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function Post(props) {
  const params = await props.params;
  const post = await getPostData(params.id);
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
  const paths = getAllPostIds()
  return paths
}