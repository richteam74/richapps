"use client";

import { useMemo, useState } from "react";

type OrderItem = {
  id: number;
  sku: string;
  quantity: number;
  price: number;
};

type Product = {
  sku: string;
  name: string;
  basePrice: number;
};

const sellers = [
  "RichApps HQ - Shah Alam",
  "Luxana Skin KL Hub",
  "Penang Distributor",
  "Johor Selatan Fulfillment",
];

const paymentMethods = ["FPX Online Banking", "COD (Cash on Delivery)", "DuitNow QR", "Credit / Debit Card"];
const shippingMethods = ["J&T Express (Standard)", "Ninja Van (Next Day)", "Pos Laju (Economy)", "Lalamove (Same Day)"];

const malaysianStates = [
  "Selangor",
  "Kuala Lumpur",
  "Johor",
  "Pulau Pinang",
  "Perak",
  "Negeri Sembilan",
  "Pahang",
  "Sabah",
  "Sarawak",
];

const products: Product[] = [
  { sku: "LXN-FCLNSR-120", name: "Luxana Gentle Foam Cleanser 120ml", basePrice: 45.9 },
  { sku: "LXN-SRM-VITC", name: "Luxana Vitamin C Brightening Serum", basePrice: 89.0 },
  { sku: "LXN-CRM-NGT", name: "Luxana Overnight Repair Cream", basePrice: 98.5 },
  { sku: "LXN-SNSCRN50", name: "Luxana UV Shield Sunscreen SPF50", basePrice: 62.0 },
];

const cardClass =
  "rounded-2xl border border-white/10 bg-slate-900/65 p-5 shadow-[0_14px_40px_rgba(3,8,24,0.45)] backdrop-blur-md";

