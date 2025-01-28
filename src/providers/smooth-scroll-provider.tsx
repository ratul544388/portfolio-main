"use client";

import Lenis from "lenis";
import { PropsWithChildren, useEffect } from "react";

export const SmoothScrollProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};
