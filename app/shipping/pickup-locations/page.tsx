import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Shipping · Pickup Locations",
};

export default function Page() {
  const content = buildPageContent("/shipping/pickup-locations");

  return (
    <PageShell
      title="Shipping · Pickup Locations"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
