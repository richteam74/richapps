"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarSections } from "@/lib/sidebar";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-80 shrink-0 border-r border-white/10 bg-slate-950/60 px-5 py-6 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">RichApps</p>
        <h1 className="text-xl font-semibold text-white">Operations Platform</h1>
      </div>

      <nav className="mt-6 flex-1 space-y-5 overflow-y-auto pr-1">
        {sidebarSections.map((section) => (
          <section key={section.label}>
            <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">{section.label}</p>
            <div className="space-y-1.5">
              {section.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-xl border px-3 py-2 text-sm transition ${
                      isActive
                        ? "border-cyan-300/35 bg-cyan-300/10 text-white"
                        : "border-white/0 text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </nav>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
        <p className="font-medium text-white">Ops Note</p>
        <p className="mt-1">Review shipment logs and finance reconciliations before daily close at 18:00.</p>
      </div>
    </aside>
  );
}
