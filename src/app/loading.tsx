"use client";
import { Logo } from "@/components/logo";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-foreground">
      <div className="absolute size-36 animate-spin rounded-full border-[7px] border-white border-l-transparent border-r-transparent"></div>
      <Logo color="white" />
      <div className="absolute inset-0 -z-10 grid grid-cols-4 md:grid-cols-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="h-screen w-1.5 bg-white/5" />
        ))}
      </div>
    </div>
  );
};

export default Loading;
