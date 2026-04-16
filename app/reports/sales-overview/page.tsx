import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Sales Overview",
};

export default function Page() {
  const content = buildPageContent("/reports/sales-overview");

  return (
    <PageShell
      title="Reports · Sales Overview"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
