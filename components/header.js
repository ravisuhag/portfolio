import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <Link href="/"><a><Image src="/logo.png" width={26} height={32} /></a></Link>
      <div className="navbar">
        <Link href="/bio"><a className={router.pathname == "/bio" ? "active" : ""}>Bio.</a></Link>
        <Link href="/posts"><a className={router.pathname == "/posts" ? "active" : ""}>Posts.</a></Link>
        <Link href="/talks"><a className={router.pathname == "/talks" ? "active" : ""}>Talks.</a></Link>
        {/* <Link href="/projects"><a className={router.pathname == "/projects" ? "active" : ""}>Projects</a></Link> */}
        <Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact.</a></Link>
      </div>
    </div>
  )
}
