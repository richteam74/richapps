import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Settings",
};

export default function Page() {
  const content = buildPageContent("/settings");

  return (
    <PageShell
      title="Settings"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
