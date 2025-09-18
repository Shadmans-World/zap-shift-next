import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Zap Shift",
  description:
    "A curated collection of tools, guides, and assets for developing robust parcel management systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${lato.variable} antialiased max-w-7xl mx-auto text-base-500 flex flex-col space-y-1`}
      >
        <Navbar />
        <div className="min-h-[calc(100vh-335px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
