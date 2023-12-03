import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className="font-inconsolata bg-neutral">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
