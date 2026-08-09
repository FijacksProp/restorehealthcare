import Link from "next/link";

export default function NotFound() {
  return <section className="page-hero page-hero--dark"><div className="container page-hero__inner"><div><span className="eyebrow">404 · Page not found</span><h1>This page is not part of the care plan.</h1></div><div className="page-hero__aside"><p>The page may have moved, or the address may be incomplete. You can return to the homepage or explore our services.</p><Link className="button button--light" href="/">Return home <span>→</span></Link></div></div></section>;
}
