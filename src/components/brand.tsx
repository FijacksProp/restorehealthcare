import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand--light" : ""}`} aria-label="Restore Healthcare home">
      <span className="brand__mark" aria-hidden="true">
        <span className="brand__leaf brand__leaf--one" />
        <span className="brand__leaf brand__leaf--two" />
        <span className="brand__centre" />
      </span>
      <span className="brand__type">
        <strong>RESTORE</strong>
        <small>HEALTHCARE SOLUTIONS</small>
      </span>
    </Link>
  );
}
