import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Users · Recruitment Tree",
};

export default function Page() {
  const content = buildPageContent("/users/recruitment-tree");

  return (
    <PageShell
      title="Users · Recruitment Tree"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
