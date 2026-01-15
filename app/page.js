import Link from "next/link";
import Shell from "../components/shell";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <Shell>
      <p>
        I'm Ravi Suhag, an engineering leader focused on building large-scale
        data and software systems. Over the past decade, I’ve guided teams
        across startups, hyper-growth companies, and research institutions to
        create systems that are reliable, scalable, and built to last.
      </p>
      <p>
        I currently serve as VP of Engineering at{" "}
        <Link href="https://www.pixxel.space/" target="_blank">
          Pixxel
        </Link>
        , where I lead the development of our Earth observation platform that
        transforms satellite data into actionable planetary intelligence.
      </p>
      <p>
        I’m also the founder of{" "}
        <Link href="https://raystack.org">Raystack</Link>, a non-profit
        foundation creating open-source tools to help teams build, scale, and
        operate complex data systems.
      </p>
      <p>
        Previously, I led engineering at{" "}
        <Link href="https://www.gojek.com/" target="_blank">
          Gojek
        </Link>
        , scaling self-serve data platforms for one of southeast asia’s largest
        tech ecosystems, and also built data-driven tools for public policy at
        Center for International Development,{" "}
        <Link href="https://epod.cid.harvard.edu/" target="_blank">
          Harvard University
        </Link>
        .
      </p>
      <p>
        My journey began in Electronics and Communication Engineering, where I
        studied embedded systems and developed a fascination with how complex
        systems behave. That curiosity naturally evolved into software, shaping
        my focus on distributed systems, software architecture, developer tools,
        and machine learning infrastructure.
      </p>
      <p>
        You can gain further insights into my background and interests through
        my <Link href="/posts">essays</Link> or find me on{" "}
        <Link href="http://github.com/ravisuhag" target="_blank">
          GitHub
        </Link>
        ,{" "}
        <Link href="https://x.com/ravi_suhag" target="_blank">
          X/Twitter
        </Link>
        , and{" "}
        <Link href="https://linkedin.com/in/ravisuhag/" target="_blank">
          LinkedIn
        </Link>
        .
      </p>
    </Shell>
  );
}
