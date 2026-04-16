export type PageCard = {
  label: string;
  value: string;
  trend: string;
};

export type TableRow = {
  item: string;
  owner: string;
  status: string;
  updatedAt: string;
};

const prettySegment = (segment: string) =>
  segment
    .split("-")
    .map((piece) => piece.charAt(0).toUpperCase() + piece.slice(1))
    .join(" ");

export function buildPageContent(route: string) {
  const segments = route.replace(/^\//, "").split("/").filter(Boolean);
  const context = segments.map(prettySegment).join(" • ");

  return {
    subtitle: context || "Operations",
    cards: [
      {
        label: "Open Tasks",
        value: `${segments.length * 8 + 12}`,
        trend: "Updated every 5 minutes",
      },
      {
        label: "Today Throughput",
        value: `${segments.length * 175 + 950}`,
        trend: "+7.4% vs yesterday",
      },
      {
        label: "Exceptions",
        value: `${Math.max(2, segments.length + 1)}`,
        trend: "Needs review before cutoff",
      },
    ],
    rows: [
      {
        item: `${context} Queue A`,
        owner: "Ops Team A",
        status: "In Progress",
        updatedAt: "09:20",
      },
      {
        item: `${context} Queue B`,
        owner: "Ops Team B",
        status: "Pending",
        updatedAt: "10:05",
      },
      {
        item: `${context} Queue C`,
        owner: "Ops Team C",
        status: "Completed",
        updatedAt: "11:40",
      },
    ],
  };
}
