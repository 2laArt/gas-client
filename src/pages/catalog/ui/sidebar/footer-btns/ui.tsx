import style from './style.module.scss'
import { type FC } from 'react'
import { Button } from 'shared/ui'

interface IBtnOptions {
  title: string
  onClick: VoidFunction
  disabled: boolean
}

interface ISidebarButtons {
  btnTop: IBtnOptions
  btnBottom: IBtnOptions
  hiddenBtn?: boolean
}
export const SidebarButtons: FC<ISidebarButtons> = ({
  btnBottom,
  btnTop,
  hiddenBtn,
}) => {
  return (
    <div className={style.btns}>
      <Button disabled={btnTop.disabled} onClick={btnTop.onClick}>
        {btnTop.title}
      </Button>

      <Button
        disabled={btnBottom.disabled}
        style={{
          display: hiddenBtn ? 'none' : '',
        }}
        onClick={btnBottom.onClick}
      >
        {btnBottom.title}
      </Button>
    </div>
  )
}
