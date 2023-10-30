import { useEffect, useState } from 'react'

const getWindowWidth = (): number => {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 }
  return windowWidth
}

const useWindowWidth = (): {
  windowWidth: number
} => {
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth())
  const handleResize = () => setWindowWidth(getWindowWidth())
  useEffect(() => {
    window.addEventListener('resize', handleResize, true)
    return window.removeEventListener('resize', handleResize)
  }, [])
  return { windowWidth }
}

export const useMediaQuery = (maxWidth: number): boolean => {
  const { windowWidth } = useWindowWidth()
  const [isMedia, setMedia] = useState<boolean>(false)

  useEffect(() => {
    windowWidth < maxWidth ? setMedia(true) : setMedia(false)
  }, [windowWidth, maxWidth])
  return isMedia
}
