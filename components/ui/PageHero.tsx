import type { ReactNode } from "react";
import HeroSlideshow from "./HeroSlideshow";

export default function PageHero({
  image,
  images,
  eyebrow,
  title,
}: {
  image?: string;
  images?: string[];
  eyebrow: string;
  title: ReactNode;
}) {
  const slides = images && images.length > 0 ? images : image ? [image] : [];

  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-forest-deep">
      <HeroSlideshow images={slides} priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/65" />
      <div className="relative z-[2] w-full px-[7vw] pb-[9vh] pt-40 text-white">
        <div className="mb-[18px] text-[11px] uppercase tracking-[0.22em] text-white/80">
          {eyebrow}
        </div>
        <h1 className="max-w-[900px] text-[clamp(44px,7.4vw,104px)] leading-[0.9] text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
