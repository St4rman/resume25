"use client";

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About Me",
    path: "/aboutme",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const ResponsiveNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center px-2">
        <GiHamburgerMenu className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col">
        <SheetTitle className="sr-only">menu</SheetTitle>

        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1>Idhant</h1>
          </Link>
        </div>     
        <RNav />
      </SheetContent>
    </Sheet>
  );
};

const RNav = (props) => {
  const pathname = usePathname();
  return (
    <nav
      className="flex flex-col justify-center items-center gap-8"
    >
      {links.map((link, index) => {
        return (
          <SheetClose asChild key={index}>
          <Link
            href={link.path}
            key={index}
            className={`text-xl capitalize hover:text-accent transition:colors  ${
              link.path === pathname && "text-accent border-b-2 border-accent"
            }`}
          >
            * {link.name}
          </Link>
          </SheetClose>
        );
      })}
    </nav>
  );
};

export default ResponsiveNav;
