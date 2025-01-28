"use client";
import { Logo } from "@/components/logo";
import { navLinks } from "@/constants";
import { useRouterHash } from "@/hooks/use-router-hash";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { buttonVariants } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-background/50 backdrop-blur-xl sticky top-0 inset-x-0 z-50 h-20">
      <Container
        elem="header"
        className="flex h-full items-center justify-between"
      >
        <Logo />
        <Navbar />
        <MobileMenu />
        <span className="hidden sm:block" aria-hidden="true" />
      </Container>
    </header>
  );
};

const Navbar = () => {
  const hash = useRouterHash();

  return (
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
                    className="absolute inset-x-4 top-full h-1 rounded-full bg-primary"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
