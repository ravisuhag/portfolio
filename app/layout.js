import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { PersonSchema, WebsiteSchema } from "../lib/schema";

import "../styles/globals.css";
import "../styles/resume.css";
import "../styles/dark.css";
import "../styles/code.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={inter.className}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="theme-color"
            content="#000000"
            media="(prefers-color-scheme: dark)"
          />
          <meta
            name="theme-color"
            content="#ffffff"
            media="(prefers-color-scheme: light)"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <PersonSchema />
          <WebsiteSchema />
        </head>
        <body>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
