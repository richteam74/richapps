import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Reports · Seller Summary",
};

export default function Page() {
  const content = buildPageContent("/reports/seller-summary");

  return (
    <PageShell
      title="Reports · Seller Summary"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
