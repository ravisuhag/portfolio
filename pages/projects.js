import Head from 'next/head'
import Header from '../components/header';

export default function Bio() {
  return (
    <div className="container">
      <Head>
        <title>Talks | Ravi Suhag</title>
        <meta name="description" content="Ravi Suhag's personal homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <h1>Talks</h1>
        <p>
          Browse through some of my past projects to see why I made it, what tools and technologies were used and where
          I got the data from. Here, you can also find snapshots or, working examples and detailing the
          different aspects of each project.
        </p>
      </main>
    </div>
  )
}
