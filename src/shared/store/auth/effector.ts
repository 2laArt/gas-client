import { ISignInFields, ISignUpFields } from './type'
import { AxiosError } from 'axios'
import { createEffect } from 'effector-next'
import { toast } from 'react-toastify'
import { authService } from 'shared/api'
import { HTTPStatus } from 'shared/config'

export const signUpFx = createEffect(
  async ({ data, resetField, switchForm, setSpinner }: ISignUpFields) => {
    try {
      setSpinner(true)
      const { data: response } = await authService.signUp(data)
      if (response?.warningMessage) {
        toast.warning(response.warningMessage)
        return
      }
      toast.success('Successful registration')
      switchForm()
      resetField('name')
      resetField('password')
      resetField('email')
      return response
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }
)
export const signInFx = createEffect(
  async ({ data, resetField, setSpinner, router }: ISignInFields) => {
    try {
      setSpinner(true)
      const response = await authService.login(data)
      toast.success('Successful login')
      resetField('name')
      resetField('password')
      router.push('/dashboard')
      return response
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
    return await authService.loginCheck()
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
