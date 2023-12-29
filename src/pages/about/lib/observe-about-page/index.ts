import { type RefObject } from 'react'

export const observeAboutPage = (
  ref: RefObject<HTMLDivElement>,
  style: string
) => {
  if (!ref.current) return
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
  const observer = new IntersectionObserver(callback, options)

  Array.from(ref.current.children).forEach((i) => {
    observer.observe(i)
  })
}
