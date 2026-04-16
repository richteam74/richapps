import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Integrations · Webhooks",
};

export default function Page() {
  const content = buildPageContent("/integrations/webhooks");

  return (
    <PageShell
      title="Integrations · Webhooks"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
