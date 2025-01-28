import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
  color?: "white" | "purple";
}

export const Logo = ({ className, color = "purple" }: LogoProps) => {
  return (
    <Link
      href="/"
      style={{
        clipPath: "polygon(0 0, 73% 0, 100% 74%, 100% 100%, 36% 100%, 0 65%)",
      }}
      className={cn(
        "flex h-[4rem] min-w-[3rem] flex-col bg-primary pl-1 pr-3 pt-1 font-teko font-bold leading-5 tracking-tight text-white",
        color === "white" && "bg-white text-foreground",
        className,
      )}
    >
      PORT- <br />
      FOL- <br />
      <span className="ml-3">IO</span>
    </Link>
  );
};
