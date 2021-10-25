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
                <h4>Founder, Open DataOps Foundation</h4>
                <span>
                    In 2021, I founded the Open DataOps Foundation, a non-profit organisation
                    where I am leading vision and community efforts to build an open-source,
                    self-service modern data platform. ODPF provides a consistent and
                    unified platform for data lifecycle, data management, data integrity,
                    and data governance to magnify developer productivity.
                </span>
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
            </main>
        </div >
    )
}