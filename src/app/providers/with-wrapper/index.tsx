import { type AppProps } from 'next/app'
import { memo } from 'react'
import { Layout } from 'widgets/layout'

export const withWrapper = ({
  Component,
  pageProps,
  ...appProps
}: AppProps) => {
  const withWrapperArr = ['/']
  return memo(() =>
    withWrapperArr.includes(appProps.router.pathname) ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  )
}
