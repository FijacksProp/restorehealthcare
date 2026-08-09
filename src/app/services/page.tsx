import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseMedical } from "lucide-react";
import { CareCta, PageHero, ServiceCard } from "@/components/ui";
import { primaryServices, services } from "@/lib/site-data";

export const metadata: Metadata = { title: "Care & Support Services", description: "Explore disability support, home care, respite, children and family support, older person support and community care in Dublin 15." };

export default function ServicesPage() {
  const staffing = services.find((service) => service.slug === "healthcare-staffing")!;
  return (
    <>
      <PageHero eyebrow="Care & support" title="Support shaped around everyday life." intro="From a few well-timed hours to more continuous planned support, we begin by understanding what would make the most meaningful difference." />
      <section className="services-hub">
        <div className="container">
          <div className="services-hub__intro"><span className="eyebrow">For individuals & families</span><p>Our services are designed for children, adults and older people. Every request is considered individually, with clear discussion about needs, preferences, safety and what Restore can appropriately provide.</p></div>
          <div className="services-grid">{primaryServices.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
          <div className="staffing-banner"><div><BriefcaseMedical size={35} /><div><h3>{staffing.title}</h3><p>Flexible staffing conversations for healthcare and community organisations.</p></div></div><Link className="button button--outline" href={`/services/${staffing.slug}`}>For organisations <ArrowRight size={17} /></Link></div>
        </div>
      </section>
      <CareCta title="Not sure which service is the right fit?" text="That is completely fine. Tell us about the situation and we can help you identify the most useful next conversation." />
    </>
  );
}
