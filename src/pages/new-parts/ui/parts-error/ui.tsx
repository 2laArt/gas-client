import style from './style.module.scss'
import { useEffect, type FC } from 'react'
import { toast } from 'react-toastify'
import { SkeletonProduct } from 'shared/ui'

export const NewPartError: FC<{ msg: string }> = ({ msg }) => {
  const Skeleton = [...Array(6)].map((_, idx) => <SkeletonProduct key={idx} />)
  useEffect(() => {
    toast.error(msg)
  }, [msg])
  return (
    <div className={style.error}>
      <div className={style.warring}>
        Sorry, there was an error. Please come back later
      </div>
      <div>{Skeleton}</div>
    </div>
  )
}
