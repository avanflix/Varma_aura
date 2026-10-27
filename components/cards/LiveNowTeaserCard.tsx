"use client";

import Image from "next/image";
import { useBooking } from "@/components/booking/BookingProvider";
import Button from "@/components/ui/Button";

export default function LiveNowTeaserCard({
  name,
  image,
  imageAlt,
}: {
  name: string;
  image: string;
  imageAlt: string;
  delay?: number;
}) {
  const { openBooking } = useBooking();

  return (
    <article className="tile min-h-[68vh] max-md:min-h-[58vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover opacity-85"
      />
      <div className="absolute inset-x-8 bottom-8 z-[2]">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#8fbf72]" />
          Live now
        </div>
        <h3 className="mb-[18px] mt-2 text-[clamp(32px,3vw,44px)] leading-none">{name}</h3>
        <Button variant="outline" arrow onClick={() => openBooking(name)}>
          Book a game
        </Button>
      </div>
    </article>
  );
}
