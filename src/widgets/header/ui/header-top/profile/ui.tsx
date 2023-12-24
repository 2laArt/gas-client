import style from './style.module.scss'
import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useClickOutside } from 'shared/lib'
import { $auth, logoutFx } from 'shared/store'
import { Button } from 'shared/ui'
import { Dropdown } from 'shared/ui/dropdown'
import { Icon } from 'shared/ui/icon'

export const Profile: FC = () => {
  const { ref, isOpen, setIsOpen } = useClickOutside(false)
  const user = useStore($auth)
  const router = useRouter()
  const redirect = () => {
    user.userId ? logoutFx().then(() => router.push('/')) : router.push('/')
  }
  const onClick = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div className={style.profile} ref={ref}>
      <button onClick={onClick}>
        <Icon type="common" name="profile" />
      </button>
      <Dropdown isOpen={isOpen} className={style.profile__dropdown}>
        <div>
          {user.userId ? (
            <div>
              <div className={style.row_info}>
                <h6>Username:</h6>
                <span>{user.username}</span>
              </div>
              <div className={style.row_info}>
                <h6>Email:</h6>
                <span>{user.email}</span>
              </div>
            </div>
          ) : (
            <div className="w-[150px] first:py-2">
              Please Sing in or Sing up
            </div>
          )}

          <Button onClick={redirect} color="transparent" size="medium">
            {user.userId ? 'EXIT' : 'ENTER'}
          </Button>
        </div>
      </Dropdown>
    </div>
  )
}
