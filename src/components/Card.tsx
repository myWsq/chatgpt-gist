import clsx from "clsx";

export type CardSettingsProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export const Card: React.FunctionComponent<CardSettingsProps> = ({
  children,
  title,
  description,
  footer,
  ...props
}) => {
  const showHeader = title || description;
  return (
    <div className={clsx("border rounded-lg shadow-sm", props.className)}>
      {/* Header */}
      {showHeader && (
        <div
          className={clsx("px-6 pt-6", children || footer ? "pb-4" : "pb-6")}
        >
          {title && (
            <div className="text-lg font-semibold text-geist-foreground">
              {title}
            </div>
          )}
          {description && (
            <div
              className={clsx("text-base text-geist-accent-6", title && "mt-1")}
            >
              {description}
            </div>
          )}
        </div>
      )}
      {/* Body */}
      {children && (
        <div className={clsx("px-6 pb-6", showHeader ? "pt-2.5" : "pt-4")}>
          {children}
        </div>
      )}
      {/* Footer */}
      {footer && (
        <div className={clsx("px-6 py-4 bg-geist-accent-1")}>{footer}</div>
      )}
    </div>
  );
};
