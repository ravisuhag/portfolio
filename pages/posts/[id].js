import Head from 'next/head'
import Header from '../../components/header';
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <div className="container">
      <Head>
        <title>Contact | Ravi Suhag</title>
        <meta name="description" content="Ravi Suhag's personal homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <div className="row">
          <div className="column">
            {postData.date}
            <h1>{postData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}