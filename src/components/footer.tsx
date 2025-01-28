"use client";

import { socialLinks } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { WhileInView } from "./while-in-view";

export const Footer = () => {
  return (
    <footer className="w-full bg-foreground text-white overflow-hidden mt-32">
      <WhileInView y={100}>
        <Container className="flex flex-col items-center justify-center lg:justify-between lg:px-20 gap-4 py-10 lg:flex-row lg:gap-10">
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
          <div className="flex lg:order-2 flex-col lg:flex-row items-center gap-1 lg:gap-4">
            <p className="font-chakra_petch text-sm">Copyright © 2024</p>
            <span className="hidden lg:block">{`//`}</span>
            <p className="font-chakra_petch text-sm">
              Design with 🧡 by{" "}
              <span className="text-primary">Ratul Hossain</span>
            </p>
          </div>
        </Container>
      </WhileInView>
    </footer>
  );
};
