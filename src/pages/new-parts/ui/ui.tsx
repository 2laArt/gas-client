import { NewPartError } from './parts-error'
import { NewPartsProducts } from './parts-prod'
import style from './style.module.scss'
import { type NextPage } from 'next'
import { PropsWithChildren, type FC } from 'react'
import { type IBoilerParts } from 'shared/api'
import { Title } from 'shared/ui'

type TypeNewParts = NextPage<{ newPartsResult: IBoilerParts | string }>
export const NewParts: TypeNewParts = ({ newPartsResult }) => {
  if (typeof newPartsResult === 'object' && !!newPartsResult.rows)
    return (
      <Wrapper>
        <NewPartsProducts newParts={newPartsResult} />
      </Wrapper>
    )
  return (
    <Wrapper>
      <NewPartError msg={newPartsResult as string} />
    </Wrapper>
  )
}

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={style.new_parts}>
    <Title size="xl">New Parts</Title>
    {children}
  </div>
)
