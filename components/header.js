'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';

const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="menu">
      <Link href="/" className={pathname == "/" ? "active" : ""}>Bio.</Link>
      <Link href="/work" className={pathname == "/work" ? "active" : ""}>Work.</Link>
      <Link href="/posts" className={pathname == "/posts" ? "active" : ""}>Writing.</Link>
      <Link href="/talks" className={pathname == "/talks" ? "active" : ""}>Talks.</Link>
      <Link href="/contact" className={pathname == "/contact" ? "active" : ""}>Connect.</Link>
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
