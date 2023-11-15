import style from './style.module.scss'
import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useClickOutside } from 'shared/lib'
import { $auth, logoutFx } from 'shared/store'
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
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <Icon type="common" name="profile" />
      </button>
      <Dropdown
        isOpen={isOpen && !!user.username}
        className={style.profile__dropdown}
      >
        <div>
          <div className={style.profile__dropdown__info}>
            <div className={style.row_info}>
              <h6>Username:</h6>
              <span>{user.username}</span>
            </div>
            <div className={style.row_info}>
              <h6>Email:</h6>
              <span>{user.email}</span>
            </div>
          </div>
          <button onClick={logout}>
            EXIT <span>&#10140;</span>
          </button>
        </div>
      </Dropdown>
    </div>
  )
}
