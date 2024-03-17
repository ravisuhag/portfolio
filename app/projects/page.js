import Header from '../../components/header';

export const metadata = {
  title: 'Ravi Suhag',
  description: 'Ravi Suhag\'s personal homepage',
}

export default function Bio() {
  return (
    <div className="container">
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
