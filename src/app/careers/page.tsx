import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, HeartHandshake, UsersRound } from "lucide-react";
import { CareCta, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Careers", description: "Learn about future care and support opportunities with Restore Healthcare Solutions." };

export default function CareersPage() {
  const roles = [
    { icon: HeartHandshake, title: "Care & support", text: "Roles focused on respectful assistance, daily living, independence and meaningful community participation." },
    { icon: UsersRound, title: "Coordination", text: "People who can listen carefully, organise thoughtfully and keep individuals, families and support teams informed." },
    { icon: BriefcaseBusiness, title: "Operations", text: "Roles that help a growing care organisation maintain clear systems, dependable communication and consistent service." },
  ];
  return (
    <>
      <PageHero eyebrow="Careers at Restore" title="Bring your professionalism. Keep your humanity." intro="We want to build a team that sees the individual, respects the details and understands that excellent support is both skilled and deeply human." image="/images/hero-healthcare-staffing.webp" imageAlt="A diverse care team working together around a planning table" imagePosition="65% center" />
      <section className="careers-intro"><div className="container"><SectionHeading eyebrow="Work with purpose" title="Help make a good day more possible." text="Future opportunities may include care, support, coordination and operational roles serving individuals and partner organisations." /><div className="roles-grid">{roles.map(({ icon: Icon, title, text }) => <div className="role-card" key={title}><span><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
      <section className="content-section content-section--cream"><div className="container two-column"><SectionHeading eyebrow="What we value" title="The qualities behind dependable care." /><div className="prose-large"><p>Kindness matters most when it is supported by good judgement, clear communication and consistency.</p><p>Restore will look for people who respect privacy, listen without assumption, recognise boundaries and understand that the person receiving support should remain involved in everyday decisions.</p><p>Role-specific qualifications, screening and experience requirements will be published with each confirmed vacancy.</p></div></div></section>
      <section className="content-section"><div className="container"><div className="notice-panel"><div><h2>Recruitment details are coming soon.</h2><p>Online applications are not yet open. Confirmed vacancies and contact details will be published here.</p></div><Link className="button button--light" href="/contact">Contact Restore <ArrowRight size={17} /></Link></div></div></section>
      <CareCta title="Looking for care rather than a career?" text="Explore the support Restore is developing for individuals and families." />
    </>
  );
}
