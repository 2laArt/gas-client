import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { ICheckAuth } from 'shared/api'
import { paths } from 'shared/routing'
import { loginCheckFx, setAuth } from 'shared/store'

export const useAccessedPages = (pathname: string) => {
  const [shouldLoadContent, setShouldLoadContent] = useState<boolean>(false)
  const router = useRouter()
  const shouldCheckPage = useRef(true)
  const accessedPages = [
    paths.auth,
    paths.about,
    paths.shoppingPayment,
    paths.wholesaleBuyers,
  ]

  useEffect(() => {
    if (shouldCheckPage.current) {
      shouldCheckPage.current = false
      checkAuth()
      setTimeout(() => (shouldCheckPage.current = true))
    }
  }, [pathname])

  const checkAuth = async () => {
    const user = await loginCheckFx()
    if (accessedPages.includes(pathname)) {
      setShouldLoadContent(true)
      if (pathname === paths.auth && user) {
        router.push('/dashboard')
      }
      return
    }
    if (user) {
      setAuth(user as ICheckAuth)
      setShouldLoadContent(true)
      return
    }
    toast.info('Please Sign In or Sign Up')
    router.push('/')
  }

  return { shouldLoadContent }
}
