import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import type { Dispatch, SetStateAction } from 'react'
import type { UseFormReset } from 'react-hook-form'
import { ISignInData, ISignUpData } from 'shared/api'

export interface ISignInFields {
  data: ISignInData
  resetField: UseFormReset<any>
  setSpinner: Dispatch<SetStateAction<boolean>>
  router: AppRouterInstance
}
export interface ISignUpFields extends Omit<ISignInFields, 'data' | 'router'> {
  data: ISignUpData
  switchForm: () => void
}
