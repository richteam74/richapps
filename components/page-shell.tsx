import type { PageCard, TableRow } from "@/lib/page-content";

type PageShellProps = {
  title: string;
  subtitle: string;
  cards: PageCard[];
  rows: TableRow[];
};

export function PageShell({ title, subtitle, cards, rows }: PageShellProps) {
  return (
    <div>
      <header className="mb-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-lg">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">RichApps Internal</p>
        <h2 className="mt-1 text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className="rounded-2xl border border-white/10 bg-slate-900/65 p-4 shadow-[0_10px_40px_rgba(3,8,24,0.5)]"
          >
            <p className="text-sm text-slate-300">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{card.value}</p>
            <p className="mt-2 text-xs text-cyan-200">{card.trend}</p>
          </article>
        ))}
      </section>

      <section className="mt-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Activity Table</h3>
            <p className="text-sm text-slate-400">Structured placeholder data for implementation stage</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-[0.12em] text-slate-400">
                <th className="pb-3 font-medium">Item</th>
                <th className="pb-3 font-medium">Owner</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.item} className="border-b border-white/5 text-slate-200 last:border-none">
                  <td className="py-3 font-medium text-white">{row.item}</td>
                  <td className="py-3">{row.owner}</td>
                  <td className="py-3">{row.status}</td>
                  <td className="py-3">{row.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
