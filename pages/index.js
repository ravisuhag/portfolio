import Head from 'next/head'
import Header from '../components/header';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Hello!', 'Namaste!', 'Nǐ hǎo!', 'Bonjour!', 'Ciao!', 'Salaam!', 'Merhaba!', 'Privet!', 'Sawasdee!', 'Olá!'],
      stringsElement: null,
      typeSpeed: 70,
      shuffle: true,
      startDelay: 0,
      backDelay: 6500,
      loop: true,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Ravi Suhag - Hello!</title>
        <meta name="description" content="Ravi Suhag's personal homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <h1 className="welcome" ref={el} />
        <div className="row">
          <div className="column left">
            <p>
              I am Ravi Suhag, an engineering and product leader with a passion for building great products.
              More than 10 years of experience in building and leading high-impact engineering teams.
              Proven track record to establish a vision and execute efficiently.
              Active contributor and maintainer of open-source projects.
            </p>
            <p>
              I'm currently working as VP Engineering at <a href="https://www.gojek.com/" target="_blank">Gojek</a>, where I lead product and engineering
              efforts to build large-scale, self-service data platforms including Modern Data Platform,
              Experimentation Platform, Analytics Platform, and Customer Data Platform.These platforms empower
              the Gojek workforce to make data-driven decisions.
            </p>
            <p>
              Before that, I was working as a tech consultant at<a href="https://epod.cid.harvard.edu/" target="_blank"> Evidence for Policy Design</a> at the Center for
              International Development, Harvard University where we built tools that enable the government
              to make data-driven policy decisions.
            </p>
            <p>
              I have a very curious path both personally and professionally. Since I was a little boy,
              I've been fascinated by how we use technology and interact with things. After designing
              embedded systems for a couple of years during my graduation, obtaining a degree in Electronics
              and Communication Engineering, I decided to learn design and code on my own and have been working
              at the intersection of technology, design, and social impact since then. I wear multiple hats and
              am hungry to learn more and be more.
            </p>
            <p><strong>Developer</strong> with experience in developing distributed, fault-tolerant backend and frontend systems using the latest and open-source technology.</p>
            <p><strong>Designer</strong> with a passion for designing user-centered, clean and functional design. My designs follow structure, simplicity, visibility and reuse.</p>
            <p><strong>Data journalist</strong> who specializes in building sensor and robo journalism tools/stories around policy, economics, sports and environment.</p>
            <p><strong>Maker</strong> who loves to play with microcontrollers and electronic boards to design custom embedded and robotic systems.</p>
            <p><strong>An entrepreneur</strong> as founder of Inspiration Edge, a design driven software company and a community of passionate individuals, thinking disruptively to revolutionize the IT industry and create positive social change.</p>
            <p><strong>An athlete</strong> who loves to play cricket, basketball, boxing, volleyball, and hiking mountains. I am always interested in learning and trying almost any indoor or outdoor sport.</p>
            <p><strong>A thinker</strong> with deep passion to interpret and visualize why humans and universe are the way they are and how they are going to evolve.</p>
            <p>
              Have fun browsing and thank you for visiting!
            </p>
            <p><img className="signature" width="100%" src="/sign.svg" alt="Ravi Suhag" /></p>
          </div>

          <div className="column right">
            <p>
              <img className="home--image" width="100%" src="/ravi.png" alt="Ravi Suhag" />
            </p>
            <p>
              Crafting delightful modern data experiences for the web and beyond. Feel free to <a target="_blank" href="mailto:suhag.ravi@gmail.com">contact</a> me about interesting opportunities, collaborations or thought provoking discussions.
            </p>
            <p>
              I am sharing most of my code on <a target="_blank" href="https://github.com/ravisuhag">Github</a>, some of my design work on <a target="_blank" href="https://www.behance.net/ravisuhag">Behance</a>, random
              thoughts on <a target="_blank" href="https://twitter.com/Ravi_Suhag">Twitter</a>, everyday moments on <a target="_blank" href="https://www.instagram.com/ravisuhag/">Instagram</a>, articles on <a target="_blank" href="https://ravisuhag.medium.com/">Medium</a> and meeting
              startups on <a target="_blank" href="https://angel.co/u/ravisuhag">Angel List</a>. Full resume is available on <a target="_blank" href="https://www.linkedin.com/in/ravisuhag/">Linkedin</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
