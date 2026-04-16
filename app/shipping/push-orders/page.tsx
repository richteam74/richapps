import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Shipping · Push Orders",
};

export default function Page() {
  const content = buildPageContent("/shipping/push-orders");

  return (
    <PageShell
      title="Shipping · Push Orders"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
