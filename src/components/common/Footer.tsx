'use client';

import { Wheat } from "lucide-react";
import Link from "next/link";
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/#contact" },
  { title: "Terms of Service", href: "/#terms" },
];

const Footer = () => {
  return (
    <footer className="border-t bg-background px-6 py-2">
      <div className="mx-auto w-full max-w-screen-2xl divide-y">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-between gap-4 px-2 pt-3 pb-5 sm:flex-row"
        >
          <Link className="flex items-center gap-2" href="/">
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
              <Wheat />
            </motion.div>
            <span className="font-medium text-xl">BondTrack</span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium text-sm">
            {links.map(({ title, href }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={href} className="hover:opacity-70 transition">
                  {title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col-reverse items-center justify-between gap-4 px-2 pt-4 pb-2 sm:flex-row"
        >
          <p className="font-medium text-muted-foreground text-sm">
            Copyright &copy; {new Date().getFullYear()} BondTrack. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[FaDribbble, FaTwitter, FaGithub].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;