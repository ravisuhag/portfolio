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
        <div className="row">
          <div className="column left">
            <h1 className="welcome" ref={el} />
            <i> Crafting modern data experiences.</i>
            <p>
              I am Ravi Suhag, an agile engineer with a vision to transform
              software chaos into seamless experiences. My inherent passion to
              solve problems involving analysis and synthesis shaped me to lead
              technology and product for organizations of all sizes, untangling
              the knots in software development, smoothing product delivery, and
              instilling best practices.
            </p>
            <p>
              With more than 10 years of experience and proven track record I have
              crafted both technology and product roadmaps with a distinct programming
              style and a dedication to transparency and open-source development.
            </p>
            <p>
              I am currently working as VP Engineering at <a href="https://www.pixxel.space/" target="_blank">Pixxel</a>,
              where we are on a mission to build a health monitor for the planet through a constellation of cutting edge
              hyperspectral small satellites.

              Before that I worked as VP Engineering at <a href="https://www.gojek.com/" target="_blank">Gojek</a>,
              Indonesia's largest hyper-local company. Where I lead teams to build large-scale, self-service
              data platforms, allowing its workforce to make data-driven decisions. Before that, I worked as a tech
              consultant at the <a href="https://epod.cid.harvard.edu/" target="_blank">Center for International Development, Harvard University</a>,
              to build tools that enabled the government to make data-driven policy decisions.
            </p>
            <p>
              A curiosity-driven mindset has majorly contributed both to my personal and professional growth.
              Fascinated by how we use technology and interact with it, I earned a bachelor's degree in
              Electronics and Communication Engineering, where I studied, designed, and developed embedded
              systems.
            </p>
            <p>
              At the same time, a serendipitous need to create a website for my startup triggered
              me to code and design. With no mentor or curriculum to follow, I was drawn to code and tirelessly
              lost myself in the world of building programs with unabated coding endeavors. This newly developed
              passion enthralled me to enroll and win several nation-held
              <a href="https://scroll.in/article/840527/indias-top-hackathon-winner-did-not-go-to-an-iit-or-any-other-name-brand-school" target="_blank"> hackathons</a>.
              Ever since then, I have been working at the intersection of technology and design to socially impact the lives of others.
            </p>
            <p>
              From early childhood I tinkered with electronics by slicing the whole into parts and
              then binding the parts into a whole. This allowed me to discover critical frameworks
              through which I could make better sense of reality. I am a life-long learner with an
              undying urge to execute my endeavors as a:
            </p>
            <p><strong>Developer</strong> with experience in developing distributed, fault-tolerant backend and frontend systems using latest technology and contributing to open-source projects.</p>
            <p><strong>Designer</strong> with a passion to design user-centric, clean and functional products that follows structure, simplicity, visibility and reuse.</p>
            <p><strong>Data journalist</strong> who specializes in building sensor and robo journalism tools/stories around policy, economics, sports and environment.</p>
            <p><strong>Artisan</strong> who loves to play with microcontrollers and electronic boards to design custom embedded and robotic systems.</p>
            <p><strong>Entrepreneur</strong> as founder of Inspiration Edge, a design driven software company and a community of passionate individuals, thinking disruptively to revolutionize the IT industry and create positive social change.</p>
            <p><strong>Athlete</strong> following a lifestyle that includes playing either cricket, basketball, boxing, volleyball, and/or hiking.</p>
            <p><strong>Utopian</strong> with keenness to interpret and idealize why humans and universe are the way they are and how they are going to evolve.</p>
            <p>
              Have fun browsing and thank you for visiting!
            </p>
            <p><img className="signature" width="100%" src="/sign.png" alt="Ravi Suhag" /></p>
          </div>
          <div className="column right">
            <p>
              <img className="home--image" width="100%" src="/ravi_home.png" alt="Ravi Suhag" />
            </p>
          </div>
        </div >
      </main >
    </div >
  );
}
