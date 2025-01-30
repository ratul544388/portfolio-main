"use client";
import { Logo } from "@/components/logo";
import { navLinks, socialLinks } from "@/constants";
import { useRouterHash } from "@/hooks/use-router-hash";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { buttonVariants } from "./ui/button";
import { ThemeToggler } from "./theme-toggler";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 bg-background/50 backdrop-blur-xl">
      <Container
        elem="header"
        className="flex h-full items-center justify-between"
      >
        <Logo />
        <Suspense>
          <Navbar />
        </Suspense>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <ThemeToggler className="hidden md:block" />
          <Suspense>
            <MobileMenu />
          </Suspense>
        </div>
      </Container>
      <ScrollLine />
    </header>
  );
};

const Navbar = () => {
  const hash = useRouterHash();

  return (
    <Suspense fallback="">
      <nav className="hidden sm:block">
        <ul className="flex">
          {navLinks.map(({ label, href }) => {
            const isActive = hash === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "relative rounded-full font-chakra_petch text-base",
                  )}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activeHash"
                      className="absolute inset-x-4 top-full h-1 rounded-full bg-gradient"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Suspense>
  );
};

const SocialLinks = () => {
  return (
    <nav className="hidden lg:block ">
      <ul className="flex">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="block rounded-full p-2 transition-colors hover:bg-accent"
            >
              <Icon className="size-4" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ScrollLine = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.span
      className="bg-gradient absolute inset-0 top-[calc(100%_-_4px)] h-1 bg-gradient-to-r"
      style={{ scaleX: scrollYProgress, originX: 0, borderRadius: 9999 }}
    />
  );
};
