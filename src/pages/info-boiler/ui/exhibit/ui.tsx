import { interactiveSigns, type IInteractiveSigns } from '../config'
import style from './style.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { memo, type Dispatch, type FC, type SetStateAction } from 'react'
import { Icon } from 'shared/ui'

interface IExhibit {
  setActiveSection: Dispatch<SetStateAction<IInteractiveSigns | undefined>>
}

// eslint-disable-next-line react/display-name
export const Exhibit: FC<IExhibit> = memo(({ setActiveSection }) => {
  return (
    <div className={style.interactive}>
      <Image
        className="relative"
        src={'/images/boiler/boiler-new.png'}
        alt="boiler"
        width={600}
        height={600}
        priority
      />
      <div>
        {interactiveSigns.map((item) => (
          <button
            className={clsx(style.sign, style[`sign_${item.id}`])}
            key={item.id}
            onClick={() => setActiveSection(item)}
          >
            <Icon type="common" name="exclamation" />
          </button>
        ))}
      </div>
    </div>
  )
})
