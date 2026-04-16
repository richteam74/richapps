import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Inventory · Stock Log",
};

export default function Page() {
  const content = buildPageContent("/inventory/stock-log");

  return (
    <PageShell
      title="Inventory · Stock Log"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
