import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { $userCity, getUserLocation } from 'entities/location'
import { FC, useState } from 'react'
import { Spinner } from 'shared/ui'

export const Location: FC = () => {
  const { city } = useStore($userCity)
  const [spinner, setSpinner] = useState<boolean>(false)
  const getLocation = () => getUserLocation(setSpinner)
  return (
    <>
      <button
        onClick={getLocation}
        className={clsx(
          style.location,
          (city || spinner) && 'pointer-events-none'
        )}
      >
        <span>➢</span>
        <span className={style.location_box}>
          {spinner ? (
            <span className={style.spinner}>
              <Spinner size={20} />
            </span>
          ) : city ? (
            city
          ) : (
            'Location...'
          )}
        </span>
      </button>
    </>
  )
}
