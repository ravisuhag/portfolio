import Link from "next/link";
import PageLayout from "../../components/page-layout";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata.contact;

export default function Contact() {
  return (
    <PageLayout>
      <h1>Let&apos;s get in touch.</h1>
      <p>
        Feel free to{" "}
        <Link target="_blank" href="mailto:suhag.ravi@gmail.com">
          contact
        </Link>{" "}
        me about interesting opportunities, collaborations or thought provoking
        discussions.
      </p>
      <p>
        I am sharing most of my code on{" "}
        <Link target="_blank" href="https://github.com/ravisuhag">
          Github
        </Link>
        , some of my design work on{" "}
        <Link target="_blank" href="https://www.behance.net/ravisuhag">
          Behance
        </Link>
        , random thoughts on{" "}
        <Link target="_blank" href="https://twitter.com/Ravi_Suhag">
          Twitter
        </Link>
        , everyday moments on{" "}
        <Link target="_blank" href="https://www.instagram.com/ravisuhag/">
          Instagram
        </Link>
        , articles on{" "}
        <Link target="_blank" href="https://ravisuhag.medium.com/">
          Medium
        </Link>{" "}
        and meeting startups on{" "}
        <Link target="_blank" href="https://angel.co/u/ravisuhag">
          Angel List
        </Link>
        . Full resume is available on{" "}
        <Link target="_blank" href="https://www.linkedin.com/in/ravisuhag/">
          Linkedin
        </Link>
        .
      </p>
      <p>
        Please note that I receive a lot of emails, so it may take me a while to
        get back to you. If I do seem to be taking a while to respond, please
        feel free to send me a follow-up email to remind to reply, that
        certainly won&apos;t offend me.
      </p>
      <p>
        Drop me an email at suhag.ravi@gmail.com or call me on (+91)9717860747.
      </p>
    </PageLayout>
  );
}
