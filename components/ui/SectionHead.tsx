import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  heading,
  paragraph,
  center = false,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  heading: string;
  paragraph?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={`max-w-[760px] ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      <div className={`kicker ${dark ? "kicker-dark" : ""}`}>{eyebrow}</div>
      <h2
        className={`mt-3 text-[clamp(38px,5.4vw,72px)] leading-[0.98] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      {paragraph && (
        <p
          className={`mt-6 max-w-[560px] text-[17px] leading-[1.8] ${
            center ? "mx-auto" : ""
          } ${dark ? "text-cream/65" : "text-ink-soft"}`}
        >
          {paragraph}
        </p>
      )}
    </Reveal>
  );
}
