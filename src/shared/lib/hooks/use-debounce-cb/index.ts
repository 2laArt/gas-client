import { useEffect, useRef, type MutableRefObject } from 'react'

export const useDebounceCallback = (
  callback: Function,
  delay: number = 100
): Function => {
  const ref = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
  useEffect(() => clearTimeout(ref.current), [])
  return (...arg: unknown[]) => {
    clearTimeout(ref.current)
    ref.current = setTimeout(() => callback(...arg), delay)
  }
}
