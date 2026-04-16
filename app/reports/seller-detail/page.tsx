import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Seller Detail",
};

export default function Page() {
  const content = buildPageContent("/reports/seller-detail");

  return (
    <PageShell
      title="Reports · Seller Detail"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
