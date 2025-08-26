import ClientLayout from "./clientLayout";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}

import "./globals.css";

export const metadata = {
  generator: "v0.app",
};
