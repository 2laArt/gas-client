import { useAccessedPages } from 'app/lib/use-accessed-pages'
import { type AppProps } from 'next/app'
import { Loading } from 'pages/loading'
import { useEffect, useState } from 'react'
import { paths } from 'shared/routing'
import Layout from 'widgets/layout'

export const withWrapper = ({
  Component,
  pageProps,
  router,
  ...appProps
}: AppProps) => {
  const [isLoad, setIsLoad] = useState<boolean>(false)
  const withWrapperArr = [paths.auth, paths.loading]
  const { shouldLoadContent } = useAccessedPages(router.pathname)
  useEffect(() => {
    setTimeout(() => setIsLoad(true), 500)
  }, [])

  if (!isLoad || !shouldLoadContent) {
    return <Loading />
  }

  if (!withWrapperArr.includes(router.pathname)) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
  return <Component {...pageProps} />
}
