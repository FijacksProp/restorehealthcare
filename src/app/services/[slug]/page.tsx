import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs, CareCta, FeatureList, SectionHeading, TrustNote } from "@/components/ui";
import { services } from "@/lib/site-data";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.summary } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-hero__media"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 820px) 100vw, 48vw" /><span aria-hidden="true" /></div>
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.shortTitle }]} />
          <div className="service-detail-hero__grid">
            <div><span className="eyebrow">{service.eyebrow}</span><h1>{service.title}</h1></div>
            <div className="service-detail-hero__aside"><Icon size={44} color="var(--acid)" /><p>{service.summary}</p><Link className="button button--light" href="/contact">Discuss your needs <ArrowRight size={18} /></Link><TrustNote /></div>
          </div>
        </div>
      </section>
      <section className="container service-intro">
        <div className="service-intro__label"><span className="eyebrow">How we can help</span></div>
        <div className="service-intro__content">
          <p>{service.intro}</p>
          <div className="feature-grid">{service.features.map((feature, index) => <div className="feature-block" key={feature.title}><span>0{index + 1}</span><h2>{feature.title}</h2><p>{feature.text}</p></div>)}</div>
        </div>
      </section>
      <section className="suitable-section">
        <div className="container suitable-grid">
          <SectionHeading eyebrow="Who it may support" title="A flexible starting point—not a fixed package." text="The examples here are a guide. Suitability and the exact scope of support are always discussed with the individual or family." />
          <div className="suitable-grid__right"><h3>This service may be helpful for:</h3><FeatureList items={service.suitableFor} /></div>
        </div>
      </section>
      <section className="process-strip">
        <div className="container"><SectionHeading eyebrow="A personal process" title="Planned with you, one step at a time." /><div className="process-cards">{service.process.map((step, index) => <div className="process-card" key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}</div></div>
      </section>
      <section className="faq-section"><div className="container faq-grid"><SectionHeading eyebrow="Common questions" title="Helpful things to know." /><div className="faq-list">{service.faq.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
      <CareCta title={`Let’s talk about ${service.shortTitle.toLowerCase()}.`} />
    </>
  );
}
