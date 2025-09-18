import type { Metadata } from "next";
import {  Lato } from "next/font/google";
import "./globals.css";



const lato = Lato({
  weight: ["400","700","900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Zap Shift",
  description: "A curated collection of tools, guides, and assets for developing robust parcel management systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='light'>
      <body
        className={`${lato.variable} antialiased max-w-[95%] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
