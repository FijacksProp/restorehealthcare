import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CareCta, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "How Care Works", description: "Understand how Restore listens, assesses needs, agrees support and reviews care arrangements." };

const journey = [
  { title: "A first conversation", text: "We begin with what prompted you to get in touch. You can tell us about the person, their current routines, the things that matter and where life has started to feel harder." },
  { title: "Understanding the whole picture", text: "Before any support is confirmed, we need to understand preferences, communication, the home or community setting, practical requirements, risks and the outcomes the person wants." },
  { title: "An agreed support plan", text: "The plan sets out the purpose of support, important routines, boundaries, timing and how everyone will communicate. It should be clear enough to guide care and flexible enough to respect real life." },
  { title: "The right support arrangement", text: "We consider the nature of the service and the people best suited to provide it. Availability and the final scope are confirmed transparently before support begins." },
  { title: "A thoughtful beginning", text: "Introductions and early support should feel calm. We pay attention to how the arrangement is settling and invite feedback from the person and, where appropriate, their family." },
  { title: "Review and adaptation", text: "Needs and goals can change. Regular review helps keep support relevant, proportionate and focused on the person’s quality of life." },
];

export default function HowCareWorksPage() {
  return (
    <>
      <PageHero eyebrow="How care works" title="A thoughtful path from questions to support." intro="Arranging care can feel like a big decision. Our process is designed to replace uncertainty with calm, clear steps." image="/images/hero-care-planning.webp" imageAlt="A disabled man leading a care-planning conversation in his own home" imagePosition="65% center"><Link className="button button--light" href="/contact">Start a conversation <ArrowRight size={18} /></Link></PageHero>
      <section className="journey-section"><div className="container"><SectionHeading eyebrow="The care journey" title="Clear at every step. Personal throughout." /><div className="journey-timeline">{journey.map((step, index) => <div className="journey-step" key={step.title}><span>0{index + 1}</span><h2>{step.title}</h2><p>{step.text}</p></div>)}</div></div></section>
      <section className="commitment-band"><div className="container commitment-grid"><h2>What you can expect from the conversation.</h2><div className="commitment-list"><div><strong>No pressure</strong><p>An initial conversation helps you understand options; it does not commit you to a service.</p></div><div><strong>Plain language</strong><p>We explain the process clearly and make space for questions.</p></div><div><strong>Respect for choice</strong><p>The person receiving support should remain central to decisions about their life.</p></div><div><strong>Honest suitability</strong><p>We only progress when the request and available support are an appropriate match.</p></div></div></div></section>
      <CareCta />
    </>
  );
}
