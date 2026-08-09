import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = { title: "Accessibility Statement", description: "Restore Healthcare's commitment to an accessible website experience." };

export default function AccessibilityPage() {
  return <PolicyLayout title="Accessibility statement" intro="Restore Healthcare Solutions Limited wants this website to be usable by as many people as possible, including people who use assistive technology or navigate without a mouse.">
    <section><h2>Our approach</h2><p>The website has been designed with semantic headings, keyboard-accessible navigation, visible focus behaviour, readable colour contrast, responsive layouts, text alternatives for meaningful graphics and reduced-motion support.</p></section>
    <section><h2>What visitors should be able to do</h2><ul><li>Zoom and reflow content on smaller screens.</li><li>Navigate links and controls using a keyboard.</li><li>Understand page structure using headings and landmarks.</li><li>Read content with common screen-reading software.</li><li>Reduce non-essential animation through device preferences.</li></ul></section>
    <section><h2>Known limitations</h2><p>Contact information and any future third-party maps, form tools, booking services or embedded content should be checked when introduced. Third-party interfaces can create accessibility limitations outside Restore’s direct control, but accessible alternatives should be offered wherever possible.</p></section>
    <section><h2>Feedback</h2><p>If any content is difficult to access, visitors will be able to contact Restore using the confirmed telephone or email details once published. Please describe the page, the problem encountered and the preferred way to receive the information.</p></section>
    <section><h2>Ongoing improvement</h2><p>Accessibility should be reviewed as content and features change. Automated testing is useful, but periodic keyboard, screen-reader and human review remain important.</p></section>
  </PolicyLayout>;
}
