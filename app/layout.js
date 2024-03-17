import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

import '../styles/globals.css'
import '../styles/dark.css'
import '../styles/prism.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <SpeedInsights />
    </html>
  )
}