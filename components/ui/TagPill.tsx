export default function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-line px-4 py-2 text-[13px] text-ink-soft">
      {children}
    </span>
  );
}
