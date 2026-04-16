import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RichApps Operations",
    template: "%s | RichApps Operations",
  },
  description: "RichApps internal ecommerce operations platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 font-sans text-slate-100">
        <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_24%),linear-gradient(170deg,#020617_0%,#050b1e_42%,#08122b_100%)]">
          <div className="mx-auto flex w-full max-w-[1700px]">
            <AppSidebar />
            <main className="w-full flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
