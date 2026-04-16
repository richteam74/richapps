import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Inventory · Bundles",
};

export default function Page() {
  const content = buildPageContent("/inventory/bundles");

  return (
    <PageShell
      title="Inventory · Bundles"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
