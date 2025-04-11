import { navLinks } from "@/constants";
import { motion } from "framer-motion";
import { useRouterHash } from "@/hooks/use-router-hash";
import Link from "next/link";
import { Suspense } from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export const DesktopNavLinks = () => {
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