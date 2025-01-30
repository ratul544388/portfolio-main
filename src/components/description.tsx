"use client";

import { cn } from "@/lib/utils";
import React from "react";

type DescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Description = ({ className, children }: DescriptionProps) => {
    return (
        <p className={cn("font-chakra_petch text-muted-foreground", className)}>
            {children}
        </p>
    )
};
