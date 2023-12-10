import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'

interface IUseOutSide {
  ref: any
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
type AnyEvent = MouseEvent | TouchEvent

export const useClickOutside = (initialState: boolean): IUseOutSide => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)
  const ref = useRef<HTMLElement>(null)
  const handlerClick = (event: AnyEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event?.target as Node) &&
      !(
        (event.target as HTMLElement).getAttribute('data-include') ===
        'included'
      )
    ) {
      setIsOpen(false)
      return
    }
  }
  const keyHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handlerClick)
    document.addEventListener('touchstart', handlerClick)
    document.addEventListener('keydown', keyHandler)
    return () => {
      document.addEventListener('click', handlerClick)
      document.addEventListener('touchstart', handlerClick)
      document.addEventListener('keydown', keyHandler)
    }
  }, [])
  return { isOpen, setIsOpen, ref }
}
