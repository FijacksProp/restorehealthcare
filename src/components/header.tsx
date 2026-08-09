"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "@/components/brand";
import { services } from "@/lib/site-data";

const links = [
  { href: "/about", label: "About" },
  { href: "/how-care-works", label: "How care works" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const rawPathname = usePathname() || "/";
  // Static exports use trailing-slash URLs while Next can render the route
  // without that slash. Normalising keeps server and client attributes equal.
  const pathname = rawPathname === "/" ? "/" : rawPathname.replace(/\/+$/, "");

  return (
    <header className="site-header">
      <div className="header-note">
        <div className="container header-note__inner">
          <span>Person-centred support across Dublin 15</span>
          <span className="header-note__availability"><i /> Planned support available day and night</span>
        </div>
      </div>
      <div className="container nav-wrap">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-dropdown">
            <Link className={pathname.startsWith("/services") ? "active" : ""} href="/services">Services <ChevronDown size={14} /></Link>
            <div className="nav-dropdown__panel">
              <div className="nav-dropdown__intro">
                <span className="eyebrow">Our support</span>
                <strong>Care shaped around real life.</strong>
                <Link href="/services">Explore all services <span>→</span></Link>
              </div>
              <div className="nav-dropdown__links">
                {services.map((service) => {
                  const Icon = service.icon;
                  return <Link key={service.slug} href={`/services/${service.slug}`}><Icon size={17} /><span>{service.shortTitle}</span></Link>;
                })}
              </div>
            </div>
          </div>
          {links.map((link) => <Link className={pathname === link.href ? "active" : ""} key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="button button--small header-cta" href="/contact">Talk to our team <span>→</span></Link>
        <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="container mobile-menu__inner" onClick={(event) => { if ((event.target as HTMLElement).closest("a")) setOpen(false); }}>
          <Link href="/services">All services</Link>
          <div className="mobile-menu__services">
            {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</Link>)}
          </div>
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="button" href="/contact">Talk to our team <span>→</span></Link>
        </div>
      </div>
    </header>
  );
}
