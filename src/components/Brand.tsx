export function Brand({ decorative = false }: { decorative?: boolean }) {
  return <span className="brand" aria-hidden={decorative || undefined}>
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="M26 10h-8a12 12 0 0 0 0 24h8M18 10h8a12 12 0 0 1 0 24h-8" stroke="currentColor" strokeWidth="3" /></svg>
    <span>elo<span className="brand-bank">bank</span></span>
  </span>;
}
