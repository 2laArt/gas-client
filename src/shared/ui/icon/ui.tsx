import { Sprite } from './sprite'
import style from './style.module.scss'

export type IconName<Group extends keyof Sprite> = Sprite[Group]

export interface IconProps<Group extends keyof Sprite> {
  name: IconName<Group>
  type?: Group
}

export function Icon<Group extends keyof Sprite = 'common'>({
  type,
  name,
}: IconProps<Group>) {
  return (
    <svg className={style.icon}>
      <use xlinkHref={`/sprite/${type}.svg#${name}`} />
    </svg>
  )
}
