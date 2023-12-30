import { useRef } from 'react'

export const useObserveAboutPage = (style: string) => {
  const ref = useRef<HTMLDivElement>(null)
  const options: IntersectionObserverInit = {
    rootMargin: '150px',
    threshold: 0.5,
  }

  const callback: IntersectionObserverCallback = (entries, oberver) => {
    entries.forEach((entry) =>
      entry.isIntersecting
        ? entry.target.classList.add(style)
        : entry.target.classList.remove(style)
    )
  }
  let observer = new IntersectionObserver(callback, options)

  const connect = () => {
    if (ref.current)
      Array.from(ref.current.children).forEach((i) => {
        observer.observe(i)
      })
  }

  const disconnect = () => {
    observer.disconnect()
    if (ref.current)
      Array.from(ref.current.children).forEach((i) => {
        i.classList.add(style)
      })
  }
  return { ref, connect, disconnect }
}
