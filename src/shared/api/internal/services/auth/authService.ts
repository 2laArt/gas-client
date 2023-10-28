import { axiosClassic } from '../../config'
import { ICheckAuth, ICheckAuthMsg, ISignInData, ISignUpData } from './types'

export const authService = {
  signUp: async (userData: ISignUpData): Promise<any> => {
    const { data } = await axiosClassic.post('/users/signup', userData)
    return data
  },
  signIn: async (userData: ISignInData) => {
    const { data } = await axiosClassic.post('/users/login', userData)
    return data
  },
  loginCheck: async (): Promise<ICheckAuth | ICheckAuthMsg> => {
    const { data } = await axiosClassic.get('/users/login-check')
    return data
  },
  logout: async () => {
    const { data } = await axiosClassic.get('/users/logout')
    return data
  },
}
