import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Integrations · Couriers",
};

export default function Page() {
  const content = buildPageContent("/integrations/couriers");

  return (
    <PageShell
      title="Integrations · Couriers"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
