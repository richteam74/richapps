import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Inventory · Products",
};

export default function Page() {
  const content = buildPageContent("/inventory/products");

  return (
    <PageShell
      title="Inventory · Products"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
