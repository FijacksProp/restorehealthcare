import Link from "next/link";
import type { ReactNode } from "react";

const policyLinks = [
  ["/privacy", "Privacy"],
  ["/cookies", "Cookies"],
  ["/accessibility", "Accessibility"],
  ["/safeguarding", "Safeguarding"],
  ["/complaints", "Complaints"],
];

export function PolicyLayout({ eyebrow = "Website information", title, intro, children }: { eyebrow?: string; title: string; intro: string; children: ReactNode }) {
  return (
    <section className="policy-page">
      <div className="container policy-wrap">
        <nav className="policy-nav" aria-label="Policies"><strong>Policies</strong>{policyLinks.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</nav>
        <article className="policy-content"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="policy-updated">Website draft · Last reviewed August 2026</p><div className="policy-note"><p>{intro}</p></div>{children}</article>
      </div>
    </section>
  );
}
