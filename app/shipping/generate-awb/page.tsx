import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Shipping · Generate Awb",
};

export default function Page() {
  const content = buildPageContent("/shipping/generate-awb");

  return (
    <PageShell
      title="Shipping · Generate Awb"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
