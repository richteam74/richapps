import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Export Orders",
};

export default function Page() {
  const content = buildPageContent("/reports/export-orders");

  return (
    <PageShell
      title="Reports · Export Orders"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
