import Image from "next/image";
import type { AmenityCard as AmenityCardType } from "@/lib/data";

export default function AmenityCard({
  item,
}: {
  item: AmenityCardType;
  delay?: number;
}) {
  const isOpen = item.status === "open";

  return (
    <article className="tile aspect-[4/5]">
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <span
        className={`absolute left-4 top-4 z-[2] inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] ${
          isOpen ? "bg-gold text-forest-deep" : "bg-white/90 text-ink"
        }`}
      >
        {isOpen ? "Open now" : "Coming soon"}
      </span>
      <div className="absolute inset-x-6 bottom-6 z-[2]">
        <h3 className="text-[30px] leading-none text-white">{item.name}</h3>
        <p className="mt-2.5 text-[13px] text-white/80">{item.desc}</p>
      </div>
    </article>
  );
}
