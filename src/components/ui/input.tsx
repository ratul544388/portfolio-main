import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { label?: string }
>(({ className, type, label, ...props }, ref) => {
  const value = props.value;
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "peer flex h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
      <span
        className={cn(
          "pointer-events-none absolute left-1.5 top-1/2 -translate-y-1/2 px-2 text-sm text-primary transition-all peer-focus:left-[5px] peer-focus:top-[12px] peer-focus:text-xs",
          value && "left-[5px] top-[12px] text-xs",
        )}
      >
        {label}
      </span>
    </div>
  );
});
Input.displayName = "Input";

export { Input };
