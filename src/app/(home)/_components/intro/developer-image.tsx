"use client";

import Image from "next/image";

export const DeveloperImage = () => {
  return (
    <div className="absolute bottom-0 size-52 -translate-x-1/2 translate-y-1/2">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        className="hidden object-cover dark:block"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* <Image
        src="/hero-light.jpg"
        alt="hero"
        fill
        className="object-cover dark:hidden"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      /> */}
    </div>
  );
};
