import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Stock Summary",
};

export default function Page() {
  const content = buildPageContent("/reports/stock-summary");

  return (
    <PageShell
      title="Reports · Stock Summary"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
