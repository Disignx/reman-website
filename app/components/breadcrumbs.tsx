import Link from "next/link";
import { ROUTES } from "@/lib/navigation";

export type Crumb = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: readonly Crumb[];
  inverse?: boolean;
};

export function Breadcrumbs({ items, inverse = false }: BreadcrumbsProps) {
  return (
    <nav className={`breadcrumbs${inverse ? " breadcrumbs--inverse" : ""}`} aria-label="Brotkrumen">
      <ol>
        <li>
          <Link href={ROUTES.home}>Startseite</Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.href}-${item.label}`}>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
