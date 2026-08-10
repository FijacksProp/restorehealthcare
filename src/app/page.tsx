import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock3,
  HeartHandshake,
  MapPinned,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { CareCta, SectionHeading, ServiceCard } from "@/components/ui";
import { articles, primaryServices, values } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <span className="eyebrow">Restore confidence. Support independence.</span>
            <h1>Care that makes room for <em>living.</em></h1>
            <p>Person-centred disability support, home care and respite for children, adults and older people across Dublin 15.</p>
            <div className="home-hero__actions">
              <Link className="button button--light" href="/contact">Explore care options <ArrowRight size={18} /></Link>
              <Link className="button button--outline" href="/services">View our services</Link>
            </div>
          </div>
          <div className="home-hero__visual home-hero__visual--photo">
            <Image className="home-hero__photo" src="/images/hero-home.webp" alt="An older woman sharing a relaxed conversation with a support professional at home" fill priority sizes="(max-width: 820px) 100vw, 32vw" />
            <span className="home-hero__photo-wash" aria-hidden="true" />
            <div className="visual-chip visual-chip--one"><span><HeartHandshake size={15} /></span> Support that listens</div>
            <div className="visual-chip visual-chip--two"><span><Sparkles size={15} /></span> Goals that matter</div>
            <p className="visual-caption">A calmer, more connected approach to everyday support.</p>
          </div>
        </div>
      </section>

      <div className="home-proof">
        <div className="container home-proof__inner">
          <div className="proof-item"><UserRoundCheck size={25} /><div><strong>Person-centred planning</strong><span>Support starts with the individual.</span></div></div>
          <div className="proof-item"><Clock3 size={25} /><div><strong>Flexible day & night support</strong><span>Planned around assessed needs.</span></div></div>
          <div className="proof-item"><MapPinned size={25} /><div><strong>Local to Dublin 15</strong><span>Rooted in the community we support.</span></div></div>
        </div>
      </div>

      <section className="services-section">
        <div className="container">
          <div className="services-intro">
            <SectionHeading eyebrow="What we do" title="Support for real lives—not standard routines." text="Every service is shaped around the person’s strengths, preferences and definition of a good day." />
            <Link className="button button--outline" href="/services">See all services <ArrowRight size={17} /></Link>
          </div>
          <div className="services-grid">
            {primaryServices.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container approach-grid">
          <div className="approach-sticky">
            <SectionHeading eyebrow="A clearer way forward" title="Care begins with a conversation." text="You do not need to arrive with all the answers. We take time to understand the situation and make the next step feel manageable." />
            <Link className="button button--outline" href="/how-care-works">How our care works <ArrowRight size={17} /></Link>
          </div>
          <div className="steps-list">
            {[
              ["01", "We listen", "Tell us about the person, their routines, what is working and where support could make a difference."],
              ["02", "We understand", "A thoughtful assessment helps clarify preferences, practical needs, boundaries and meaningful goals."],
              ["03", "We shape the support", "Together, we agree a clear plan and a rhythm of support that feels natural in everyday life."],
              ["04", "We keep learning", "Regular conversations help the plan evolve as confidence, circumstances and ambitions change."],
            ].map(([number, title, text]) => <div className="step-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="difference-section">
        <div className="container difference-grid">
          <div className="difference-visual">
            <Image src="/images/hero-older-person.webp" alt="An older woman tending herbs in her garden with a support companion" fill sizes="(max-width: 820px) 100vw, 48vw" />
            <span className="difference-visual__shade" aria-hidden="true" />
            <div className="difference-visual__quote"><p>“A good day should still feel like your own.”</p><span>The Restore approach</span></div>
          </div>
          <div>
            <SectionHeading eyebrow="Why Restore" title="Professional support with a deeply human centre." text="We are building a care organisation where dignity shows up in the details: how we speak, how we plan and how we respond when life changes." />
            <div className="values-mini">
              {values.map((value) => { const Icon = value.icon; return <div className="value-mini" key={value.title}><Icon size={22} /><strong>{value.title}</strong><p>{value.text}</p></div>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="resource-section">
        <div className="container">
          <div className="resource-head">
            <SectionHeading eyebrow="Useful guidance" title="A little clarity can make the next step easier." />
            <Link className="button button--outline" href="/resources">View all resources <ArrowRight size={17} /></Link>
          </div>
          <div className="article-grid">
            {articles.map((article) => <Link className="article-card" href={`/resources/${article.slug}`} key={article.slug}><div className="article-card__media"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 540px) 100vw, (max-width: 820px) 50vw, 33vw" /></div><div className="article-card__meta"><span>{article.category}</span><span>{article.readTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="article-card__link">Read article <ArrowRight size={16} /></span></Link>)}
          </div>
        </div>
      </section>

      <CareCta />
    </>
  );
}
