"use client";
import { Logo } from "@/components/logo";
import { Suspense } from "react";
import { Container } from "../container";
import { MobileMenu } from "../mobile-menu";
import { ThemeToggler } from "../theme-toggler";
import { DesktopNavLinks } from "./desktop-nav-links";
import { ScrollProgressLine } from "./scroll-progress-line";
import { SocialLinks } from "./social-links";

export const Header = () => {
  return (
    <header className="fixed border-b inset-x-0 top-0 z-50 h-20 bg-background/50 backdrop-blur-xl">
      <Container
        elem="header"
        className="flex h-full items-center justify-between"
      >
        <Logo />
        <DesktopNavLinks/>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <ThemeToggler />
          <Suspense>
            <MobileMenu />
          </Suspense>
        </div>
      </Container>
      <ScrollProgressLine />
    </header>
  );
};