function SectionCard({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className={cardClass}>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        {description ? <p className="mt-1 text-sm text-slate-400">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

function LabeledField({ label, children, optional }: { label: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm text-slate-200">
      <span>
        {label}
        {optional ? <span className="ml-1 text-xs text-slate-400">(Optional)</span> : null}
      </span>
      {children}
    </label>
  );
}

function inputClassName() {
  return "w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/25";
}

function currency(value: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: 2,
  }).format(value);
}

export function CreateOrderModule() {
  const [activeTab, setActiveTab] = useState<"single" | "bulk">("single");
  const [seller, setSeller] = useState(sellers[0]);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
  const [shippingMethod, setShippingMethod] = useState(shippingMethods[0]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { id: 1, sku: products[0].sku, quantity: 1, price: products[0].basePrice },
  ]);

  const itemSubtotal = useMemo(
    () => orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [orderItems],
  );
  const shippingFee = shippingMethod.includes("Next Day") ? 12 : shippingMethod.includes("Same Day") ? 18 : 8;
  const finalSellingPrice = itemSubtotal + shippingFee;

  const addItemRow = () => {
    const next = products[0];
    setOrderItems((current) => [
      ...current,
      { id: Date.now(), sku: next.sku, quantity: 1, price: next.basePrice },
    ]);
  };

  const updateItem = (id: number, patch: Partial<OrderItem>) => {
    setOrderItems((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const removeItem = (id: number) => {
    setOrderItems((current) => (current.length === 1 ? current : current.filter((item) => item.id !== id)));
  };

  return (
    <div className="space-y-5">
      <header className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-lg">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">RichApps Internal</p>
        <h2 className="mt-1 text-2xl font-semibold text-white">Create Order</h2>
        <p className="mt-1 text-sm text-slate-300">Capture single fulfillment orders or batch import marketplace-ready CSV files.</p>
      </header>

      <div className="inline-flex rounded-xl border border-white/10 bg-slate-950/60 p-1">
        <button
          type="button"
          onClick={() => setActiveTab("single")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            activeTab === "single" ? "bg-cyan-500/20 text-cyan-100" : "text-slate-300 hover:bg-white/5"
          }`}
        >
          Single Order
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("bulk")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            activeTab === "bulk" ? "bg-cyan-500/20 text-cyan-100" : "text-slate-300 hover:bg-white/5"
          }`}
        >
          Bulk Order
        </button>
      </div>

      {activeTab === "single" ? (
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-5">
            <SectionCard title="Order Ownership" description="Assign order routing for commission and inventory movement.">
              <LabeledField label="Seller / Owner">
                <select className={inputClassName()} value={seller} onChange={(event) => setSeller(event.target.value)}>
                  {sellers.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </LabeledField>
            </SectionCard>

            <SectionCard title="Customer Information" description="Use reachable details for courier and post-delivery support.">
              <div className="grid gap-4 md:grid-cols-2">
                <LabeledField label="Customer Name">
                  <input className={inputClassName()} defaultValue="Nur Aisyah Binti Rahman" />
                </LabeledField>
                <LabeledField label="Phone">
                  <input className={inputClassName()} defaultValue="+60 12-678 9045" />
                </LabeledField>
                <div className="md:col-span-2">
                  <LabeledField label="Email" optional>
                    <input className={inputClassName()} type="email" defaultValue="aisyah.rahman@gmail.com" />
                  </LabeledField>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Delivery Address" description="Malaysia-ready address format for label printing.">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <LabeledField label="Address Line 1">
                    <input className={inputClassName()} defaultValue="No 22, Jalan Setia Murni U13/52" />
                  </LabeledField>
                </div>
                <div className="md:col-span-2">
                  <LabeledField label="Address Line 2" optional>
                    <input className={inputClassName()} defaultValue="Setia Alam" />
                  </LabeledField>
                </div>
                <LabeledField label="Postcode">
                  <input className={inputClassName()} defaultValue="40170" />
                </LabeledField>
                <LabeledField label="City">
                  <input className={inputClassName()} defaultValue="Shah Alam" />
                </LabeledField>
                <LabeledField label="State">
                  <select className={inputClassName()} defaultValue="Selangor">
                    {malaysianStates.map((state) => (
                      <option key={state}>{state}</option>
                    ))}
                  </select>
                </LabeledField>
                <LabeledField label="Country">
                  <input className={inputClassName()} defaultValue="Malaysia" />
                </LabeledField>
              </div>
            </SectionCard>

            <SectionCard title="Order Items" description="Add one or more SKUs with editable quantity and sell price.">
              <div className="space-y-3">
                {orderItems.map((item) => {
                  const selectedProduct = products.find((product) => product.sku === item.sku);
                  const lineSubtotal = item.price * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="grid gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-3 md:grid-cols-[2fr_120px_140px_130px_90px]"
                    >
                      <LabeledField label="Product">
                        <select
                          className={inputClassName()}
                          value={item.sku}
                          onChange={(event) => {
                            const nextProduct = products.find((product) => product.sku === event.target.value);
                            if (!nextProduct) return;
                            updateItem(item.id, { sku: nextProduct.sku, price: nextProduct.basePrice });
                          }}
                        >
                          {products.map((product) => (
                            <option key={product.sku} value={product.sku}>
                              {product.name}
                            </option>
                          ))}
                        </select>
                        <p className="text-xs text-slate-500">SKU: {selectedProduct?.sku}</p>
                      </LabeledField>
                      <LabeledField label="Qty">
                        <input
                          className={inputClassName()}
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(event) => updateItem(item.id, { quantity: Number(event.target.value || 1) })}
                        />
                      </LabeledField>
                      <LabeledField label="Price (MYR)">
                        <input
                          className={inputClassName()}
                          type="number"
                          min={0}
                          step="0.01"
                          value={item.price}
                          onChange={(event) => updateItem(item.id, { price: Number(event.target.value || 0) })}
                        />
                      </LabeledField>
                      <LabeledField label="Subtotal">
                        <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 px-3 py-2 text-sm font-medium text-cyan-100">
                          {currency(lineSubtotal)}
                        </div>
                      </LabeledField>
                      <div className="flex items-end">
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="w-full rounded-xl border border-rose-300/20 bg-rose-500/10 px-3 py-2 text-sm font-medium text-rose-200 hover:bg-rose-500/20"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={addItemRow}
                  className="rounded-xl border border-dashed border-cyan-300/40 px-3 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-500/10"
                >
                  + Add Product Row
                </button>
              </div>
            </SectionCard>

            <div className="grid gap-5 lg:grid-cols-2">
              <SectionCard title="Logistics & Payment">
                <div className="space-y-4">
                  <LabeledField label="Payment Method">
                    <select
                      className={inputClassName()}
                      value={paymentMethod}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                    >
                      {paymentMethods.map((method) => (
                        <option key={method}>{method}</option>
                      ))}
                    </select>
                  </LabeledField>
                  <LabeledField label="Shipping Method">
                    <select
                      className={inputClassName()}
                      value={shippingMethod}
                      onChange={(event) => setShippingMethod(event.target.value)}
                    >
                      {shippingMethods.map((method) => (
                        <option key={method}>{method}</option>
                      ))}
                    </select>
                  </LabeledField>
                </div>
              </SectionCard>

              <SectionCard title="Internal Notes">
                <div className="space-y-4">
                  <LabeledField label="Private Note">
                    <textarea
                      className={inputClassName()}
                      rows={3}
                      defaultValue="Customer requested discreet packaging. Confirm stock before 3PM dispatch."
                    />
                  </LabeledField>
                  <LabeledField label="AWB Note">
                    <textarea
                      className={inputClassName()}
                      rows={3}
                      defaultValue="Mark as fragile - skincare glass bottle set."
                    />
                  </LabeledField>
                </div>
              </SectionCard>
            </div>
          </div>

          <aside className="space-y-5">
            <SectionCard title="Final Selling Price Summary" description="Review amount before creating order.">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Items Subtotal</span>
                  <span className="font-medium text-white">{currency(itemSubtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Shipping Fee</span>
                  <span className="font-medium text-white">{currency(shippingFee)}</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Final Selling Price</span>
                    <span className="text-xl font-semibold text-cyan-100">{currency(finalSellingPrice)}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_8px_25px_rgba(14,165,233,0.35)] hover:brightness-110"
              >
                Submit Order
              </button>
            </SectionCard>

            <SectionCard title="Operations Checks">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Seller quota: <span className="text-emerald-300">Available</span></li>
                <li>• Stock reservation: <span className="text-emerald-300">Ready to allocate</span></li>
                <li>• Fraud flag: <span className="text-slate-200">No indicators</span></li>
              </ul>
            </SectionCard>
          </aside>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <SectionCard title="Bulk CSV Upload" description="Upload template from marketplaces (Shopee, TikTok Shop, Lazada).">
            <div className="rounded-2xl border border-dashed border-cyan-300/40 bg-slate-950/65 p-6 text-center">
              <p className="text-sm text-slate-200">Drop .csv file here or click to browse</p>
              <p className="mt-1 text-xs text-slate-500">Expected columns: order_id, customer_name, phone, address, sku, qty, price</p>
              <button
                type="button"
                className="mt-4 rounded-xl border border-cyan-300/35 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-500/10"
              >
                Choose CSV File
              </button>
            </div>
          </SectionCard>

          <SectionCard title="Validation Preview Panel" description="Pre-import checks to reduce fulfillment failures.">
            <div className="space-y-3 text-sm">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-3 text-emerald-100">
                284 rows parsed successfully with required fields complete.
              </div>
              <div className="rounded-xl border border-amber-300/25 bg-amber-500/10 p-3 text-amber-100">
                12 rows need postcode normalization (e.g. 05400 vs 5400).
              </div>
              <div className="rounded-xl border border-rose-300/25 bg-rose-500/10 p-3 text-rose-100">
                4 rows blocked: SKU not found in active catalog.
              </div>
            </div>
          </SectionCard>

          <section className="lg:col-span-2 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Ready to Import", value: "284", tone: "text-emerald-200" },
              { label: "Needs Review", value: "12", tone: "text-amber-200" },
              { label: "Rejected", value: "4", tone: "text-rose-200" },
            ].map((item) => (
              <article key={item.label} className={cardClass}>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                <p className={`mt-2 text-3xl font-semibold ${item.tone}`}>{item.value}</p>
              </article>
            ))}
          </section>

          <SectionCard
            title="Error List"
            description="Placeholder for row-level import errors. Integrate parser API response in implementation phase."
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-[0.12em] text-slate-400">
                    <th className="pb-2 font-medium">Row</th>
                    <th className="pb-2 font-medium">Order Ref</th>
                    <th className="pb-2 font-medium">Issue</th>
                    <th className="pb-2 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { row: "18", ref: "TT-220184", issue: "SKU LXN-MASK-5 not found", action: "Replace SKU" },
                    { row: "77", ref: "SP-905221", issue: "Missing phone number", action: "Update customer phone" },
                    { row: "193", ref: "LZD-66210", issue: "Invalid postcode format", action: "Correct postcode" },
                  ].map((entry) => (
                    <tr key={entry.row} className="border-b border-white/5 text-slate-200 last:border-none">
                      <td className="py-2">{entry.row}</td>
                      <td className="py-2 font-medium text-white">{entry.ref}</td>
                      <td className="py-2">{entry.issue}</td>
                      <td className="py-2 text-cyan-200">{entry.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </div>
      )}
    </div>
  );
}
