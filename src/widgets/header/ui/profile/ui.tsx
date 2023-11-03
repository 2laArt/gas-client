import style from './style.module.scss'
import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useClickOutside } from 'shared/lib'
import { $auth, logoutFx } from 'shared/store'
import { Button } from 'shared/ui/button'
import { Dropdown } from 'shared/ui/dropdown'
import { Icon } from 'shared/ui/icon'

export const Profile: FC = () => {
  const { ref, isOpen, setIsOpen } = useClickOutside(false)
  const user = useStore($auth)
  const router = useRouter()
  const logout = () => {
    logoutFx().then(() => router.push('/'))
  }
  return (
    <div className={style.profile} ref={ref}>
      <Button onClick={() => setIsOpen((prev) => !prev)} color="transparent">
        <Icon type="common" name="profile" />
      </Button>
      <Dropdown
        isOpen={isOpen && !!user.username}
        className={style.profile__dropdown}
      >
        <div>
          <div className={style.profile__dropdown__info}>
            <h6>{user.username}</h6>
            <div>{user.email}</div>
          </div>
          <button onClick={logout}>
            EXIT <span>&#10140;</span>
          </button>
        </div>
      </Dropdown>
    </div>
  )
}
