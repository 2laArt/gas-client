import style from './style.module.scss'
import clsx from 'clsx'
import { FC } from 'react'

export const SkeletonProduct: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx('card', style.skeleton_card, className)}>
      <div className={clsx(style.square, 'skeleton')} />

      <div className={clsx(style.line, 'skeleton')}></div>
      <div className={clsx(style.line, 'skeleton')}></div>
      <div className={clsx(style.line, 'skeleton')}></div>
    </div>
  )
}
