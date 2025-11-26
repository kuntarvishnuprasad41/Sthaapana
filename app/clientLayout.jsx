"use client";

import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const ivyOraDisplay = localFont({
  src: [
    {
      path: "../public/fonts/IvyOraDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IvyOraDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IvyOraDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ivyora-display",
  display: "swap",
  fallback: ["serif"],
});

const haskoy = localFont({
  src: [
    {
      path: "../public/fonts/Haskoy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Haskoy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-haskoy",
  display: "swap",
  fallback: ["sans-serif"],
});

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Dynamic language and direction based on pathname
  const isKannada = pathname.startsWith("/kan");
  const lang = isKannada ? "kan" : "en";
  const dir = isKannada ? "ltr" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${ivyOraDisplay.variable} ${haskoy.variable} antialiased`}
    >
      <head>
        <title>Sthaapana Constructions</title>
        <head>
          <link rel="icon" href="/logo.svg" />
        </head>
        <meta
          name="description"
          content="Build your dream with Sthaapana. Expert construction services for residential and commercial projects."
        />
        <meta name="generator" content="v0.app" />
      </head>
      <body className="font-haskoy bg-black text-white overflow-x-hidden">
        <ThemeProvider defaultTheme="dark">
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
