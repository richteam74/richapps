import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Sku Report",
};

export default function Page() {
  const content = buildPageContent("/reports/sku-report");

  return (
    <PageShell
      title="Reports · Sku Report"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
