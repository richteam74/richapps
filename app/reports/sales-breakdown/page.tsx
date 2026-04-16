import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Sales Breakdown",
};

export default function Page() {
  const content = buildPageContent("/reports/sales-breakdown");

  return (
    <PageShell
      title="Reports · Sales Breakdown"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
