"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 60);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed left-1/2 top-[18px] z-[200] flex w-[min(1180px,calc(100%-32px))] -translate-x-1/2 items-center justify-between rounded-full border border-white/20 py-3 pl-4 pr-3 text-white backdrop-blur-[18px] transition-colors duration-500 max-md:top-2.5 ${
          scrolled ? "bg-forest-night/80" : "bg-[rgba(10,20,16,0.38)]"
        }`}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="VARMA AURA home">
          <Image src="/logo.png" alt="" width={40} height={40} className="h-[34px] w-auto" />
          <span className="hidden font-serif text-lg tracking-[0.16em] sm:inline">
            VARMA AURA
          </span>
        </Link>

        <nav className="hidden gap-7 text-[13px] md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b pb-0.5 transition-opacity hover:opacity-100 ${
                  active ? "border-gold-soft opacity-100" : "border-transparent opacity-80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/visit"
            className="rounded-full border border-white/50 px-4 py-2.5 text-xs transition-colors hover:bg-white hover:text-ink"
          >
            Plan a Visit
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Open menu"
          >
            <span className="h-[1.5px] w-5 bg-white" />
            <span className="h-[1.5px] w-5 bg-white" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[300] flex flex-col justify-center bg-forest-deep p-[8vw]"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 0.84, 0.28, 1] }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-[6vw] top-7 rounded-full border border-white/30 px-4 py-2 text-xs text-cream"
            >
              Close ✕
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-3.5 font-serif text-4xl text-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/visit"
              className="mt-8 inline-block w-fit rounded-full bg-gold px-7 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-forest-deep"
            >
              Plan a Visit
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
