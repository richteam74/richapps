import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  const content = buildPageContent("/dashboard");

  return (
    <PageShell
      title="Dashboard"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
