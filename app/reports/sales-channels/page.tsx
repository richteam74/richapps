import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Sales Channels",
};

export default function Page() {
  const content = buildPageContent("/reports/sales-channels");

  return (
    <PageShell
      title="Reports · Sales Channels"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
