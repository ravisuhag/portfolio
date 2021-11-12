import Head from 'next/head'
import Header from '../components/header';
import Videos from '../components/videos';

export default function Bio() {
  return (
    <div className="container">
      <Head>
        <title>Contact | Ravi Suhag</title>
        <meta name="description" content="Ravi Suhag's personal homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <h1>Let's get in touch.</h1>
        <p>
          Feel free to <a target="_blank" href="mailto:suhag.ravi@gmail.com">contact</a> me about interesting opportunities, collaborations or thought provoking discussions.
        </p>
        <p>
          I am sharing most of my code on <a target="_blank" href="https://github.com/ravisuhag">Github</a>,
          some of my design work on <a target="_blank" href="https://www.behance.net/ravisuhag">Behance</a>,
          random thoughts on <a target="_blank" href="https://twitter.com/Ravi_Suhag">Twitter</a>,
          everyday moments on <a target="_blank" href="https://www.instagram.com/ravisuhag/">Instagram</a>,
          articles on <a target="_blank" href="https://ravisuhag.medium.com/">Medium</a> and meeting
          startups on <a target="_blank" href="https://angel.co/u/ravisuhag">Angel List</a>.
          Full resume is available on <a target="_blank" href="https://www.linkedin.com/in/ravisuhag/">Linkedin</a>.
        </p>
        <p>
          Please note that I receive a lot of emails, so it may take me a while to get back to you.
          If I do seem to be taking a while to respond, please feel free to send me a follow-up email
          to remind to reply, that certainly won't offend me.
        </p>
        <p>
          Drop me an email at suhag.ravi@gmail.com or call me on (+91)9717860747.
        </p>
        <iframe src="https://ravisuhag.substack.com/embed" width="480" height="320" style={{ border: "1px solid #EEE", background: "white" }} frameborder="0" scrolling="no" />
      </main>
    </div >
  )
}
