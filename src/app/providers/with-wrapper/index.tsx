import { useAccessedPages } from 'app/lib/use-accessed-pages'
import { type AppProps } from 'next/app'
import { Layout } from 'widgets/layout'

export const withWrapper = ({
  Component,
  pageProps,
  ...appProps
}: AppProps) => {
  const withWrapperArr = ['/']
  const { shouldLoadContent } = useAccessedPages(appProps.router.pathname)
  return !withWrapperArr.includes(appProps.router.pathname) ? (
    !!shouldLoadContent && (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  ) : (
    <Component {...pageProps} />
  )
}
