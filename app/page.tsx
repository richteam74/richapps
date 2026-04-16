const sidebarItems = [
  "Analytics",
  "Create Order",
  "Orders",
  "Shipment",
  "Push Order",
  "Generate AWB",
  "Inventory",
  "Integration",
  "Reports",
  "Finance",
  "Users",
  "Settings",
] as const;

type KpiCard = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
};

const summaryKpis: KpiCard[] = [
  {
    label: "Yearly Sales",
    value: "RM 12.84M",
    delta: "+18.6% vs 2025",
    trend: "up",
  },
  {
    label: "Today Revenue",
    value: "RM 142,890",
    delta: "+9.3% since yesterday",
    trend: "up",
  },
  {
    label: "Today Orders",
    value: "1,248",
    delta: "-2.1% since yesterday",
    trend: "down",
  },
];

type Channel = {
  name: string;
  sales: string;
  progress: number;
};

const salesChannels: Channel[] = [
  { name: "Shopee", sales: "RM 64,300", progress: 82 },
  { name: "Lazada", sales: "RM 41,220", progress: 68 },
  { name: "TikTok Shop", sales: "RM 28,090", progress: 56 },
  { name: "Website", sales: "RM 9,280", progress: 34 },
];

const topProducts = [
  { name: "RichApps Smart Scale S2", sold: "124 units", revenue: "RM 31,000" },
  { name: "RichApps Pocket Printer Mini", sold: "92 units", revenue: "RM 22,080" },
  { name: "RichApps Air Purifier Neo", sold: "68 units", revenue: "RM 27,132" },
];

type ShipmentOrder = {
  id: string;
  customer: string;
  channel: string;
  location: string;
  value: string;
  status: "Ready to Ship" | "Packed" | "In Transit" | "Pending Pickup";
};

const shipmentOrders: ShipmentOrder[] = [
  {
    id: "RA-240416-1192",
    customer: "Nur Aina B.",
    channel: "Shopee",
    location: "Shah Alam, Selangor",
    value: "RM 289",
    status: "Ready to Ship",
  },
  {
    id: "RA-240416-1186",
    customer: "Jason Lim",
    channel: "Lazada",
    location: "Johor Bahru, Johor",
    value: "RM 459",
    status: "Packed",
  },
  {
    id: "RA-240416-1174",
    customer: "Siti Hajar",
    channel: "TikTok Shop",
    location: "Kota Bharu, Kelantan",
    value: "RM 189",
    status: "Pending Pickup",
  },
  {
    id: "RA-240416-1169",
    customer: "Daniel Tan",
    channel: "Website",
    location: "Georgetown, Penang",
    value: "RM 829",
    status: "In Transit",
  },
];

const statusClasses: Record<ShipmentOrder["status"], string> = {
  "Ready to Ship": "bg-cyan-400/10 text-cyan-300 border-cyan-300/30",
  Packed: "bg-blue-400/10 text-blue-300 border-blue-300/30",
  "Pending Pickup": "bg-amber-400/10 text-amber-300 border-amber-300/30",
  "In Transit": "bg-emerald-400/10 text-emerald-300 border-emerald-300/30",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_24%),linear-gradient(170deg,#020617_0%,#050b1e_42%,#08122b_100%)] text-slate-100">
      <div className="mx-auto flex w-full max-w-[1600px]">
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-white/10 bg-slate-950/50 px-5 py-6 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">RichApps</p>
            <h1 className="text-xl font-semibold text-white">Operations Suite</h1>
          </div>
          <nav className="mt-8 flex-1 space-y-2">
            {sidebarItems.map((item, index) => {
              const isActive = item === "Analytics";
              return (
                <button
                  key={item}
                  className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                    isActive
                      ? "border-cyan-300/35 bg-cyan-300/10 text-white"
                      : "border-white/0 text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  }`}
                  type="button"
                >
                  <span>{item}</span>
                  {index < 4 ? <span className="h-2 w-2 rounded-full bg-cyan-300/70" /> : null}
                </button>
              );
            })}
          </nav>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            <p className="font-medium text-white">Need to print labels quickly?</p>
            <p className="mt-1">Use Generate AWB to batch process today&apos;s shipment list.</p>
          </div>
        </aside>

        <main className="w-full flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-lg">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">RichApps Dashboard</p>
              <h2 className="text-2xl font-semibold text-white">Analytics</h2>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-cyan-100">KL Warehouse Live</span>
              <span className="text-slate-300">|</span>
              <span className="font-medium text-white">Aiman Rosli</span>
            </div>
          </header>

          <section className="grid gap-4 xl:grid-cols-[1.7fr_1fr]">
            <article className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-indigo-500/5 p-6">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
              <p className="text-sm text-cyan-100/90">Today Sales Pulse</p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-300">Net Sales</p>
                  <p className="mt-2 text-4xl font-semibold text-white">RM 142,890</p>
                  <p className="mt-2 text-sm text-emerald-300">+9.3% from Wednesday</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-300">Live Orders</p>
                  <p className="mt-2 text-4xl font-semibold text-white">326</p>
                  <p className="mt-2 text-sm text-cyan-200">43 waiting for AWB generation</p>
                </div>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {summaryKpis.map((kpi) => (
                <article
                  key={kpi.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/65 p-4 shadow-[0_10px_40px_rgba(3,8,24,0.5)]"
                >
                  <p className="text-sm text-slate-300">{kpi.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{kpi.value}</p>
                  <p
                    className={`mt-2 text-xs ${
                      kpi.trend === "up" ? "text-emerald-300" : "text-amber-300"
                    }`}
                  >
                    {kpi.delta}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-4 grid gap-4 2xl:grid-cols-[1.45fr_1fr]">
            <article className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Sales Overview</h3>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">16 Apr 2026</p>
              </div>
              <div className="mt-5 space-y-4">
                {salesChannels.map((channel) => (
                  <div key={channel.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{channel.name}</span>
                      <span className="font-medium text-white">{channel.sales}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700/50">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{ width: `${channel.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">Top Products</h3>
              <div className="mt-5 space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-cyan-200">#{index + 1} Product</p>
                    <p className="mt-1 font-medium text-white">{product.name}</p>
                    <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
                      <span>{product.sold}</span>
                      <span className="text-emerald-300">{product.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="mt-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-white">Shipment & Order Activity</h3>
                <p className="text-sm text-slate-400">Latest cross-channel fulfilment queue</p>
              </div>
              <button
                type="button"
                className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-100"
              >
                Export Queue
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-[0.12em] text-slate-400">
                    <th className="pb-3 font-medium">Order ID</th>
                    <th className="pb-3 font-medium">Customer</th>
                    <th className="pb-3 font-medium">Channel</th>
                    <th className="pb-3 font-medium">Location</th>
                    <th className="pb-3 font-medium">Value</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {shipmentOrders.map((row) => (
                    <tr key={row.id} className="border-b border-white/5 text-slate-200 last:border-b-0">
                      <td className="py-3 font-medium text-white">{row.id}</td>
                      <td className="py-3">{row.customer}</td>
                      <td className="py-3 text-slate-300">{row.channel}</td>
                      <td className="py-3 text-slate-300">{row.location}</td>
                      <td className="py-3 font-medium text-white">{row.value}</td>
                      <td className="py-3">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs ${statusClasses[row.status]}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
