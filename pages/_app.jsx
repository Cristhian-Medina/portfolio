import Layout from '@components/Layout'

import '@styles/globals.css'
import '@styles/variables.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
