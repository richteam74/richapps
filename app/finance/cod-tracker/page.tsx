import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Finance · Cod Tracker",
};

export default function Page() {
  const content = buildPageContent("/finance/cod-tracker");

  return (
    <PageShell
      title="Finance · Cod Tracker"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
