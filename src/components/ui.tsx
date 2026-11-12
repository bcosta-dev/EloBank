import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'outline' };
export function ActionLink({ children, variant = 'primary', className = '', ...props }: LinkProps) {
  return <a className={`button button-${variant} ${className}`} {...props}>{children}<ArrowUpRight size={19} aria-hidden="true" /></a>;
}
export function SectionHeading({ id, title, children }: { id: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><h2 id={id}>{title}</h2>{children && <p>{children}</p>}</div>;
}
export function ServiceCard({ icon, title, children, className = '', status }: { icon: ReactNode; title: string; children: ReactNode; className?: string; status: string }) {
  return <article className={`service-card ${className}`}><div className="service-meta"><span className="service-icon" aria-hidden="true">{icon}</span><span>{status}</span></div><div className="service-content"><h3>{title}</h3>{children}</div></article>;
}
export function AccordionItem({ question, children }: { question: string; children: ReactNode }) {
  return <details className="accordion-item"><summary>{question}<Plus size={20} aria-hidden="true" /></summary><div className="accordion-content">{children}</div></details>;
}
