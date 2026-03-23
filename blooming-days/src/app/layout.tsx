import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blooming Days | Fresh Floral Arrangements",
  description:
    "Handcrafted floral arrangements for every occasion. Order fresh bouquets and custom arrangements from Blooming Days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
