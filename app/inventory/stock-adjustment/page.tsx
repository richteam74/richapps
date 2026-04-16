import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Inventory · Stock Adjustment",
};

export default function Page() {
  const content = buildPageContent("/inventory/stock-adjustment");

  return (
    <PageShell
      title="Inventory · Stock Adjustment"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
