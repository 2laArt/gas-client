import style from './style.module.scss'
import { FC, useState } from 'react'
import { deleteOneFromCartFx } from 'shared/store/cart'
import { Button, Icon } from 'shared/ui'

interface IDeleteCartItem {
  partId: number
}
export const DeleteCartItem: FC<IDeleteCartItem> = ({ partId }) => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const deleteItem = () => {
    setSpinner(true)
    deleteOneFromCartFx(partId).finally(() => setSpinner(false))
  }
  return (
    <Button
      color="transparent"
      className={style.delete}
      loading={spinner}
      spinner={{ color: 'blue' }}
      onClick={deleteItem}
    >
      <span className={style.delete_cross}>
        <Icon type="common" name="close" />
      </span>
      <span className={style.delete_text}>Delete</span>
    </Button>
  )
}
