import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <Link href="/"><a className="header__logo">Ravi Suhag</a></Link>
      <div className="navbar">
        <Link href="/"><a className={router.pathname == "/" ? "active" : ""}>Bio.</a></Link>
        <Link href="/work"><a className={router.pathname == "/work" ? "active" : ""}>Work.</a></Link>
        <Link href="/posts"><a className={router.pathname == "/posts" ? "active" : ""}>Posts.</a></Link>
        <Link href="/talks"><a className={router.pathname == "/talks" ? "active" : ""}>Talks.</a></Link>
        <Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact.</a></Link>
      </div>
    </div>
  )
}
