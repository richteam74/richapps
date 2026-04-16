import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Stock Movement",
};

export default function Page() {
  const content = buildPageContent("/reports/stock-movement");

  return (
    <PageShell
      title="Reports · Stock Movement"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
