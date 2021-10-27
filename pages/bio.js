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
                </p>
                {/* <h4>Founder, Open DataOps Foundation</h4>
                <span>
                    In 2021, I founded the Open DataOps Foundation, a non-profit organisation
                    where I am leading vision and community efforts to build an open-source,
                    self-service modern data platform. ODPF provides a consistent and
                    unified platform for data lifecycle, data management, data integrity,
                    and data governance to magnify developer productivity.
                </span> */}
                <h4>VP Engineering, Data Platforms, Gojek</h4>
                <span>
                    Leading product and engineering efforts to build large-scale, self-service
                    data platforms including Enterprise Data Platform, Experimentation Platform,
                    Analytics Platform, and Customer Data Platform. These platforms empower the
                    Gojek workforce to make data-driven decisions.
                </span>
                <span>
                    Building resilient and scalable data infrastructure across all of Gjek’s
                    18+ products that help millions of Indonesians commute, shop, eat and pay,
                    daily. This involves building distributed big data infrastructure, real-time
                    analytics and visualization pipelines for billions of data points per day using
                    many handcrafted as well big data open source tools including but not limited
                    to Kafka, Flink, Spark, BigQuery, Airflow, Zeppelin etc.
                </span>
                <h4>Engineering Lead, Harvard Kennedy School of Government</h4>
                <span>
                    Leading technology efforts to design and develop data interfaces for evidence
                    based policy decisions and increasing accountability in public programs.
                    We have developed high-potential pilot projects which demonstrate the value
                    of data and evidence through hands-on capacity building, while simultaneously
                    creating innovative and effective ways for policy actors to utilize data and
                    research evidence to improve their decision making.
                </span>
                <h4>Consultant, Data Journalism, Hindustan Times</h4>
                <span>
                    Built the definitive online source of real-time air quality monitoring in
                    all of India for Hindustan Times. This project involved working on sensor
                    journalism, extensive web crawling for data collection and moinitoring platform
                    for data exploration. The goal of the project was to empower citizens to make
                    better decisions, and so that they can hold their government accountable.
                </span>
                <h4>Consultant, Data Interfaces, JPAL</h4>
                <span>
                    Built data exploration framework for emission trading system to enable the
                    Ministry of Environment & Forests to cap total pollution emissions in select
                    areas and increase regulatory transparency and accountability. The pilot scheme
                    provided a model for expansion within India and a framework for implementing global
                    environmental policy. This project was done in collaboration with JAPAL South Asia,
                    Gujarat Pollution Control Board, Maharashtra Pollution Control Board and the Tamil
                    Nadu Pollution Control Board.
                </span>
                <h4>Founder, Inspiration Edge</h4>
                <span>
                    Inspiration Edge is a design driven software company and a community of passionate individuals,
                    thinking disruptively to revolutionize the IT industry and create positive social change.
                    We work with ambitious people and organizations to provide software delivery, pioneering tools
                    and consulting in commercial, social, educational and government sectors. We believe in improving
                    quality of living with technology and sharing what we learn by running events, conferences and contributing
                    to open source.
                </span>
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
                    <li>Nasscom Technology Adopter | NASSCOM | Jan 2017</li>
                    <li>Festival of innovation winner | President of India | March 2016</li>
                    <li>Hack Health On | Embassy Of The Kingdom Of The Netherlands | June 2015</li>
                    <li>TechNgage Delhi winner | NASSCOM | June 2016</li>
                    <li>Angel Hack Jaipur HPE winner | Angel Hack | June 2016</li>
                    <li>Startup Weekend Delhi 2015 Winner | UP Global | May 2015</li>
                    <li>Sequoia Hack 2014 Winner | Sequoia Capital | September 2014</li>
                    <li>Angel Hack 2014 Winner | Angel Hack | June 2014</li>
                    <li>GSF Hacks Winner | GSF India | April 2014</li>
                    <li>Rockstar of Design | Directi (Big Rock) | Jan 2014</li>
                    <li>Times Designathon Winner | Times Internet | Oct 2013</li>
                    <li>PeerHack Hackathon Winner | Peer Hack | July 2013</li>
                </ul>
            </main>
        </div >
    )
}