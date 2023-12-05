import style from './style.module.scss'
import { type FC } from 'react'
import { Button } from 'shared/ui'

interface IBtnOptions {
  title: string
  onClick: VoidFunction
  disabled: boolean
}

interface IChangeButtons {
  btnTop: IBtnOptions
  btnBottom: IBtnOptions
  hiddenBtn?: boolean
}
export const ChangeButtons: FC<IChangeButtons> = ({
  btnBottom,
  btnTop,
  hiddenBtn,
}) => {
  return (
    <>
      <Button
        disabled={btnTop.disabled}
        className={style.btn}
        onClick={btnTop.onClick}
      >
        {btnTop.title}
      </Button>

      <Button
        disabled={btnBottom.disabled}
        style={{
          display: hiddenBtn ? 'none' : '',
        }}
        className={style.btn}
        onClick={btnBottom.onClick}
      >
        {btnBottom.title}
      </Button>
    </>
  )
}
