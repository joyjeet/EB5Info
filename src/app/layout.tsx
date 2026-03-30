import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "EB5 Info",
    template: "%s | EB5 Info",
  },
  description: "EB-5 visa processing guidance website for investors currently in the United States.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}