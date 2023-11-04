import React, { useEffect } from 'react'
import { COLORS } from 'shared/config'

export const useLockedBody = (isOpen: boolean, className?: string) => {
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
    React.createElement('div', { className: `overlay ${className}` }, undefined)
  )
}
