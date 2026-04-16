import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Users · Role Manager",
};

export default function Page() {
  const content = buildPageContent("/users/role-manager");

  return (
    <PageShell
      title="Users · Role Manager"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
