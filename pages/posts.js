import Head from 'next/head'
import Header from '../components/header';
import List from '../components/list';

export default function Bio() {
  return (
    <div className="container">
      <Head>
        <title>Posts | Ravi Suhag</title>
        <meta name="description" content="Ravi Suhag's personal homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <h1>Posts</h1>
        <p>
          I indulge in writing, mostly about my work to share my understanding
          and thoughts, highlighting the process and choices that went into a
          particular project. The remaining are thought-centric about my perspective
          and opinions.
        </p>
        <List contents={[
          {
            title: 'Terraforming repeatable and extensible Infrastructure at Gojek',
            subtitle: 'In this post, we’ll talk about our approach of assembling Infrastructure As Code that simplifies the maintenance of an increasingly complex microservices architecture for our company.',
            link: '/posts/olympus',
            date: 'October 3, 2018',
            time: '3'
          },
          {
            title: 'Anatomy and mindset of the data army at Gojek',
            subtitle: 'As data engineers, we solve problems with data to improve the product that we offer to our users. We build tools, infrastructure, frameworks, and services and on the way develop new skills, new ways of doing things, new tools, and turn our backs to traditional methods.',
            link: 'https://ravisuhag.substack.com/p/anatomy-and-mindset-of-the-data-army-at-go-jek-dd9040833356',
            date: 'July 16, 2018',
            time: '4'
          },
          {
            title: 'Building technical documentation as a product at scale',
            subtitle: 'In the real world, when we buy a product, it comes with a quick guide or some other form of documents which help you get going with the product. Without these documents, we’ll have to learn how to use the product leveraging solely on the ‘trial and error’ method — which is not a pleasant user experience.',
            link: 'https://ravisuhag.substack.com/p/chronicle-a-story-of-building-technical-documentation-for-go-data-4c20160107a2',
            date: 'July 4, 2018',
            time: '5'
          },
          {
            title: 'Asgard: A case study to envision data infrastructure automation at Gojek',
            subtitle: 'Every product needs a vision. This can come from many sources; most important being solving existing pain points and fulfilling a real, deeply-felt human need. The goal is to create an experience which respects users’ time, efforts, and make product the no-brainer solution.',
            link: 'https://ravisuhag.substack.com/p/asgard-a-study-to-envision-data-infrastructure-automation-at-go-jek-35dd6da2c72f',
            date: 'April 29, 2018',
            time: '3'
          },
          {
            title: 'Loki: Chaos engineering tool for data infrastructure at Gojek',
            subtitle: 'Built on the principles of Chaos Engineering, and tailored to our specific use cases, Loki is our internal disaster simulation and load testing tool. It helps ensure our data infrastructure can tolerate random instance failures.',
            link: 'https://ravisuhag.substack.com/p/loki-chaos-engineering-tool-for-data-infrastructure-at-gojek-a8fdee936f17',
            date: 'April 1, 2018',
            time: '5'
          },
          {
            title: 'Data infrastructure at Gojek',
            subtitle: 'Our data infrastructure lets publish and consume raw and aggregated data effortlessly and reliably. This unleashes a plethora of possibilities within Gojek. From AI-based allocations, fraud detections, recommendations, to critical real-time business reporting and monitoring.',
            link: 'https://ravisuhag.substack.com/p/data-infrastructure-at-go-jek-cd4dc8cbd929',
            date: 'March 12, 2018',
            time: '6'
          },
          {
            title: 'Atlas: Gojek’s real-time geospatial visualization platform',
            subtitle: 'At Gojek, location is built into the fabric of all our products, powering dozens of products that are used by millions of customers and drivers, daily. As a result, we have billions of GPS points flowing through our data pipelines daily in real-time. ',
            link: '/posts/atlas',
            date: 'Febraury 9, 2018',
            time: '3'
          },
          {
            title: 'Scaling culture at Gojek',
            subtitle: 'In a hyper-growth organization like Gojek, technology plays a vital role. However, as an organization matures, the hard part is not scaling the technology, but paying heed to culture.',
            link: '/posts/culture',
            date: 'December 26, 2017',
            time: '3'
          },
          {
            title: 'The art of being full stack',
            subtitle: 'Throughout my career, I have changed job roles more frequently than I have changed my wardrobe. So, here are a few techniques that have been instrumental in my own life in being a full-stack and kicking do-one-thing-syndrome butt.',
            link: '/posts/fullstack',
            date: 'September 30, 20217',
            time: '3'
          }
        ]} />
      </main>
    </div>
  )
}