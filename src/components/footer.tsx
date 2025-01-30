"use client";

import { socialLinks } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { WhileInView } from "./while-in-view";

export const Footer = () => {
  return (
    <footer className="mt-32 w-full overflow-hidden bg-background-2 text-white">
      <WhileInView y={100}>
        <Container className="flex flex-col items-center justify-center gap-4 py-10 lg:flex-row lg:justify-between lg:gap-10 lg:px-20">
          <Logo />
          <ul className="flex gap-2 lg:order-3">
            {socialLinks.map(({ href, icon: Icon }) => (
              <motion.li
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                key={href}
              >
                <Link href={href} className="inline-block p-2">
                  <Icon className="size-4" />
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-col text-gray-400 dark:text-muted-foreground items-center gap-1 lg:order-2 lg:flex-row lg:gap-4">
            <p className="font-chakra_petch text-sm">Copyright © 2024</p>
            <span className="hidden lg:block">{`//`}</span>
            <p>© 2024 <span className="font-bold">Ratul</span>. All rights reserved.</p>
          </div>
        </Container>
      </WhileInView>
    </footer>
  );
};
