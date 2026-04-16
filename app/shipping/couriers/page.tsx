import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Shipping · Couriers",
};

export default function Page() {
  const content = buildPageContent("/shipping/couriers");

  return (
    <PageShell
      title="Shipping · Couriers"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
