import Image from "next/image";
import Link from "next/link";
import Shell from "../components/shell";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <Shell>
      <p>
        I am Ravi Suhag, an engineering leader specializing in building
        large-scale data and software platforms. With over a decade of
        experience across startups, hyper-growth companies, and research
        institutions, I’ve led teams that design systems for reliability, scale,
        and long-term impact.
      </p>
      <p>
        I currently work as VP of Engineering at{" "}
        <Link href="https://www.pixxel.space/" target="_blank">
          Pixxel
        </Link>
        , where I oversee the development of our end-to-end earth observation
        platform. I also run the{" "}
        <Link href="https://raystack.org">Raystack Foundation</Link>, creating
        open-source infrastructure for data-intensive applications.
      </p>
      <p>
        Previously I worked as VP Engineering at{" "}
        <Link href="https://www.gojek.com/" target="_blank">
          Gojek
        </Link>
        , scaling self-serve data platforms for one of Southeast Asia’s largest
        tech ecosystems, and at Center for International Development,{" "}
        <Link href="https://epod.cid.harvard.edu/" target="_blank">
          Harvard University
        </Link>
        , where I built tools that enabled data-informed public policy.
      </p>
      <p>
        I studied Electronics and Communication Engineering, where I built
        embedded systems and developed an early fascination with how complex
        systems behave. Over time, that curiosity pulled me into software. Since
        then, I’ve spent years in distributed systems, software architecture,
        developer tools, machine learning infrastructure and contributing to
        open-source.
      </p>
      <p>
        My work spans engineering strategy, platform architecture, and building
        high-performing teams with a focus on systems that scale and products
        that feel seamless.
      </p>
      <p>
        You can explore my work through my essays or find me on{" "}
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
