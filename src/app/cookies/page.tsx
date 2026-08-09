import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy-layout";

export const metadata: Metadata = { title: "Cookie Notice", description: "Cookie information for the Restore Healthcare website." };

export default function CookiesPage() {
  return <PolicyLayout title="Cookie notice" intro="The initial Restore website is designed to operate without advertising cookies or non-essential tracking. This notice must be updated if analytics, embedded media, chat or marketing technology is introduced.">
    <section><h2>What cookies are</h2><p>Cookies are small text files placed on a device when a website is visited. Similar technologies can also store or access information for security, preferences, measurement and advertising.</p></section>
    <section><h2>Strictly necessary technology</h2><p>Necessary cookies or local-storage items may be used where required to deliver a requested feature, protect the site or remember an essential preference. These technologies should not be used for unrelated marketing purposes.</p></section>
    <section><h2>Analytics and marketing</h2><p>The launch version does not intentionally deploy analytics, advertising or cross-site tracking. If non-essential tools are added, visitors should receive clear information and a genuine choice before those tools are activated.</p></section>
    <section><h2>Managing cookies</h2><p>Browser settings can be used to view, block or remove cookies. Blocking technology that is strictly necessary may affect how some website features operate.</p></section>
    <section><h2>Future changes</h2><p>A current cookie inventory should be completed before launch and after material changes. The notice and any consent controls should reflect the technologies actually used, rather than a generic list.</p></section>
  </PolicyLayout>;
}
