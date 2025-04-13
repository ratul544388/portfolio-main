"use client";
import { Logo } from "@/components/logo";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="absolute size-36 animate-spin rounded-full border-[7px] border-primary border-l-transparent border-r-transparent dark:border-foreground dark:border-l-transparent dark:border-r-transparent"></div>
      <Logo />
      <div className="absolute inset-0 -z-10 grid grid-cols-4 md:grid-cols-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="h-screen w-1.5 bg-secondary/40" />
        ))}
      </div>
    </div>
  );
};

export default Loading;
