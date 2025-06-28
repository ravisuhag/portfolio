"use client";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

// Extract navigation items to a constant
const NAVIGATION_ITEMS = [
  // { path: "/", label: "bio." },
  { path: "/work", label: "work." },
  { path: "/posts", label: "thoughts." },
  { path: "/talks", label: "talks." },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="menu">
      {NAVIGATION_ITEMS.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={pathname === path ? "active" : ""}
          aria-current={pathname === path ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

const MobileMenu = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <div className="navbar__open">
        <HamburgerMenuIcon />
      </div>
    </Popover.Trigger>
    <Popover.Anchor className="navbar__anchor" />
    <Popover.Portal>
      <Popover.Content className="navbar__mobile" aria-label="Navigation menu">
        <Popover.Close asChild>
          <div className="navbar__close">
            <Cross2Icon />
          </div>
        </Popover.Close>
        <Menu />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default function Header() {
  return (
    <div className="header">
      <Link href="/" className="header__logo">
        Ravi Suhag
      </Link>
      <div className="navbar">
        <Menu />
      </div>
      <MobileMenu />
    </div>
  );
}
