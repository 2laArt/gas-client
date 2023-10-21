import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <Head>
        <title>{'GAS'}</title>

        <meta name="description" content={'test'} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App
