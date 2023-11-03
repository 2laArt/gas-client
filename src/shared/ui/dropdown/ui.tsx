import style from './style.module.scss'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { type PropsWithChildren } from 'react'

interface IDropdown extends PropsWithChildren {
  isOpen: boolean
  className?: string
}

export const Dropdown = ({ children, isOpen, className }: IDropdown) => {
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
}
