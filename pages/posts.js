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
          I write blogs, normally about my work to give a lot more
          background information about the thoughts, process and choices
          went into the project. Or a tutorial about something interesting
          I figured out to code or make. Also on thoughts and perspectives
          that matter to me and had something to share.
        </p>
        <List contents={[
          {
            title: 'Terraforming repeatable and extensible Infrastructure at Gojek',
            subtitle: 'In this post, we’ll talk about our approach of assembling Infrastructure As Code that simplifies the maintenance of an increasingly complex microservices architecture for our company.',
            link: 'https://ravisuhag.substack.com/p/olympus-terraforming-repeatable-and-extensible-infrastructure-at-go-jek-42ad5b0a4f9a',
            image: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F819b97ff-b4fa-4ba7-b169-2b43c837e840_1024x535.jpeg',
            date: 'October 3, 2018',
            time: '3'
          },
          {
            title: 'Anatomy and mindset of the data army at Gojek',
            subtitle: 'As data engineers, we solve problems with data to improve the product that we offer to our users. We build tools, infrastructure, frameworks, and services and on the way develop new skills, new ways of doing things, new tools, and turn our backs to traditional methods.',
            link: 'https://ravisuhag.substack.com/p/anatomy-and-mindset-of-the-data-army-at-go-jek-dd9040833356',
            image: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F80fed54c-5313-4b48-a22d-790f95cf490c_1024x535.png',
            date: 'July 16, 2018',
            time: '4'
          },
          {
            title: 'Building technical documentation as a product at scale',
            subtitle: 'In the real world, when we buy a product, it comes with a quick guide or some other form of documents which help you get going with the product. Without these documents, we’ll have to learn how to use the product leveraging solely on the ‘trial and error’ method — which is not a pleasant user experience.',
            link: 'https://ravisuhag.substack.com/p/chronicle-a-story-of-building-technical-documentation-for-go-data-4c20160107a2',
            image: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95c12897-e37d-4d33-85dc-f11bfd01b9a0_1024x536.png',
            date: 'July 4, 2018',
            time: '5'
          },
          {
            title: 'Asgard: A case study to envision data infrastructure automation at Gojek',
            subtitle: 'Every product needs a vision. This can come from many sources; most important being solving existing pain points and fulfilling a real, deeply-felt human need. The goal is to create an experience which respects users’ time, efforts, and make product the no-brainer solution.',
            link: 'https://ravisuhag.substack.com/p/asgard-a-study-to-envision-data-infrastructure-automation-at-go-jek-35dd6da2c72f',
            image: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8827f5f9-6c2b-4354-bc0d-9dadbdf7ac93_1024x640.png',
            date: 'April 29, 2018',
            time: '3'
          },
          {
            title: 'Loki: Chaos engineering tool for data infrastructure at Gojek',
            subtitle: 'Built on the principles of Chaos Engineering, and tailored to our specific use cases, Loki is our internal disaster simulation and load testing tool. It helps ensure our data infrastructure can tolerate random instance failures.',
            link: 'https://ravisuhag.substack.com/p/loki-chaos-engineering-tool-for-data-infrastructure-at-gojek-a8fdee936f17',
            image: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F2346c9fa-9b59-47f6-8c58-2670cb19e89b_1024x640.jpeg',
            date: 'April 1, 2018',
            time: '5'
          },
          {
            title: 'Data infrastructure at Gojek',
            subtitle: 'Our data infrastructure lets publish and consume raw and aggregated data effortlessly and reliably. This unleashes a plethora of possibilities within Gojek. From AI-based allocations, fraud detections, recommendations, to critical real-time business reporting and monitoring.',
            link: 'https://ravisuhag.substack.com/p/data-infrastructure-at-go-jek-cd4dc8cbd929',
            image: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F049739e1-6dab-44ee-8b11-2d97323411bc_1024x555.jpeg',
            date: 'March 12, 2018',
            time: '6'
          },
          {
            title: 'Atlas: Gojek’s real-time geospatial visualization platform',
            subtitle: 'At Gojek, location is built into the fabric of all our products, powering dozens of products that are used by millions of customers and drivers, daily. As a result, we have billions of GPS points flowing through our data pipelines daily in real-time. ',
            link: 'https://ravisuhag.substack.com/p/atlas-go-jeks-real-time-geospatial-visualization-platform-1cf5e16814c5',
            image: 'https://cdn-images-1.medium.com/max/1024/1*d89_Lxcx5sbmx03jtkxyWg.png',
            date: 'Febraury 9, 2018',
            time: '3'
          },
          {
            title: 'Scaling culture at Gojek',
            subtitle: 'In a hyper-growth organization like Gojek, technology plays a vital role. However, as an organization matures, the hard part is not scaling the technology, but paying heed to culture.',
            link: 'https://ravisuhag.substack.com/p/scaling-culture-at-go-jek-773f336c8b7e',
            image: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F408d3626-4112-45c6-bb66-7cbf4de47498_1024x576.png',
            date: 'December 26, 2017',
            time: '3'
          },
          {
            title: 'The art of being full stack',
            subtitle: 'Throughout my career, I have changed job roles more frequently than I have changed buses. So, here are a few techniques that have been instrumental in my own life in being a full-stack and kicking do-one-thing-syndrome butt.',
            link: 'https://ravisuhag.substack.com/p/the-art-of-being-full-stack-5b88577188fd',
            image: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F68a9c21f-3750-4ac1-8b88-edc57cdd5a58_1024x535.jpeg',
            date: 'September 30, 20217',
            time: '3'
          },
          {
            title: 'The dilemma of an engineer\'s heart and entrepreneurial mind',
            subtitle: 'In the world of tech, things move with the speed of light. Your best bet is to stay as independent as you can of the frameworks you are using. This will help you stay flexible towards your choices and more robust about your product in the longer run.',
            link: 'https://ravisuhag.substack.com/p/techie-heart-vs-entrepreneurial-mind-ac9caec6a9c8',
            image: 'https://cdn.substack.com/image/fetch/w_336,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F984cfc93-5730-4e9e-9d2c-9da6d5cc5be0_1984x1350.png',
            date: 'October 6, 2016',
            time: '4'
          },
        ]} />
      </main>
    </div>
  )
}