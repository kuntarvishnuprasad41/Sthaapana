import ClientLayout from "./clientLayout";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <ClientLayout>
      <div className="flicker-fix"> {children}</div>
      <SpeedInsights />
      <Analytics />
    </ClientLayout>
  );
}

import "./globals.css";

export const metadata = {
  generator: "v0.app",
};
