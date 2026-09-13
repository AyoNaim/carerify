type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow && (
        <p
          className={[
            "mb-5 text-xs font-semibold uppercase tracking-[0.18em]",
            light ? "text-[#8FB39B]" : "text-[#667085]",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={[
          "text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[clamp(2.75rem,4.5vw,4.5rem)]",
          light ? "text-white" : "text-[#172033]",
        ].join(" ")}
      >
        {title}
      </h2>

      {description && (
        <p
          className={[
            "mt-6 max-w-2xl text-base leading-8 sm:text-lg",
            align === "center" ? "mx-auto" : "",
            light ? "text-white/70" : "text-[#667085]",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}