import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Shipping · Postcode Checker",
};

export default function Page() {
  const content = buildPageContent("/shipping/postcode-checker");

  return (
    <PageShell
      title="Shipping · Postcode Checker"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
