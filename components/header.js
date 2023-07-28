import Link from 'next/link'
import { useRouter } from 'next/router';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';

const Menu = () => {
  const router = useRouter();
  return (
    <div className="menu">
      <Link href="/" className={router.pathname == "/" ? "active" : ""}>Bio.</Link>
      <Link href="/work" className={router.pathname == "/work" ? "active" : ""}>Work.</Link>
      <Link href="/posts" className={router.pathname == "/posts" ? "active" : ""}>Posts.</Link>
      <Link href="/talks" className={router.pathname == "/talks" ? "active" : ""}>Talks.</Link>
      <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""}>Connect.</Link>
    </div>
  )
}

export default function Header() {

  return (
    <div className="header">
      <Link href="/" className="header__logo">Ravi Suhag</Link>
      <div className='navbar'>
        <Menu />
      </div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <HamburgerMenuIcon className='navbar__open' />
        </Popover.Trigger>
        <Popover.Anchor className='navbar__anchor' />
        <Popover.Portal>
          <Popover.Content className='navbar__mobile'>
            <Popover.Close asChild>
              <div className='navbar__close'><Cross2Icon /></div>
            </Popover.Close>
            <Menu />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}
