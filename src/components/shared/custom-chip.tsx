import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

const CustomChip = React.forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, ...rest }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "relative inline-block px-4 text-background before:absolute before:left-0 before:top-0 before:z-[-1] before:size-full before:-rotate-1 before:bg-foreground",
        className
      )}
      {...rest}
    />
  );
});
CustomChip.displayName = "CustomChip";

export default CustomChip;
