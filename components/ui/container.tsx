import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow" | "full";
};

const sizes = {
  default: "max-w-[1440px]",
  wide: "max-w-[1680px]",
  narrow: "max-w-[1120px]",
  full: "max-w-none",
};

export function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        px-[var(--page-padding)]
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}