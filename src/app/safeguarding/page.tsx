import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = { title: "Safeguarding Statement", description: "Restore Healthcare's website safeguarding commitment." };

export default function SafeguardingPage() {
  return <PolicyLayout eyebrow="Our commitment" title="Safeguarding statement" intro="This public statement expresses Restore’s intended safeguarding principles. A complete operational policy, named safeguarding leads, reporting routes and service-specific procedures must be formally approved before care delivery.">
    <section><h2>Our commitment</h2><p>Every child and adult has the right to live with dignity and to be protected from abuse, neglect, exploitation and avoidable harm. Concerns should be heard, taken seriously and handled promptly through an appropriate process.</p></section>
    <section><h2>Principles</h2><ul><li>Put the safety and welfare of the person at the centre.</li><li>Listen respectfully and avoid making promises that cannot be kept.</li><li>Share information only with people who need it for protection or lawful action.</li><li>Record concerns accurately and act through defined reporting routes.</li><li>Work with relevant statutory or emergency services when required.</li></ul></section>
    <section><h2>Raising a concern</h2><p>Confirmed safeguarding contact details will be published when Restore’s operational procedure and responsible personnel are finalised. If someone is in immediate danger, contact the emergency services rather than relying on this website.</p></section>
    <section><h2>Website boundaries</h2><p>The website does not currently accept confidential safeguarding reports. Sensitive information should not be sent through any future general enquiry form unless that channel is explicitly designed and secured for the purpose.</p></section>
  </PolicyLayout>;
}
