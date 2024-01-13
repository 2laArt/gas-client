import style from './style.module.scss'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { memo, type PropsWithChildren } from 'react'

interface IDropdown extends PropsWithChildren {
  isOpen: boolean
  className?: string
}

// eslint-disable-next-line react/display-name
export const Dropdown = memo(({ children, isOpen, className }: IDropdown) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={clsx(style.dropdown, className)}
          initial={{ height: isOpen ? '0' : 'auto' }}
          animate={{ height: 'auto' }}
          exit={{ height: '0' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
})
