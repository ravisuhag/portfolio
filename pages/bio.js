import Head from 'next/head'
import Header from '../components/header';

export default function Bio() {
    return (
        <div className="container">
            <Head>
                <title>Bio | Ravi Suhag</title>
                <meta name="description" content="Ravi Suhag's personal homepage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="main">
                <img width="100%" src="/ravi_suhag_full.png" alt="Ravi Suhag" />
                <p>
                    Engineering and product leader with a passion for building great products.
                    More than 10 years of experience in building and leading high-impact engineering teams.
                    Proven track record to establish a vision and execute efficiently.
                    Active contributor and maintainer of open-source projects.
                    {/* Key expertise areas include: */}
                </p>
                {/* <p>
                    <strong>Team Building: </strong>
                    Recognizing and attracting top-tier members. Coach and guide teams through their strengths and weaknesses with regular feedback.
                </p>
                <p>
                    <strong>Data Engineering: </strong>
                    Experience in building distributed real-time data pipelines that can handle billions of data points per day.
                </p>
                <p>
                    <strong>Data Analytics: </strong>
                    Experience in building tools to visualize and analyse big data in an effective, understandable & engaging manner.
                </p>
                <p>
                    <strong>Distributed Systems: </strong>
                    Experience in developing distributed, fault-tolerant backend and frontend systems using the latest technology and modern frameworks.
                </p>
                <p>
                    <strong>Product Development: </strong>
                    Track record on driving product development with influence that meaningfully moves the business forward.
                </p>
                <p>
                    <strong>Product Design: </strong>
                    Designing user-centered, clean, and functional products that follow structure, simplicity, visibility, and reuse.
                </p>
                <p>
                    <strong>Partnership: </strong>
                    Establish strong relationships with both business and technical leaders across and outside organisation.
                </p>
                <p>
                    <strong>Vision: </strong>
                    Understanding business, analytics, and technology, to guide teams by providing relevant context and inspiration.
                </p> */}
                {/* <h4>Founder, Open DataOps Foundation</h4>
                <span>
                    In 2021, I founded the Open DataOps Foundation, a non-profit organisation
                    where I am leading vision and community efforts to build an open-source,
                    self-service modern data platform. ODPF provides a consistent and
                    unified platform for data lifecycle, data management, data integrity,
                    and data governance to magnify developer productivity.
                </span> */}
                <h4>VP Engineering, Gojek, Jan 2017 - Present</h4>
                <span>
                    Leading product and engineering efforts to build large-scale, self-service
                    data platforms including Enterprise Data Platform, Experimentation Platform,
                    Analytics Platform, and Customer Data Platform. These platforms empower the
                    Gojek workforce to make data-driven decisions.
                    It involves building distributed big data infrastructure, real-time
                    analytics and visualization pipelines for billions of data points per day using
                    many handcrafted as well big data open source tools including but not limited
                    to Kafka, Flink, Spark, BigQuery, Airflow, Zeppelin etc.
                </span>
                <h4>Engineering Lead, Harvard Kennedy School of Government, Apr 2014 - Mar 2017</h4>
                <span>
                    Leading technology efforts to design and develop data interfaces for evidence
                    based policy decisions and increasing accountability in public programs.
                    We have developed high-potential pilot projects which demonstrate the value
                    of data and evidence through hands-on capacity building, while simultaneously
                    creating innovative and effective ways for policy actors to utilize data and
                    research evidence to improve their decision making.
                </span>
                <h4>Consultant, Data Journalism, Hindustan Times, Nov 2015 - Aug 2016</h4>
                <span>
                    Built the definitive online source of real-time air quality monitoring in
                    all of India for Hindustan Times. This project involved working on sensor
                    journalism, extensive web crawling for data collection and moinitoring platform
                    for data exploration. The goal of the project was to empower citizens to make
                    better decisions, and so that they can hold their government accountable.
                </span>
                <h4>Consultant, Data Interfaces, JPAL, Apr 2015 - Dec 2015</h4>
                <span>
                    Built data exploration framework for emission trading system to enable the
                    Ministry of Environment & Forests to cap total pollution emissions in select
                    areas and increase regulatory transparency and accountability. The pilot scheme
                    provided a model for expansion within India and a framework for implementing global
                    environmental policy. This project was done in collaboration with JAPAL South Asia,
                    Gujarat Pollution Control Board, Maharashtra Pollution Control Board and the Tamil
                    Nadu Pollution Control Board.
                </span>
                <h4>Founder, Inspiration Edge, Jun 2011 - Dec 2015</h4>
                <span>
                    Inspiration Edge is a design driven software company and a community of passionate individuals,
                    thinking disruptively to revolutionize the IT industry and create positive social change.
                    We work with ambitious people and organizations to provide software delivery, pioneering tools
                    and consulting in commercial, social, educational and government sectors. We believe in improving
                    quality of living with technology and sharing what we learn by running events, conferences and contributing
                    to open source.
                </span>
                <h4>Lead Architect, Info Assembly, Dec 2013 - Mar 2014</h4>
                <span>
                    Worked on designing architecture for Big Data web platform for Info Assembly which leverages
                    data analytics and offers innovative FinTech products for businesses. We used Machine Learning
                    and Natural Language Processing algorithms running on massive big web data to create intuitive
                    visual experiences which would greatly simplify the manual financial market research process.
                </span>
                <p>
                    Full list of organisations is available on my <a href="https://www.linkedin.com/in/ravisuhag/" target="_blank">Linkedin</a> profile.
                </p>
                <h4>Media</h4>
                <ul className="bullet__list">
                    <li><a target="_blank" href="https://qz.com/995235/ravi-suhag-indias-most-prolific-hackathon-winner-never-went-to-an-iit-or-any-other-name-brand-school/">Quartz </a>- India’s most prolific hackathon winner </li>
                    <li><a target="_blank" href="https://yourstory.com/2014/09/techie-tuesdays-ravi-suhag/">Your Story </a>- From helping his dad in farms to winning hackathons</li>
                    <li><a target="_blank" href="http://joshtalks.com/talks/switched-to-a-5x8-room-taught-physics-and-sold-health-insurances-before-i-could-register-my-company/">Josh Talks </a>-  Cracking programming languages, without books</li>
                    <li><a target="_blank" href="http://angelhack.com/2014/09/25/infoclot-another-name-to-look-out-for-at-global-demo-day/">AngelHack </a>- Another Name to Look out for at Global Demo Day</li>
                    <li><a target="_blank" href="https://scroll.in/article/840527/indias-top-hackathon-winner-did-not-go-to-an-iit-or-any-other-name-brand-school">Scroll </a>- India’s most prolific hackathon winner </li>
                </ul>
                <h4>Awards</h4>
                <ul className="bullet__list">
                    <li><a target="_blank" href="https://nasscom.in/">NASSCOM</a> - Nasscom Technology Adopter, Jan 2017</li>
                    <li><a target="_blank" href="https://angelhack.com/">Angel Hack</a> - Angel Hack Jaipur HPE winner, June 2016</li>
                    <li><a target="_blank" href="https://nasscom.in/">NASSCOM</a> - TechNgage Delhi winner, June 2016</li>
                    <li><a target="_blank" href="https://presidentofindia.nic.in/fine.htm">President of India</a> - Festival of innovation winner, March 2016</li>
                    <li><a target="_blank" href="https://www.netherlandsandyou.nl/">Embassy of The Kingdom of Netherlands</a> - Hack Health On, June 2015</li>
                    <li><a target="_blank" href="">Up Global</a> - Startup Weekend Delhi 2015 Winner, May 2015</li>
                    <li><a target="_blank" href="https://www.sequoiacap.com/">Sequoia Capital</a> - Sequoia Hack 2014 Winner, September 2014</li>
                    <li><a target="_blank" href="https://angelhack.com/">Angel Hack</a> - Angel Hack 2014 Winner, June 2014</li>
                    <li><a target="_blank" href="https://gsfindia.com/">GSF India</a> - GSF Hacks Winner, April 2014</li>
                    <li><a target="_blank" href="https://www.directi.com/">Directi</a> - Rockstar of Design, Jan 2014</li>
                    <li><a target="_blank" href="https://timesinternet.in/">Times Internet</a> - Times Designathon Winner, Oct 2013</li>
                    <li><a target="_blank" href="">Peer Hack</a> - PeerHack Hackathon Winner, July 2013</li>
                </ul>
            </main>
        </div >
    )
}