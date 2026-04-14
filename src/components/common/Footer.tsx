import {  Wheat } from "lucide-react";
import Link from "next/link";


import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa";


const links = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
  {
    title: "Terms of Service",
    href: "/#terms",
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-background px-6 py-2">
      <div className="mx-auto w-full max-w-screen-2xl divide-y">
        <div className="flex flex-col items-center justify-between gap-4 px-2 pt-3 pb-5 sm:flex-row">
          <Link className="flex items-center gap-2" href="/">
            <Wheat />
            <span className="font-medium text-xl">BondTrack</span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium text-sm">
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-4 px-2 pt-4 pb-2 sm:flex-row">
          <p className="font-medium text-muted-foreground text-sm">
            Copyright &copy; {new Date().getFullYear()} BondTrack. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/">
              <FaDribbble  className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link href="/">
              <FaTwitter  className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link href="/">
              <FaGithub  className="h-5 w-5 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
