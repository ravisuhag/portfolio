import Link from "next/link";

export const metadata = {
  title: "Ravi Suhag | Resume",
  description: "Ravi Suhag's resume",
};

export default function Resume() {
  return (
    <div className="resume">
      <header>
        <h1>
          <strong>RAVI</strong> SUHAG
        </h1>
        <div>suhag.ravi@gmail.com · +1 (808) 490-3129</div>
        <p className="tagline">
          Engineering and product leader with a passion for building great
          products. More than 10 years of experience in building and leading
          high-impact engineering teams. Proven track record to establish a
          vision and execute eﬃciently. Active contributor and maintainer of
          open-source projects.
        </p>
      </header>

      <div className="columns">
        <aside>
          <section>
            <h2>EXPERTISE</h2>
            <div className="job">
              <h3>Team Building</h3>
              Recognizing and attracting top-tier members. Coach and guide teams
              through their strengths and weaknesses with regular feedback.
            </div>
            <div className="job">
              <h3>Data Engineering</h3>
              Experience in building distributed real-time data pipelines that
              can handle billions of data points per day.
            </div>
            <div className="job">
              <h3>Data Analytics</h3>
              Experience in building tools to visualize and analyse big data in
              an effective, understandable & engaging manner.
            </div>
            <div className="job">
              <h3>Distributed Systems</h3>
              Experience in developing distributed, fault-tolerant backend and
              frontend systems using the latest technology and modern
              frameworks.
            </div>
            <div className="job">
              <h3>Product Development</h3>
              Track record on driving product development with influence that
              meaningfully moves the business forward.
            </div>
            <div className="job">
              <h3>Product Design</h3>
              Designing user-centered, clean, and functional products that
              follow structure, simplicity, visibility, and reuse.
            </div>
            <div className="job">
              <h3>Partnership</h3>
              Establish strong relationships with both business and technical
              leaders across and outside organisation.
            </div>
            <div className="job">
              <h3>Vision</h3>
              Understanding business, analytics, and technology, to guide teams
              by providing relevant context and inspiration.
            </div>
          </section>
          <section>
            <h2>RECOGNITION</h2>
            <p>
              Featured by TedX, Quartz, Scroll, Josh Talks, Angel Hack and other
              organizations for winning a series of hackathons organised by
              Sequoia, President of India, Embassy of Netherlands, Nasscom,
              Times Group and more.
            </p>
          </section>
          <section>
            <h2>CONTACT</h2>
            <div>
              <strong>Website:</strong> www.ravisuhag.com
            </div>
            <div>
              <strong>LinkedIn:</strong> linkedin.com/in/ravisuhag
            </div>
            <div>
              <strong>GitHub:</strong> github.com/ravisuhag
            </div>
          </section>
        </aside>

        <main>
          <section>
            <h2>EXPERIENCE</h2>
            <div className="job">
              <h3>
                VP Engineering <span>Jan 2022 - Present</span>
              </h3>
              <h4>Pixxel</h4>
              <p>
                Leading product and engineering efforts to build an earth
                observation platform to democratize access to data of a
                constellation of hyperspectral imaging satellites across a
                multitude of sectors. My role also contributes towards the
                development of automated image processing and machine learning
                platform that will enable us to detect, monitor, and predict
                global phenomena in near real-time.
              </p>
            </div>
            <div className="job">
              <h3>
                Founder <span>Jan 2021 - Present</span>
              </h3>
              <h4>Raystack Foundation</h4>
              <p>
                Leading vision and community efforts to build open-source,
                collaborative, and distributed data platform to power
                data-driven workflows. Raystack provides a consistent and
                unified platform for data lifecycle, data management, data
                integrity, and data governance to magnify developer
                productivity. (http://raystack.org)
              </p>
            </div>
            <div className="job">
              <h3>
                VP Engineering <span>Jan 2017 - Dec 2022</span>
              </h3>
              <h4>Gojek</h4>
              <p>
                Leading product and engineering efforts to build large-scale,
                self-service data platforms including Enterprise Data Platform,
                Experimentation Platform, Analytics Platform, and Customer Data
                Platform. These platforms empower the Gojek workforce to make
                data-driven decisions.
              </p>
            </div>
            <div className="job">
              <h3>
                Engineering Lead <span>Apr 2014 - Mar 2017</span>
              </h3>
              <h4>Harvard Kennedy School of Government</h4>
              <p>
                Lead technology efforts to design and develop data interfaces
                for evidence-based policy decisions and increasing
                accountability in public programs. Developed high- potential
                pilot projects which demonstrate the value of data and evidence
                through hands-on capacity building, while simultaneously
                creating innovative and effective ways for policy actors to
                utilize data and research evidence to improve their decision-
                making.
              </p>
            </div>
            <div className="job">
              <h3>
                Consultant <span>Apr 2015 - Dec 2015</span>
              </h3>
              <h4>JPAL, MIT</h4>
              <p>
                Built data exploration framework for emission trading system to
                enable the Ministry of Environment & Forests to cap total
                pollution emissions in selected areas and increase regulatory
                transparency and accountability.
              </p>
            </div>
            <div className="job">
              <h3>
                Founder <span>Jun 2010 - Dec 2015</span>
              </h3>
              <h4>Infoclot</h4>
              <p>
                Design-driven software company working with ambitious people and
                organizations to provide software delivery, pioneering tools and
                consulting in commercial, social, educational and government
                sectors.
              </p>
            </div>
            <div className="job">
              <h3>
                Embedded Developer <span>May 2009 - Jun 2010</span>
              </h3>
              <h4>Appin Technology</h4>
              <p>
                Designed and implemented software for microcontrollers and
                arduino based embedded devices and systems. Delivered training
                and workshops on fundamentals of embedded systems.
              </p>
            </div>
          </section>
          <section>
            <h2>EDUCATION</h2>
            <div className="job">
              <h3>Bachelor of Technology</h3>
              <p>
                Major in Electronics and communication engineering from KIIT
                College of Engineering.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
