import { useMode } from '../lib/use-mode'
import { $mode } from '../model'
import style from './style.module.scss'
import { useStore } from 'effector-react'
import { memo, type FC } from 'react'

// eslint-disable-next-line react/display-name
export const SwitchMode: FC = memo(() => {
  const { changeMode } = useMode()
  const mode = useStore($mode)
  return (
    <div className={style.theme}>
      <input type="checkbox" checked={mode === 'light'} onChange={changeMode} />
    </div>
  )
})
