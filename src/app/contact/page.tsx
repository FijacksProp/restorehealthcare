import type { Metadata } from "next";
import { Building2, Clock3, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/ui";
import { organisation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Restore Healthcare Solutions to discuss care, support or organisational staffing needs.",
};

export default function ContactPage() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(organisation.address)}`;

  return (
    <>
      <PageHero
        eyebrow="Contact Restore"
        title="Tell us what would make a difference."
        intro="Whether you are exploring support for yourself, a family member or an organisation, the first step can be a simple conversation."
        image="/images/hero-resources-contact.webp"
        imageAlt="A calm table setting with a blank notebook ready for a first conversation"
        imagePosition="60% center"
      />
      <section className="contact-section">
        <div className="container contact-grid">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="A thoughtful starting point."
              text="Call Restore to discuss care for yourself or someone close to you, or to speak with us about organisational staffing support."
            />
            <div className="contact-cards" style={{ marginTop: 38 }}>
              <div className="contact-card">
                <span className="contact-card__icon"><Phone size={21} /></span>
                <div>
                  <h2>Call our team</h2>
                  <div className="contact-phone-links">
                    <a href={organisation.landlineHref}><span>Landline</span><strong>{organisation.landline}</strong></a>
                    <a href={organisation.mobileHref}><span>Mobile</span><strong>{organisation.mobile}</strong></a>
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-card__icon"><Mail size={21} /></span>
                <div>
                  <h2>Email our team</h2>
                  <p>For general care, support and organisational enquiries.</p>
                  <a href={organisation.emailHref}>{organisation.email}</a>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-card__icon"><MapPin size={21} /></span>
                <div>
                  <h2>Our address</h2>
                  <address>{organisation.address}</address>
                  <a href={mapUrl} target="_blank" rel="noreferrer">Open in maps <Navigation size={14} /></a>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-card__icon"><Clock3 size={21} /></span>
                <div>
                  <h2>Support availability</h2>
                  <p>Planned day, night and 24-hour support may be discussed, subject to assessment and availability. This is not an emergency service.</p>
                </div>
              </div>
            </div>
          </div>
          <aside className="contact-guidance">
            <Building2 size={35} color="var(--acid)" />
            <h2>What happens when you contact us?</h2>
            <p>You do not need to know the exact service or number of hours required. A useful first conversation can begin with the situation as it is today.</p>
            <ol>
              <li><span>1</span>Tell us who needs support and what has prompted the enquiry.</li>
              <li><span>2</span>Share the routines, priorities or challenges that matter most.</li>
              <li><span>3</span>We clarify whether Restore may be an appropriate fit.</li>
              <li><span>4</span>If suitable, the next step is a more detailed assessment.</li>
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
