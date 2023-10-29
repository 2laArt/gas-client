import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { $mode, setMode, themes } from 'shared/store'

export const useMode = () => {
  const mode = useStore($mode)

  const changeMode = () => {
    if (mode !== themes.dark) {
      localStorage.setItem('mode', JSON.stringify(themes.dark))
      setMode(themes.dark)
      return
    }
    localStorage.setItem('mode', JSON.stringify(themes.light))
    setMode(themes.light)
  }
  useEffect(() => {
    const root = window.document.documentElement
    mode === 'dark' ? root.classList.add('dark') : root.classList.remove('dark')
  }, [mode])
  useEffect(() => {
    const windowsMode: boolean = window.matchMedia(
      `(prefers-color-scheme: ${themes.dark})`
    ).matches
    const userMode = JSON.parse(localStorage.getItem('mode') as string)
    if (userMode) {
      setMode(userMode)
      return
    }
    if (windowsMode && mode === themes.light) {
      setMode(themes.dark)
      return
    }
  }, [])
  return { changeMode }
}
