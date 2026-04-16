import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Inventory · Pending Stock",
};

export default function Page() {
  const content = buildPageContent("/inventory/pending-stock");

  return (
    <PageShell
      title="Inventory · Pending Stock"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
