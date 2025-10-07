import { ComponentPropsWithoutRef, CSSProperties, FC } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 120,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "inline-flex items-center justify-center text-center text-transparent",
        "mx-auto max-w-md bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",
        "bg-[length:var(--shiny-width)_100%] bg-clip-text",
        "animate-[shiny-text_8s_cubic-bezier(.6,.6,0,1)_infinite]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
