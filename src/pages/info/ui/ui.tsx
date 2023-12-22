import { interactiveSigns, type IInteractiveSigns } from './config'
import { InfoDescription } from './description'
import style from './style.module.scss'
import { InfoWelcome } from './welcome'
import clsx from 'clsx'
import { type NextPage } from 'next'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { useLockedBody, useMediaQuery } from 'shared/lib'
import { Icon } from 'shared/ui'

//is1024 ? 150 : 200
export const InfoBuyers: NextPage = () => {
  const [activeSection, setActiveSection] = useState<IInteractiveSigns>()
  const is1024 = useMediaQuery(1024)
  const is768 = useMediaQuery(768)
  useLockedBody({ isOpen: !!activeSection?.id, bpHidden: 'md' })
  const descriptionImgSize = useMemo(() => (is1024 ? 150 : 200), [is1024])
  return (
    <div className={clsx(style.info_buyers)}>
      {is768 && <InfoWelcome />}
      {is768 && activeSection?.id && (
        <div className={style.mobile_box}>
          <InfoDescription {...activeSection} imgSize={descriptionImgSize} />
          <button
            className={style.mobile_close}
            onClick={() => setActiveSection(undefined)}
          >
            <Icon type="common" name="close" />
          </button>
        </div>
      )}
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

      {!is768 &&
        (activeSection?.id ? (
          <InfoDescription {...activeSection} imgSize={descriptionImgSize} />
        ) : (
          <InfoWelcome />
        ))}
    </div>
  )
}
