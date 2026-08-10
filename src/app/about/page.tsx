import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CareCta, PageHero, SectionHeading } from "@/components/ui";
import { values } from "@/lib/site-data";

export const metadata: Metadata = { title: "About Us", description: "Learn about Restore Healthcare Solutions and our approach to person-centred support in Dublin 15." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Restore" title="Built around what matters to people." intro="Restore Healthcare Solutions is a Dublin 15 care organisation developing thoughtful support for children, adults, older people and the families around them." image="/images/hero-about.webp" imageAlt="A diverse group sharing an equal, relaxed conversation around a community table">
        <Link className="button button--light" href="/services">Explore our support <ArrowRight size={18} /></Link>
      </PageHero>
      <section className="content-section">
        <div className="container two-column">
          <SectionHeading eyebrow="Our purpose" title="More choice in the moments that shape a life." />
          <div className="prose-large">
            <p>We believe good support should help a person feel more like themselves—not less.</p>
            <p>That belief shapes the way Restore approaches disability support, home care, respite and community participation. We begin with strengths, listen carefully to preferences and work towards outcomes that are meaningful to the individual.</p>
            <p>For one person, progress might mean preparing a favourite meal with less help. For another, it could mean returning to a community activity, giving a family carer time to rest or simply having a more comfortable morning routine.</p>
            <p>Restore is also developing staffing support for care organisations. In both parts of our work, the same principle applies: understand the setting, communicate clearly and place the needs of the people receiving support at the centre.</p>
          </div>
        </div>
      </section>
      <section className="content-section content-section--cream">
        <div className="container two-column">
          <SectionHeading eyebrow="Our values" title="How we want care to feel." text="Values only matter when they are visible in everyday actions." />
          <div className="values-grid">
            {values.map((value) => { const Icon = value.icon; return <div className="value-card" key={value.title}><span className="value-card__icon"><Icon size={23} /></span><h3>{value.title}</h3><p>{value.text}</p></div>; })}
          </div>
        </div>
      </section>
      <section className="commitment-band">
        <div className="container commitment-grid">
          <h2>Care with clear boundaries and honest promises.</h2>
          <div className="commitment-list">
            <div><strong>Individual first</strong><p>We do not reduce people to conditions, ages or lists of tasks.</p></div>
            <div><strong>Nothing assumed</strong><p>Support is discussed and agreed; it is not imposed.</p></div>
            <div><strong>Honest scope</strong><p>We only confirm services after checking that we can provide them appropriately.</p></div>
            <div><strong>Always reviewing</strong><p>A support plan should change when a person’s life or goals change.</p></div>
          </div>
        </div>
      </section>
      <CareCta title="Let’s begin with the life you want to protect." />
    </>
  );
}
