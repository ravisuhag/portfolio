import '../styles/globals.css'
import '../styles/dark.css'
import '../styles/prism.css'

import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>)
}

export default MyApp
