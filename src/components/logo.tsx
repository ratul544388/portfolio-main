import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn(className)}>
      <Image src="/logo.png" alt="Logo" width={80} height={39.5}/>
    </Link>
  );
};
