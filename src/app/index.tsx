import { useAccessedPages } from './lib/use-accessed-pages'
import { useStore } from 'effector-react'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import { $mode } from 'shared/store'
import { Layout } from 'widgets/layout'

const App = ({ Component, pageProps, ...appProps }: AppProps) => {
  const mode = useStore($mode)
  const shouldLoad = useAccessedPages(appProps.router.pathname)
  const withWrapperArr = ['/']
  const ComponentWrapper = () =>
    withWrapperArr.includes(appProps.router.pathname) ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )

  return (
    shouldLoad && (
      <>
        <NextNProgress />
        <ComponentWrapper />
        <ToastContainer
          theme={mode}
          position="top-right"
          limit={10}
          closeOnClick
          rtl={false}
          hideProgressBar={false}
        />
      </>
    )
  )
}
export default App
