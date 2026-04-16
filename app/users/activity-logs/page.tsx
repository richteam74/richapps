import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Users · Activity Logs",
};

export default function Page() {
  const content = buildPageContent("/users/activity-logs");

  return (
    <PageShell
      title="Users · Activity Logs"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
