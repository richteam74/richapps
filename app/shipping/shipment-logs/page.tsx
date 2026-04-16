import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Shipping · Shipment Logs",
};

export default function Page() {
  const content = buildPageContent("/shipping/shipment-logs");

  return (
    <PageShell
      title="Shipping · Shipment Logs"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
