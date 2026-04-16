import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · State Report",
};

export default function Page() {
  const content = buildPageContent("/reports/state-report");

  return (
    <PageShell
      title="Reports · State Report"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
