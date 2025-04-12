import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

export const DesktopNavLinks = () => {
    const pathname = usePathname();
  
    return (
        <nav className="hidden sm:block">
          <ul className="flex">
            {navLinks.map(({ label, href }) => {
              const isActive = href === pathname;
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
    );
  };