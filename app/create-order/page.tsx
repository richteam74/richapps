import type { Metadata } from "next";
import { CreateOrderModule } from "./create-order-module";

export const metadata: Metadata = {
  title: "Create Order",
};

export default function Page() {
  return <CreateOrderModule />;
}
