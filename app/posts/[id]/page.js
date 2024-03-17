import Header from '../../../components/header';
import { getAllPostIds, getPostData } from '../../../lib/posts'

const metadata = {
  title: 'postData.title',
  description: 'Ravi Suhag\'s personal homepage',
}
export const dynamicParams = false;

export default async function Post({ params }) {
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