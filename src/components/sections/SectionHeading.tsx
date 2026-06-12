interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 lg:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      }`}
    >
      {label && (
        <p
          className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            light ? "text-gold-400" : "text-gold-500"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-3xl lg:text-4xl font-bold leading-tight accent-line ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-base lg:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-navy-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
