import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { type ICheckAuth } from 'shared/api'
import { paths } from 'shared/routing'
import { $auth, loginCheckFx, setAuth } from 'shared/store'

export const useAccessedPages = (pathname: string) => {
  const [shouldLoadContent, setShouldLoadContent] = useState<boolean>(false)
  const router = useRouter()
  const { userId } = useStore($auth)
  const shouldCheckPage = useRef(true)
  const accessedPages = useMemo(
    () => [
      paths.about,
      paths.contacts,
      // paths.shoppingPayment,
      paths.infoBuyers,
      paths.dashboard,
    ],
    [paths]
  )

  useEffect(() => {
    if (shouldCheckPage.current) {
      shouldCheckPage.current = false
      checkAuth()
    }
  }, [pathname])

  const checkAuth = async () => {
    // debugger
    if (userId) {
      setShouldLoadContent(true)
      return
    }

    const user = await loginCheckFx()

    if (accessedPages.includes(pathname) && !user) {
      setShouldLoadContent(true)
      return
    }

    if (!user && pathname !== paths.auth) {
      toast.info('Please Sign In or Sign Up', { autoClose: 15000 })
      router.push('/')
    }

    if (user) {
      setAuth(user as ICheckAuth)
      setShouldLoadContent(true)
      if (pathname === paths.auth) {
        router.push('/dashboard')
      }
      return
    }
  }

  return { shouldLoadContent }
}
