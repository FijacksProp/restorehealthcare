import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CareCta, PageHero, SectionHeading } from "@/components/ui";
import { articles } from "@/lib/site-data";

export const metadata: Metadata = { title: "Care Resources", description: "Practical, respectful guidance for individuals, families and carers considering support." };

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Care resources" title="Useful thinking for important decisions." intro="Plain-language guidance for individuals and families navigating care, disability support and respite." tone="light" image="/images/hero-resources-contact.webp" imageAlt="A blank notebook, pen and cup of tea ready for reflection" imagePosition="62% center" />
      <section className="resources-page"><div className="container"><SectionHeading eyebrow="Latest guidance" title="Read, reflect and take the next step in your own time." /><div className="article-grid">{articles.map((article) => <Link className="article-card" href={`/resources/${article.slug}`} key={article.slug}><div className="article-card__media"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 540px) 100vw, (max-width: 820px) 50vw, 33vw" /></div><div className="article-card__meta"><span>{article.category}</span><span>{article.readTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="article-card__link">Read article <ArrowRight size={16} /></span></Link>)}</div></div></section>
      <CareCta />
    </>
  );
}
