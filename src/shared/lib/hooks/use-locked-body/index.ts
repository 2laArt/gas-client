import { useMediaQuery } from '../use-media-query'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { COLORS } from 'shared/config'

interface ILockedBody {
  isOpen: boolean
  bpHidden?: 'lg' | 'md' | 'sm' | 'xs'
  className?: string
}

export const useLockedBody = ({ isOpen, bpHidden, className }: ILockedBody) => {
  const breakpoints = {
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 518,
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const bp = bpHidden ? useMediaQuery(breakpoints[bpHidden]) : true
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth || 10
  useEffect(() => {
    const isMobile =
      navigator.userAgent.includes('Android') ||
      navigator.userAgent.includes('iPad') ||
      navigator.userAgent.includes('iPhone')

    document.body.style.overflow = isOpen && bp ? 'hidden' : 'auto'

    !isMobile &&
      bp &&
      (document.body.style.borderRight = isOpen
        ? `${scrollBarWidth}px solid ${COLORS.gray}`
        : '0')
    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.borderRight = '0'
    }
  }, [isOpen, bp, scrollBarWidth])
  return (
    isOpen &&
    bp &&
    React.createElement(
      'div',
      {
        className: clsx('overlay', className),
      },
      undefined
    )
  )
}
