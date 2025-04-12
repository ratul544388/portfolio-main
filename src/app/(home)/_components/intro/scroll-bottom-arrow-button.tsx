"use client";

import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export const ScrollBottomArrowButton = () => {


  return (
    <Link
      href="#about"
      className="relative mx-auto mt-20 flex size-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:text-foreground"
    >
      <FaArrowDown className="animate-bounce" />
      <span className="absolute block size-full animate-ping rounded-full border" />
    </Link>
  );
}

