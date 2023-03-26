import clsx from "clsx";
import { forwardRef } from "react";

export type SkeletonBlockProps = React.HTMLAttributes<HTMLDivElement>;

export const SkeletonBlock = forwardRef<HTMLDivElement, SkeletonBlockProps>(
  ({ children, ...props }, ref) => {
    const showPlaceholder = !children;
    return (
      <div
        ref={ref}
        {...props}
        className={clsx(
          props.className,
          showPlaceholder && "bg-geist-accent-2/50 rounded select-none"
        )}
      >
        {children}
      </div>
    );
  }
);

SkeletonBlock.displayName = "SkeletonBlock";
