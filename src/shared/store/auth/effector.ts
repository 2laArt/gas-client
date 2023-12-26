import type { ISignInFields, ISignUpFields } from './type'
import { AxiosError } from 'axios'
import { createEffect } from 'effector-next'
import { toast } from 'react-toastify'
import { authService } from 'shared/api'
import { HTTPStatus } from 'shared/config'
import { paths } from 'shared/routing'

export const signUpFx = createEffect(
  async ({
    data: payload,
    resetField,
    switchForm,
    setSpinner,
  }: ISignUpFields) => {
    try {
      setSpinner(true)
      const { data } = await authService.signUp(payload)
      if ('warningMessage' in data) {
        toast.warning(data.warningMessage)
        return
      }
      toast.success('Successful registration')
      switchForm()
      resetField('name')
      resetField('password')
      resetField('email')
      return data
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }
)
export const signInFx = createEffect(
  async ({ data: payload, resetField, setSpinner, router }: ISignInFields) => {
    try {
      setSpinner(true)
      const { data } = await authService.login(payload)
      toast.success('Successful login')
      resetField('name')
      resetField('password')
      router.push(paths.dashboard)
      return data
    } catch (error) {
      const response = (error as AxiosError).response
      if (response?.status === HTTPStatus.UNAUTHORIZED) {
        toast.error('invalid username or password')
      } else toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }
)
export const loginCheckFx = createEffect(async () => {
  try {
    return (await authService.loginCheck()).data
  } catch (error) {
    const axiosError = error as AxiosError
    if (
      axiosError.response &&
      axiosError.response.status === HTTPStatus.FORBIDDEN
    ) {
      return false
    }
    toast.error((error as Error).message)
  }
})
export const logoutFx = createEffect(async () => {
  try {
    await authService.logout()
  } catch (error) {
    toast.error((error as Error).message)
  }
})
