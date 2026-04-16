import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Users · Users List",
};

export default function Page() {
  const content = buildPageContent("/users/users-list");

  return (
    <PageShell
      title="Users · Users List"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
