import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { CareCta } from "@/components/ui";
import { articles } from "@/lib/site-data";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = articles.find((item) => item.slug === slug); return article ? { title: article.title, description: article.excerpt } : {}; }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <><article><header className="article-hero"><div className="article-hero__media"><Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 820px) 100vw, 46vw" /><span aria-hidden="true" /></div><div className="container article-hero__inner"><Link className="eyebrow" href="/resources"><ArrowLeft size={14} /> All resources</Link><h1>{article.title}</h1><div className="article-hero__meta"><span>{article.category}</span><span>{article.readTime}</span></div></div></header><div className="container"><div className="article-body"><p className="article-body__intro">{article.excerpt}</p>{article.sections.map((section) => <section className="article-section" key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="article-disclaimer">This article provides general information and is not clinical, medical or legal advice. Individual needs should be discussed with an appropriately qualified professional.</div></div></div></article><CareCta /></>;
}
