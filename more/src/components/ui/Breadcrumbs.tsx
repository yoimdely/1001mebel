import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { name: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-black/40 mb-8 overflow-x-auto whitespace-nowrap pb-2">
      <Link href="/" className="hover:text-black transition-colors shrink-0">
        <Home size={14} />
      </Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 shrink-0">
          <ChevronRight size={14} />
          {item.href ? (
            <Link href={item.href} className="hover:text-black transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-black font-medium">{item.name}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
