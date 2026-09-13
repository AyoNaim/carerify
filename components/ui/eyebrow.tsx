import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  number?: string;
  light?: boolean;
  className?: string;
};

export function Eyebrow({
  children,
  number,
  light = false,
  className = "",
}: EyebrowProps) {
  return (
    <div
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {number && (
        <span
          className="font-[var(--font-body)] text-[0.625rem] font-medium tracking-[0.12em]"
          style={{
            color: light
              ? "rgba(255,255,255,0.5)"
              : "rgba(27,45,91,0.45)",
          }}
        >
          {number}
        </span>
      )}

      <span
        className="relative inline-flex items-center gap-2.5 font-[var(--font-body)] text-[0.625rem] font-semibold uppercase tracking-[0.18em]"
        style={{
          color: light
            ? "rgba(255,255,255,0.78)"
            : "rgba(23,32,51,0.68)",
        }}
      >
        {/* Editorial marker */}
        <span
          className="relative h-[5px] w-[5px] shrink-0 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.5]"
          style={{
            backgroundColor: "#8fb39b",
          }}
          aria-hidden="true"
        />

        {children}

        {/* Small interaction line */}
        <span
          className="absolute -bottom-2 left-[18px] h-px w-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%-18px)]"
          style={{
            backgroundColor: light
              ? "rgba(255,255,255,0.35)"
              : "rgba(27,45,91,0.25)",
          }}
          aria-hidden="true"
        />
      </span>
    </div>
  );
}