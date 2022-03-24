import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AmazonProvider } from '../context/AmazonContext.js'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmazonProvider>
      <Component {...pageProps} />
    </AmazonProvider>
  )
}

export default MyApp
