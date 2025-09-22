
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import AosProvider from "@/components/shared/AosProvider";



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
    <html lang="en">
      <body 
        className={`${lato.variable} antialiased max-w-7xl mx-auto text-base-500 flex flex-col gap-3`}
      >
        <Navbar/>
        
        <AosProvider/>
        <div className="min-h-[calc(100vh-335px)] p-2">{children}</div>
        <Footer />
        <SpeedInsights/>
      </body>

    </html>
  );
}
