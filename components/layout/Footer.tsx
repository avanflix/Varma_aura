import Image from "next/image";
import Link from "next/link";
import { footerColumns, site } from "@/lib/data";

export default function Footer() {
  const linkCls = "mb-3 block text-sm text-[#d8ded6] transition-colors hover:text-white";
  const headCls = "mb-[18px] font-serif text-lg text-gold-soft";
  return (
    <footer className="bg-forest-night px-[7vw] pb-8 pt-20 text-[#d8ded6]">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-wrap justify-between gap-12 border-b border-white/10 pb-14">
          <div>
            <Image src="/images/logo.png" alt="VARMA AURA" width={140} height={102} className="h-[52px] w-auto" />
            <p className="mt-5 max-w-[300px] text-sm leading-[1.7] text-[#8f9a91]">
              {site.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-16">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4 className={headCls}>{col.heading}</h4>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
            <div>
              <h4 className={headCls}>Contact</h4>
              <a href={`mailto:${site.email}`} className={linkCls}>{site.email}</a>
              <a href={`https://${site.website}`} className={linkCls}>{site.website}</a>
              <span className="block text-sm text-[#8f9a91]">{site.social}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 text-xs text-[#8f9a91]">
          <span>© {new Date().getFullYear()} VARMA AURA. {site.address}.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
