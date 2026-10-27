import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import StatCounter from "@/components/ui/StatCounter";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import ExperienceTeaserGrid from "@/components/sections/ExperienceTeaserGrid";
import LiveNowTeaserCard from "@/components/cards/LiveNowTeaserCard";
import AmenityCard from "@/components/cards/AmenityCard";
import { comingSoonAmenities, liveActivities, locationAdvantages } from "@/lib/data";

const heroImages = [
  "/Hero_ariel.png",
  "/Swimming_pool.png",
  "/Open_dining.png",
  "/Kids_play_area.png",
  "/Football_play.png",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-deep text-white">
        <HeroSlideshow images={heroImages} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/65" />
        <div className="relative z-[2] max-w-[880px] px-[7vw] pb-[9vh] pt-40">
          <div className="mb-[18px] text-[11px] uppercase tracking-[0.22em] text-white/80">
            A 10-acre resort living experience
          </div>
          <h1 className="text-[clamp(58px,10vw,132px)] leading-[0.85]">
            Live the
            <br />
            Resort Life.
          </h1>
          <p className="my-7 max-w-[570px] text-[clamp(16px,2vw,22px)] leading-[1.55] text-white/90">
            Where nature, recreation and community come together, near Bobbili,
            Andhra Pradesh.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#live-now" variant="outline">
              Book a game
            </Button>
            <Link
              href="/visit"
              className="inline-flex items-center rounded-full px-5 py-[14px] text-xs font-medium uppercase tracking-[0.1em] text-white/90 underline-offset-4 hover:underline"
            >
              Plan a visit
            </Link>
          </div>
        </div>
        <div className="absolute bottom-[8vh] right-[7vw] z-[2] hidden text-[11px] uppercase tracking-[0.16em] text-white/70 [writing-mode:vertical-rl] md:block">
          Scroll to explore
        </div>
      </section>

      {/* INTRO */}
      <section className="py-[120px] max-md:py-[82px]">
        <div className="wrap grid grid-cols-1 items-end gap-[8vw] md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="kicker">The Varma Aura vision</div>
            <h2 className="mt-3 text-[clamp(42px,6vw,82px)] leading-[0.95]">
              More than a destination.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[clamp(20px,2.4vw,30px)] leading-[1.35]">
              A thoughtfully designed 10-acre lifestyle resort community where
              a day becomes a memory.
            </p>
            <p className="mt-6 max-w-[620px] leading-[1.8] text-ink-soft">
              Open lawns and quiet mornings, active afternoons and long evenings
              with people who matter. Varma Aura is designed to become a vibrant
              destination for recreation, celebration and community living.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-14 gap-y-8">
              <StatCounter target={10} label="Acres of resort grounds" />
              <StatCounter target={3} label="Live sport experiences" />
              <StatCounter target={8} label="Amenities & spaces" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FULL IMAGE */}
      <div className="px-[3vw]">
        <div className="relative h-[min(78vh,780px)] overflow-hidden rounded-[2px]">
          <Image
            src="/Event_Open.png"
            alt="The open party lawn at Varma Aura"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* EXPERIENCES */}
      <section className="pb-[120px] pt-[140px] max-md:py-[82px]">
        <div className="wrap">
          <SectionHead
            eyebrow="The Aura experience"
            heading="Sport. Leisure. Dining. Family. Stay. Events."
            paragraph="Life here isn't listed in amenities. It's lived in moments."
          />
          <ExperienceTeaserGrid />
          <div className="mt-10">
            <Button href="/experience" variant="outline-dark">
              See the full experience
            </Button>
          </div>
        </div>
      </section>

      {/* LIVE NOW */}
      <section id="live-now" className="scroll-mt-4 bg-forest-deep py-[120px] text-cream max-md:py-[82px]">
        <div className="wrap">
          <SectionHead
            dark
            eyebrow="Live now"
            heading="Come to play."
            paragraph="Three sport experiences are open today, with online booking."
          />
          <div className="mt-[60px] grid grid-cols-1 gap-[2px] md:grid-cols-3">
            {liveActivities.map((a) => (
              <LiveNowTeaserCard
                key={a.name}
                name={a.name}
                image={a.image}
                imageAlt={a.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="bg-cream-deep py-[120px] max-md:py-[82px]">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow="The world is growing"
              heading="And there is more to come."
            />
            <Button href="/amenities" variant="outline-dark">
              All amenities
            </Button>
          </div>
          <div className="mt-[55px] grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoonAmenities.map((item) => (
              <AmenityCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-forest py-[120px] text-cream max-md:py-[82px]">
        <div className="wrap grid grid-cols-1 items-center gap-[7vw] md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
            <Image
              src="/Location1.png"
              alt="Aerial view of the Varma Aura location"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="kicker kicker-dark">Location</div>
            <h2 className="mt-3 text-[clamp(36px,4.6vw,62px)] leading-[0.98]">
              Well connected. Beautifully away.
            </h2>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {locationAdvantages.map((line) => (
                <li key={line} className="py-4 text-[15px] leading-relaxed text-cream/80">
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/location" variant="outline">
                Find us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INVITE */}
      <section className="grid min-h-[75vh] place-items-center bg-cream-sand px-[7vw] py-[100px] text-center">
        <Reveal>
          <div className="kicker">Make Aura yours</div>
          <h2 className="mx-auto mt-3 max-w-[850px] text-[clamp(42px,6vw,82px)] leading-[0.95]">
            Some experiences are worth returning to.
          </h2>
          <p className="mx-auto mb-8 mt-6 max-w-[520px] text-lg text-ink-soft">
            Secure your place in a destination designed for recreation,
            lifestyle and future growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/visit#enquiry" variant="primary">
              Explore private ownership
            </Button>
            <Button href="/visit" variant="outline-dark">
              Visit first
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
