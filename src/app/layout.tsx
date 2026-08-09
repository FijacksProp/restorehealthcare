import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Restore Healthcare Solutions | Person-Centred Care in Dublin 15", template: "%s | Restore Healthcare" },
  description: "Person-centred disability support, home care, respite and community support for children, adults and older people in Dublin 15.",
  keywords: ["healthcare Dublin 15", "disability support Dublin", "home care Dublin 15", "respite care Dublin"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
