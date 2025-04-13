"use client";
import { Logo } from "@/components/logo";
import { Container } from "../container";
import { MobileMenu } from "../mobile-menu";
import { ThemeToggler } from "../theme-toggler";
import { DesktopNavLinks } from "./desktop-nav-links";
import { ScrollProgressLine } from "./scroll-progress-line";
import { SocialLinks } from "./social-links";
import { Suspense } from "react";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b bg-background/50 backdrop-blur-xl">
      <Suspense fallback="">
        <Container
          elem="header"
          className="flex h-full items-center justify-between"
        >
          <Logo />
          <DesktopNavLinks />
          <div className="flex items-center gap-3">
            <SocialLinks />
            <ThemeToggler />
            <MobileMenu />
          </div>
        </Container>
        <ScrollProgressLine />
      </Suspense>
    </header>
  );
};
