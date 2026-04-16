import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Create Order",
};

export default function Page() {
  const content = buildPageContent("/create-order");

  return (
    <PageShell
      title="Create Order"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
