import '../styles/globals.css'
import Layout from '../layout/Layout'
import '../styles/Transition.css'
import Transition from '../components/Transition2'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <Transition>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
