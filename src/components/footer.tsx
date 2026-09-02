import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Brand } from "@/components/brand";
import { organisation, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand light />
          <p>Thoughtful support for more independent, connected everyday lives.</p>
          <div className="footer-address"><MapPin size={18} /><span>{organisation.address}</span></div>
          <a className="footer-email" href={organisation.emailHref}><Mail size={18} /><span>{organisation.email}</span></a>
          <div className="footer-phones">
            <a href={organisation.landlineHref}><span>Landline</span><strong>{organisation.landline}</strong></a>
            <a href={organisation.mobileHref}><span>Mobile</span><strong>{organisation.mobile}</strong></a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Support</h2>
          {services.slice(0, 6).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</Link>)}
        </div>
        <div className="footer-column">
          <h2>Restore</h2>
          <Link href="/about">About us</Link>
          <Link href="/how-care-works">How care works</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Let’s start with a conversation.</h2>
          <p>Tell us what would make life feel safer, easier or more connected.</p>
          <Link href="/contact">Contact Restore <ArrowUpRight size={18} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Restore Healthcare Solutions Limited</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/safeguarding">Safeguarding</Link>
          <Link href="/complaints">Complaints</Link>
        </div>
      </div>
    </footer>
  );
}
