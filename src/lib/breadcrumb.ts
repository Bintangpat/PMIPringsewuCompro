type BreadcrumbItem = {
  label: string;
  href: string;
};

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [];

  // selalu mulai dari Home
  breadcrumbs.push({
    label: "Home",
    href: "/",
  });

  segments.forEach((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    breadcrumbs.push({
      label: formatLabel(segment),
      href,
    });
  });

  return breadcrumbs;
}

// ubah slug jadi teks manusia
function formatLabel(segment: string): string {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
