import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Profit Overview",
};

export default function Page() {
  const content = buildPageContent("/reports/profit-overview");

  return (
    <PageShell
      title="Reports · Profit Overview"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
