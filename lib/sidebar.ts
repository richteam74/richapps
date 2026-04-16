export type SidebarLink = {
  label: string;
  href: string;
};

export type SidebarSection = {
  label: string;
  links: SidebarLink[];
};

export const sidebarSections: SidebarSection[] = [
  {
    label: "Overview",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Orders", href: "/orders" },
      { label: "Create Order", href: "/create-order" },
    ],
  },
  {
    label: "Shipping",
    links: [
      { label: "Push Orders", href: "/shipping/push-orders" },
      { label: "Generate AWB", href: "/shipping/generate-awb" },
      { label: "Postcode Checker", href: "/shipping/postcode-checker" },
      { label: "Pickup Locations", href: "/shipping/pickup-locations" },
      { label: "Couriers", href: "/shipping/couriers" },
      { label: "Shipment Logs", href: "/shipping/shipment-logs" },
    ],
  },
  {
    label: "Inventory",
    links: [
      { label: "Products", href: "/inventory/products" },
      { label: "Brands", href: "/inventory/brands" },
      { label: "Bundles", href: "/inventory/bundles" },
      { label: "Stock Adjustment", href: "/inventory/stock-adjustment" },
      { label: "Stock Log", href: "/inventory/stock-log" },
      { label: "Pending Stock", href: "/inventory/pending-stock" },
    ],
  },
  {
    label: "Reports",
    links: [
      { label: "Sales Overview", href: "/reports/sales-overview" },
      { label: "Profit Overview", href: "/reports/profit-overview" },
      { label: "Sales Breakdown", href: "/reports/sales-breakdown" },
      { label: "Sales Channels", href: "/reports/sales-channels" },
      { label: "Seller Summary", href: "/reports/seller-summary" },
      { label: "Seller Detail", href: "/reports/seller-detail" },
      { label: "SKU Report", href: "/reports/sku-report" },
      { label: "Product Trend", href: "/reports/product-trend" },
      { label: "Stock Summary", href: "/reports/stock-summary" },
      { label: "Stock Movement", href: "/reports/stock-movement" },
      { label: "Delivery Report", href: "/reports/delivery-report" },
      { label: "State Report", href: "/reports/state-report" },
      { label: "Export Orders", href: "/reports/export-orders" },
    ],
  },
  {
    label: "Finance",
    links: [
      { label: "COD Tracker", href: "/finance/cod-tracker" },
      { label: "Net Profit", href: "/finance/net-profit" },
    ],
  },
  {
    label: "Users",
    links: [
      { label: "My Profile", href: "/users/my-profile" },
      { label: "Users List", href: "/users/users-list" },
      { label: "Recruitment Tree", href: "/users/recruitment-tree" },
      { label: "Role Manager", href: "/users/role-manager" },
      { label: "Activity Logs", href: "/users/activity-logs" },
    ],
  },
  {
    label: "Integrations",
    links: [
      { label: "Webhooks", href: "/integrations/webhooks" },
      { label: "Custom API", href: "/integrations/custom-api" },
      { label: "Couriers", href: "/integrations/couriers" },
    ],
  },
  {
    label: "System",
    links: [{ label: "Settings", href: "/settings" }],
  },
];
