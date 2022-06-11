import Head from 'next/head'
import Header from '../components/header';
import Videos from '../components/videos';

export default function Bio() {
    return (
        <div className="container">
            <Head>
                <title>Talks | Ravi Suhag</title>
                <meta name="description" content="Ravi Suhag's personal homepage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="main">
                <h1>Talks</h1>
                <p>
                    I love sharing what I know with others. Feel free to <a target="_blank" href="mailto:suhag.ravi@gmail.com">contact</a> me if you’d like me to come and speak at an event.
                </p>
                <Videos contents={[
                    {
                        title: 'Crafting modern data experiences at scale',
                        subtitle: 'In this talk Ravi shares how organizations can build modern data experiences with ODPF that are easy to use, scalable, and maintainable.',
                        link: 'https://www.youtube.com/watch?v=V-pZnlfSXCQ',
                        embed: 'V-pZnlfSXCQ',
                        date: 'May 2022',
                        publisher: 'Github Constellation'
                    },
                    {
                        title: 'Feature Engineering at Scale with Dagger and Feast',
                        subtitle: 'In this talk Ravi will talk about the end to end architecture and how Dagger and Feast work together to provide a cohesive feature engineering workflow.',
                        link: 'https://youtu.be/9B9qqqJVm4M',
                        embed: '9B9qqqJVm4M',
                        date: 'May 2022',
                        publisher: 'Apply Conf'
                    },
                    {
                        title: 'Terraforming repeatable and extensible infrastructure at Gojek',
                        subtitle: 'In this talk, we’ll talk about our approach of assembling Infrastructure As Code that simplifies the maintenance of an increasingly complex microservices architecture for our company.',
                        link: 'https://youtu.be/z0Jm2EB57zM',
                        embed: 'z0Jm2EB57zM',
                        date: 'Aug 2021',
                        publisher: 'Hashi Talks'
                    },
                    {
                        title: 'Managing Flink operations at Gojek',
                        subtitle: 'We use Flink extensively to provide real-time streaming aggregation and analytics for billions of data points generated on daily basis. Working at such a large scale makes it really important to automate operations from infrastructure, failover, and monitoring.',
                        link: 'https://youtu.be/9WmM-f3OjeM',
                        embed: '9WmM-f3OjeM',
                        date: 'July 2019',
                        publisher: 'Flink Forward'
                    },
                    {
                        title: 'Building technical documentation as a product at scale',
                        subtitle: 'In the real world, when we buy a product, it comes with a quick guide or some other form of documents which help you get going with the product. Without these documents, we’ll have to learn how to use the product leveraging solely on the ‘trial and error’ method — which is not a pleasant user experience at all.',
                        link: 'https://youtu.be/G8LTujy2EBA',
                        embed: 'G8LTujy2EBA',
                        date: 'Nov 2018',
                        publisher: 'HasGeek'
                    },
                    {
                        title: 'The Art of being a Polymath',
                        subtitle: 'In his talk, Ravi shares about his different responsibilities he took which led to a path of becoming a polymath.He curates his experiences on being a teacher,marketer,designer,visualiser,developer and devops engineer, which can boggle one\'s mind.',
                        link: 'https://www.ted.com/talks/ravi_suhag_the_art_of_being_a_polymath',
                        embed: 'kBFLz5Tmp6I',
                        date: 'August 2018',
                        publisher: 'TED Talks'
                    },
                    {
                        title: 'Atlas: Building real-time geospatial visualization platform',
                        subtitle: 'billions of GPS points flowing through our data pipelines daily in real-time and drive decisions like driver allocation, surge pricing, driver incentives and more. This poses intriguing challenges in finding actionable insights from spatial data in real-time.',
                        link: 'https://youtu.be/jNkLa-fBsjA',
                        embed: 'jNkLa-fBsjA',
                        date: 'July 2018',
                        publisher: 'Has Geek'
                    },
                    {
                        title: 'A village boy’s mantra to hack your way to success',
                        subtitle: 'Inspiration is all around us. If we look up all around we can find people who lived an ordinary life but their dreams made them extraordinary. Ravi Suhag’s story is one such inspirational story.',
                        link: 'https://youtu.be/KVzoe6risNo',
                        embed: 'KVzoe6risNo',
                        date: 'June 2016',
                        publisher: 'Josh Talks'
                    },
                    {
                        title: ' Lean UX for minimal viable products',
                        subtitle: 'In this webinar, our speaker shares why Lean UX should be the approach to take while designing MVPs. During the session, he also elucidates on the concept of Lean UX and covers different aspects, tools and methodologies of Lean UX that should be adopted for designing MVPs.',
                        link: 'https://youtu.be/-owEuelYLXc',
                        embed: '-owEuelYLXc',
                        date: 'Nov 2014',
                        publisher: 'Srijan Technologies'
                    },


                ]} />
            </main>
        </div>
    )
}
