import Head from 'next/head'
import Header from '../components/header';
import List from '../components/list';
import { getAllPostList } from '../lib/posts';

export default function Posts({ list }) {
  return (
    <div className="container">
      <Head>
        <title>Posts | Ravi Suhag</title>
        <meta name="description" content="Ravi Suhag's personal homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <h2>Posts</h2>
        <p>
          I indulge in writing, mostly about my work to share my understanding
          and thoughts, highlighting the process and choices that went into a
          particular project. The remaining are thought-centric about my perspective
          and opinions.
        </p>
        <List contents={list} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const list = getAllPostList()
  return {
    props: {
      list
    }
  }
}