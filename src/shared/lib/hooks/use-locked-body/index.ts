import clsx from 'clsx'
import React, { useEffect } from 'react'
import { COLORS } from 'shared/config'

interface ILockedBody {
  isOpen: boolean
  bpHidden?: 'lg' | 'md' | 'sm' | 'xs'
  className?: string
}

export const useLockedBody = ({ isOpen, bpHidden, className }: ILockedBody) => {
  useEffect(() => {
    const isMobile =
      navigator.userAgent.includes('Android') ||
      navigator.userAgent.includes('iPad') ||
      navigator.userAgent.includes('iPhone')
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    const scrollBarWidth = window.innerWidth - document.body.offsetWidth
    !isMobile &&
      (document.body.style.borderRight = isOpen
        ? `${scrollBarWidth}px solid ${COLORS.gray}`
        : '0')
    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.borderRight = '0'
    }
  }, [isOpen])
  return (
    isOpen &&
    React.createElement(
      'div',
      {
        className: clsx('overlay', bpHidden && `${bpHidden}:hidden`, className),
      },
      undefined
    )
  )
}
