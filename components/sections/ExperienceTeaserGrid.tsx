import Image from "next/image";
import { experienceTeasers } from "@/lib/data";

export default function ExperienceTeaserGrid() {
  return (
    <div className="mt-[60px] grid grid-cols-1 gap-[2px] bg-line md:grid-cols-2">
      {experienceTeasers.map((item) => (
        <article key={item.title} className="tile min-h-[62vh] max-md:min-h-[52vh]">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-x-8 bottom-[30px] z-[2]">
            <h3 className="mb-2.5 text-[clamp(34px,3.4vw,46px)] leading-none text-white">
              {item.title}
            </h3>
            <p className="max-w-[420px] text-[13px] leading-relaxed text-white/80">
              {item.desc}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
