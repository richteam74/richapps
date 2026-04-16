import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Integrations · Custom Api",
};

export default function Page() {
  const content = buildPageContent("/integrations/custom-api");

  return (
    <PageShell
      title="Integrations · Custom Api"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
