import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";
import { organisation } from "@/lib/site-data";

export const metadata: Metadata = { title: "Complaints & Feedback", description: "How Restore Healthcare intends to receive and respond to feedback and complaints." };

export default function ComplaintsPage() {
  return <PolicyLayout eyebrow="Listening & learning" title="Complaints and feedback" intro="This page sets out a clear public framework. Confirmed contacts, response times, escalation routes and any regulator-specific requirements must be added to the operational complaints procedure before service delivery.">
    <section><h2>We want to hear concerns</h2><p>Feedback can identify where communication, conduct or service arrangements have not met reasonable expectations. Raising a concern should not negatively affect the support a person receives.</p></section>
    <section><h2>How concerns should be handled</h2><ul><li>Acknowledge the concern and explain the next step.</li><li>Identify any immediate safety or safeguarding issue.</li><li>Review the relevant facts fairly and confidentially.</li><li>Keep the person informed of progress.</li><li>Explain the outcome, learning and any corrective action that can be shared.</li></ul></section>
    <section><h2>How to make a complaint</h2><p>Feedback or an initial complaint may be sent to <a href={organisation.emailHref}>{organisation.email}</a>, or raised by telephone or post. Support should be available for people who need help communicating their concern. The designated complaints contact and formal response timeframes will be published when confirmed.</p></section>
    <section><h2>Urgent safety concerns</h2><p>A complaint channel is not an emergency service. Where someone is in immediate danger or needs urgent medical assistance, contact the appropriate emergency service.</p></section>
  </PolicyLayout>;
}
