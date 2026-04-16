import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Inventory · Brands",
};

export default function Page() {
  const content = buildPageContent("/inventory/brands");

  return (
    <PageShell
      title="Inventory · Brands"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
