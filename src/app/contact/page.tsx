import type { Metadata } from "next";
import { Building2, Clock3, MapPin, MessagesSquare, Navigation } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/ui";
import { organisation } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contact", description: "Contact Restore Healthcare Solutions in Dublin 15 to discuss care, support or organisational staffing needs." };

export default function ContactPage() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(organisation.address)}`;
  return (
    <>
      <PageHero eyebrow="Contact Restore" title="Tell us what would make a difference." intro="Whether you are exploring support for yourself, a family member or an organisation, the first step can be a simple conversation." image="/images/hero-resources-contact.webp" imageAlt="A calm table setting with a blank notebook ready for a first conversation" imagePosition="60% center" />
      <section className="contact-section"><div className="container contact-grid"><div><SectionHeading eyebrow="Get in touch" title="A local starting point in Dublin 15." text="Phone and email details will be added as soon as they are confirmed. In the meantime, you can find Restore at the address below." /><div className="contact-cards" style={{ marginTop: 38 }}><div className="contact-card"><span className="contact-card__icon"><MapPin size={21} /></span><div><h2>Our address</h2><address>{organisation.address}</address><a href={mapUrl} target="_blank" rel="noreferrer">Open in maps <Navigation size={14} /></a></div></div><div className="contact-card"><span className="contact-card__icon"><MessagesSquare size={21} /></span><div><h2>Care enquiries</h2><p>Telephone and email contact details are currently being confirmed and will be published shortly.</p></div></div><div className="contact-card"><span className="contact-card__icon"><Clock3 size={21} /></span><div><h2>Support availability</h2><p>Planned day, night and 24-hour support may be discussed, subject to assessment and availability. This is not an emergency service.</p></div></div></div></div><aside className="contact-guidance"><Building2 size={35} color="var(--acid)" /><h2>What happens when you contact us?</h2><p>You do not need to know the exact service or number of hours required. A useful first conversation can begin with the situation as it is today.</p><ol><li><span>1</span>Tell us who needs support and what has prompted the enquiry.</li><li><span>2</span>Share the routines, priorities or challenges that matter most.</li><li><span>3</span>We clarify whether Restore may be an appropriate fit.</li><li><span>4</span>If suitable, the next step is a more detailed assessment.</li></ol></aside></div></section>
    </>
  );
}
