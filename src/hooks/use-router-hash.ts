"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useRouterHash = () => {
  const searchParams = useSearchParams();
  const [hash, setHash] = useState<string>();

  useEffect(() => {
    setHash(window.location.hash);
  }, [searchParams]);

  return hash;
};
