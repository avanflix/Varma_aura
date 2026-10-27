"use client";

import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "outline-dark" | "gold";

const variantClasses: Record<Variant, string> = {
  primary: "bg-forest text-cream hover:bg-gold hover:text-forest-deep",
  outline: "border border-white/50 text-white hover:bg-white hover:text-ink",
  "outline-dark":
    "border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  gold: "bg-gold text-forest-deep hover:bg-cream",
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-[14px] text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Show a trailing arrow. Defaults to true for links, false for buttons. */
  arrow?: boolean;
};

type LinkProps = BaseProps & { href: string };

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export default function Button(props: LinkProps | ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { arrow = true } = props;
    return (
      <Link href={props.href} className={classes}>
        {children}
        {arrow && <span aria-hidden>→</span>}
      </Link>
    );
  }

  const {
    href,
    variant: _v,
    className: _c,
    children: _ch,
    arrow = false,
    ...rest
  } = props as ButtonProps;

  return (
    <button {...rest} className={classes}>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </button>
  );
}
