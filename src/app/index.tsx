import { useStore } from 'effector-react'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import { $mode } from 'shared/store'
import { Layout } from 'widgets/layout'

const App = ({ Component, pageProps }: AppProps) => {
  const mode = useStore($mode)
  return (
    <>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
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
}
export default App
