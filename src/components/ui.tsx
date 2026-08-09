import Link from "next/link";
import { ArrowRight, Check, ChevronRight, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import type { Service } from "@/lib/site-data";

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  return <div className={`section-heading section-heading--${align}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function PageHero({ eyebrow, title, intro, children, tone = "dark" }: { eyebrow: string; title: string; intro: string; children?: ReactNode; tone?: "dark" | "light" }) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="page-hero__orb page-hero__orb--one" /><div className="page-hero__orb page-hero__orb--two" />
      <div className="container page-hero__inner">
        <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1></div>
        <div className="page-hero__aside"><p>{intro}</p>{children}</div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Link className={`service-card accent-${service.accent}`} href={`/services/${service.slug}`}>
      <div className="service-card__top"><span>0{index + 1}</span><span className="service-card__icon"><Icon /></span></div>
      <div><h3>{service.shortTitle}</h3><p>{service.summary}</p></div>
      <span className="service-card__link">Explore support <ArrowRight size={18} /></span>
    </Link>
  );
}

export function CareCta({ title = "The right support starts with listening.", text = "Share what matters to you. We’ll help you think through the next step without pressure." }: { title?: string; text?: string }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-panel__mark" aria-hidden="true"><span /><span /><span /></div>
          <div><span className="eyebrow">Start a conversation</span><h2>{title}</h2></div>
          <div><p>{text}</p><Link className="button button--light" href="/contact">Talk to our team <ArrowRight size={18} /></Link></div>
        </div>
      </div>
    </section>
  );
}

export function TrustNote() {
  return <div className="trust-note"><ShieldCheck /><div><strong>Careful, honest guidance</strong><span>We only recommend support after understanding the individual situation.</span></div></div>;
}

export function FeatureList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><span><Check size={15} /></span>{item}</li>)}</ul>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, index) => <span key={item.label}>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}{index < items.length - 1 && <ChevronRight size={13} />}</span>)}</nav>;
}
