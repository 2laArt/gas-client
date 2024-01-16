import { withSeo, withWrapper } from './providers'
import { useStore } from 'effector-react'
import { $mode, useMode } from 'features/switch-mode'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { useCallback, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { healthCheckService } from 'shared/api'

const App = ({ Component, pageProps, ...appProps }: AppProps) => {
  const mode = useStore($mode)
  useMode()

  const ComponentWrapper = useCallback(
    () =>
      withWrapper({
        Component,
        pageProps,
        ...appProps,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [appProps.router.pathname, Component, pageProps]
  )

  return (
    <>
      <NextNProgress />
      <ComponentWrapper />
      <ToastContainer
        theme={mode}
        position="bottom-right"
        limit={10}
        closeOnClick
        rtl={false}
        hideProgressBar={false}
      />
    </>
  )
}

export default withSeo(App)
