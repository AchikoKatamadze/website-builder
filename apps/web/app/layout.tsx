import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Builder",
  description: "A modular website-building foundation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
