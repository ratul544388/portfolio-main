"use client";

import { navLinks, socialLinks } from "@/constants";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="mt-40 relative w-full overflow-hidden border-t bg-background">
      <Container className="flex flex-wrap gap-x-20 gap-y-10 py-12">
        <section className="">
          <Logo />
          <div className="mt-1 flex-wrap flex gap-2 font-chakra_petch">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-medium text-transparent">
              RatulCodes
            </span>
            💖 Designed & Built by Ratul — Sleek, Speedy, and Full of Life.
          </div>
          <div className="mt-5 flex w-fit items-center gap-3 rounded-lg border px-3 py-2">
            <Image src="/medel.png" alt="Medel" width={35} height={35} />
            <div>
              <p className="font-chakra_petch text-xs font-medium uppercase">
                Built with Passion
              </p>
              <p className="font-rowdies">#1 Featured Dev Project</p>
            </div>
          </div>
          <div className="mt-5 flex w-fit items-center gap-3 rounded-lg bg-secondary/40 px-3 py-2 font-chakra_petch">
            <Check className="size-4 rounded-full bg-green-500" />
            <p>Everything&apos;s live — Learning never stops.</p>
          </div>
        </section>
        <section className="flex gap-16 lg:ml-auto lg:mr-20">
          <div>
            <h5 className="font-rowdies">PAGES</h5>
            <ul className="mt-2 space-y-1 font-chakra_petch">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-rowdies">FOLLOW ME</h5>
            <ul className="mt-2 space-y-1 font-chakra_petch">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-muted-foreground hover:underline"
                  >
                    <Icon className="size-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="flex w-full flex-wrap gap-8 border-t pt-6 font-chakra_petch text-sm text-muted-foreground sm:justify-between sm:gap-20">
          <p>© 2025 Ratul Hossain. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:underline">
              Term and Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </section>
      </Container>
      <span className="absolute h-20 w-[75%] opacity-30 left-1/2 -translate-x-1/2 bottom-10 blur-3xl rounded-full bg-primary"/>
    </footer>
  );
};
