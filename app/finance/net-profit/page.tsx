import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Finance · Net Profit",
};

export default function Page() {
  const content = buildPageContent("/finance/net-profit");

  return (
    <PageShell
      title="Finance · Net Profit"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
