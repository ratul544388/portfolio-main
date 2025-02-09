import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & {
    label?: string;
  }
>(({ label, className, ...props }, ref) => {
  return (
    <div className="relative">
      <textarea
        className={cn(
          "thin-scrollbar peer flex max-h-[200px] min-h-16 w-full resize-none rounded-md border border-white/10 bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
        ref={ref}
        {...props}
      />
      <span
        className={cn(
          "pointer-events-none absolute left-1.5 top-3 px-2 text-sm text-gray-400 transition-all peer-focus:top-[-10px] peer-focus:bg-background-2 peer-focus:text-xs peer-focus:text-primary dark:text-muted-foreground",
          props.value && "top-[-10px] bg-foreground text-xs",
        )}
      >
        {label}
      </span>
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
