"use client";

import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/src/lib/breadcrumb";

export default function Breadcrumb() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <nav aria-label="breadcrumb " className="mx-auto max-w-5xl py-4">
      <ol className="flex gap-2 text-sm">
        {breadcrumbs.map((item, i) => (
          <li key={item.href} className="flex gap-2">
            {i > 0 && <span>›</span>}

            {i === breadcrumbs.length - 1 ? (
              <span className="font-semibold text-red-600">{item.label}</span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
