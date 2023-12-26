import { useAccessedPages } from 'app/lib/use-accessed-pages'
import { type AppProps } from 'next/app'
import { Loading } from 'pages/loading'
import { paths } from 'shared/routing'
import Layout from 'widgets/layout'

export const withWrapper = ({
  Component,
  pageProps,
  ...appProps
}: AppProps) => {
  const withWrapperArr = [paths.auth, paths.loading]

  const { shouldLoadContent } = useAccessedPages(appProps.router.pathname)

  const AccessedPages = !!shouldLoadContent ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Loading />
  )
  return !withWrapperArr.includes(appProps.router.pathname) ? (
    AccessedPages
  ) : (
    <Component {...pageProps} />
  )
}
