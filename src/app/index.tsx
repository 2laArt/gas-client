import { useAccessedPages } from './lib/use-accessed-pages'
import { withSeo, withWrapper } from './providers'
import { useStore } from 'effector-react'
import { $mode } from 'features/switch-mode'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { useCallback } from 'react'
import { ToastContainer } from 'react-toastify'

const App = ({ Component, pageProps, ...appProps }: AppProps) => {
  const mode = useStore($mode)
  const shouldLoad = useAccessedPages(appProps.router.pathname)
  const ComponentWrapper = useCallback(
    withWrapper({ Component, pageProps, ...appProps }),
    [appProps.router.pathname, Component, pageProps]
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

export default withSeo(App)
