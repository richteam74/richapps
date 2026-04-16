import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Product Trend",
};

export default function Page() {
  const content = buildPageContent("/reports/product-trend");

  return (
    <PageShell
      title="Reports · Product Trend"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
