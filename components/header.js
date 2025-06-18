"use client";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

// Extract navigation items to a constant
const NAVIGATION_ITEMS = [
  { path: "/", label: "Bio." },
  { path: "/work", label: "Work." },
  { path: "/posts", label: "Writing." },
  { path: "/talks", label: "Talks." },
  { path: "/contact", label: "Connect." },
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
      <button type="button" className="navbar__open" aria-label="Open menu">
        <HamburgerMenuIcon />
      </button>
    </Popover.Trigger>
    <Popover.Anchor className="navbar__anchor" />
    <Popover.Portal>
      <Popover.Content className="navbar__mobile" aria-label="Navigation menu">
        <Popover.Close asChild>
          <button
            type="button"
            className="navbar__close"
            aria-label="Close menu"
          >
            <Cross2Icon />
          </button>
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
