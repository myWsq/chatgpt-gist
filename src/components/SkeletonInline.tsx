import clsx from "clsx";
import { forwardRef } from "react";

export interface SkeletonInlineProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  lens?: number;
}

export const SkeletonInline = forwardRef<HTMLSpanElement, SkeletonInlineProps>(
  ({ children, lens = 10, ...props }, ref) => {
    const placeholder = "\u2003".repeat(lens);
    const showPlaceholder = !children;
    return (
      <span ref={ref} {...props}>
        {showPlaceholder ? (
          <span
            className={clsx(
              "break-all",
              showPlaceholder && "bg-geist-accent-2/50 rounded-sm select-none"
            )}
          >
            {placeholder}
          </span>
        ) : (
          children
        )}
      </span>
    );
  }
);

SkeletonInline.displayName = "SkeletonInline";
