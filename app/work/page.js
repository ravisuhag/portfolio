import Link from "next/link";
import Shell from "../../components/shell";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata.work;

export default function Work() {
  return (
    <Shell className="work">
      {/* <Image
        src={"/ravi_suhag_full.png"}
        width={780}
        height={428}
        alt="Ravi Suhag"
        style={{ width: "100%", height: "auto" }}
      />*/}
      <p>
        I'm a builder at heart, always drawn to teams, products, and systems
        that scale. Over the years, the work has grown more complex, the stakes
        higher, and the impact broader. But the curiosity that started it all
        remains the same. Here's what that journey has looked like.
      </p>

      <h4>Pixxel</h4>
      <h5>VP Engineering . 2022 - Present</h5>
      <span>
        Leading product and engineering efforts to build a geospatial platform
        to democratize access to data of a constellation of hyperspectral
        imaging satellites across a multitude of sectors. My role also
        contributes towards the development of automated image processing and
        machine learning platform that will enable us to detect, monitor, and
        predict global phenomena in near real-time..
      </span>

      <h4>Raystack</h4>
      <h5>Founder . Mar 2021 - Present</h5>
      <span>
        In 2021, I founded{" "}
        <Link target="_blank" href="https://raystack.org">
          Raystack Foundation
        </Link>
        , a non-profit organisation where I am leading vision and community
        efforts to build an open-source, self-service modern data platform.
        Raystack products provides a consistent and unified platform for data
        lifecycle, data management, and data governance to magnify developer
        productivity.
      </span>
      <h4>Gojek</h4>
      <h5>VP Engineering . Jan 2017 - 2022</h5>
      <span>
        Leading product and engineering efforts to build large-scale,
        self-service data platforms encompassing Enterprise Data Platform,
        Experimentation Platform, Analytics Platform, and Customer Data
        Platform. These platforms have empowered Gojek workforce to make
        data-driven decisions. Scaling these platform involve building
        distributed big data infrastructure, real-time analytics, and
        visualization workflows for billions of data points per day using many
        handcrafted as well big data open-source tools including but not limited
        to Kafka, Flink, Spark, BigQuery, Airflow, Zeppelin, Kubernetes etc.
      </span>
      <h4>Harvard Kennedy School of Government</h4>
      <h5>Engineering Lead . Apr 2014 - Mar 2017</h5>
      <span>
        Orchestrated technology efforts to design and develop data interfaces
        for evidence-based policy decisions to increase accountability in public
        programs. As a team, developed high-potential pilot projects
        demonstrating and attesting the value of data through hands-on capacity
        building, while simultaneously creating innovative and effective ways
        for policy actors to employ to utilize data and research evidence to
        improve their decision making.
      </span>
      <h4>Hindustan Times</h4>
      <h5>Consultant, Data Journalism . Nov 2015 - Aug 2016</h5>
      <span>
        Built a definitive online source for monitoring the real-time air
        quality of India for Hindustan Times. This project constituted sensor
        journalism, and extensive web crawling for data collection, as well as
        monitoring platform for data exploration. The exposition of the project
        empowered citizens to actively engage with the government, allowing
        decision-makers to reconnect with citizens&apos; needs, priorities, and
        values.
      </span>
      <h4>JPAL</h4>
      <h5>Consultant, Data Interfaces . Apr 2015 - Dec 2015</h5>
      <span>
        Built data-exploration framework for emission trading system to enable
        the Ministry of Environment & Forests to cap total pollution emissions
        in selected areas and increase regulatory transparency and
        accountability. The pilot scheme provided a model for expansion within
        India and a framework for implementing global environmental policy. This
        project was done in collaboration with JPAL South Asia, Gujarat
        Pollution Control Board, Maharashtra Pollution Control Board and the
        Tamil Nadu Pollution Control Board.
      </span>
      <h4>Infoclot</h4>
      <h5>Founder . Jun 2011 - Dec 2015</h5>
      <span>
        Founded Infoclot, a design-driven software company by establishing a
        progressivist community of passionate individuals, cohesively working to
        revolutionize the IT industry and create positive social impact. Worked
        with ambitious people and organizations to provide software delivery,
        pioneering tools, and consulting in commercial, social, educational, and
        government sectors. The company&apos;s belief stood to improve the
        quality of living with technology and sharing what we learn by running
        events, conferences and contributing to open-source.
      </span>
      <h4>Info Assembly</h4>
      <h5>Lead Architect . Dec 2013 - Mar 2014</h5>
      <span>
        Worked on designing the architecture for Big Data web platform for Info
        Assembly which leverages data analytics and offers innovative FinTech
        products for businesses. Applied Machine Learning and Natural Language
        Processing algorithms running on massive big web data to create
        intuitive visual experiences that greatly simplified the manual
        financial market research process.
      </span>
      <p>
        Full list of organisations is available on my{" "}
        <Link href="https://www.linkedin.com/in/ravisuhag/" target="_blank">
          Linkedin
        </Link>{" "}
        profile.
      </p>
      <h4>Media</h4>
      <ul className="bullet__list">
        <li>
          <Link
            target="_blank"
            href="https://qz.com/995235/ravi-suhag-indias-most-prolific-hackathon-winner-never-went-to-an-iit-or-any-other-name-brand-school/"
          >
            Quartz{" "}
          </Link>
          - India’s most prolific hackathon winner{" "}
        </li>
        <li>
          <Link
            target="_blank"
            href="https://yourstory.com/2014/09/techie-tuesdays-ravi-suhag/"
          >
            Your Story{" "}
          </Link>
          - From helping his dad in farms to winning hackathons
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=KVzoe6risNo&ab_channel=JoshTalks"
          >
            Josh Talks{" "}
          </Link>
          - Cracking programming languages, without books
        </li>
        <li>
          <Link
            target="_blank"
            href="https://scroll.in/article/840527/indias-top-hackathon-winner-did-not-go-to-an-iit-or-any-other-name-brand-school"
          >
            Scroll{" "}
          </Link>
          - India’s most prolific hackathon winner{" "}
        </li>
      </ul>
      <h4>Awards</h4>
      <ul className="bullet__list">
        <li>
          <Link target="_blank" href="https://nasscom.in/">
            NASSCOM
          </Link>{" "}
          - Nasscom Technology Adopter, Jan 2017
        </li>
        <li>
          <Link target="_blank" href="https://angelhack.com/">
            Angel Hack
          </Link>{" "}
          - Angel Hack Jaipur HPE winner, June 2016
        </li>
        <li>
          <Link target="_blank" href="https://nasscom.in/">
            NASSCOM
          </Link>{" "}
          - TechNgage Delhi winner, June 2016
        </li>
        <li>
          <Link target="_blank" href="https://presidentofindia.nic.in/fine.htm">
            President of India
          </Link>{" "}
          - Festival of innovation winner, March 2016
        </li>
        <li>
          <Link target="_blank" href="https://www.netherlandsandyou.nl/">
            Embassy of The Kingdom of Netherlands
          </Link>{" "}
          - Hack Health On, June 2015
        </li>
        <li>
          <Link target="_blank" href="">
            Up Global
          </Link>{" "}
          - Startup Weekend Delhi 2015 Winner, May 2015
        </li>
        <li>
          <Link target="_blank" href="https://www.sequoiacap.com/">
            Sequoia Capital
          </Link>{" "}
          - Sequoia Hack 2014 Winner, September 2014
        </li>
        <li>
          <Link target="_blank" href="https://angelhack.com/">
            Angel Hack
          </Link>{" "}
          - Angel Hack 2014 Winner, June 2014
        </li>
        <li>
          <Link target="_blank" href="https://gsfindia.com/">
            GSF India
          </Link>{" "}
          - GSF Hacks Winner, April 2014
        </li>
        <li>
          <Link target="_blank" href="https://www.directi.com/">
            Directi
          </Link>{" "}
          - Rockstar of Design, Jan 2014
        </li>
        <li>
          <Link target="_blank" href="https://timesinternet.in/">
            Times Internet
          </Link>{" "}
          - Times Designathon Winner, Oct 2013
        </li>
        <li>
          <Link target="_blank" href="">
            Peer Hack
          </Link>{" "}
          - PeerHack Hackathon Winner, July 2013
        </li>
      </ul>
    </Shell>
  );
}
