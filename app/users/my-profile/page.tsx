import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { buildPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Users · My Profile",
};

export default function Page() {
  const content = buildPageContent("/users/my-profile");

  return (
    <PageShell
      title="Users · My Profile"
      subtitle={content.subtitle}
      cards={content.cards}
      rows={content.rows}
    />
  );
}
