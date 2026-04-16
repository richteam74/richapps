import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Orders",
};

export default function Page() {
  const content = buildPageContent("/orders");

  return (
    <PageShell
      title="Orders"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
