import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <Link href="/" className="header__logo">Ravi Suhag</Link>
      <div className="navbar">
        <Link href="/" className={router.pathname == "/" ? "active" : ""}>Bio.</Link>
        <Link href="/work" className={router.pathname == "/work" ? "active" : ""}>Work.</Link>
        <Link href="/posts" className={router.pathname == "/posts" ? "active" : ""}>Posts.</Link>
        <Link href="/talks" className={router.pathname == "/talks" ? "active" : ""}>Talks.</Link>
        <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""}>Connect.</Link>
      </div>
    </div>
  )
}
