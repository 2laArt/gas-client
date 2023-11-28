import { BasicService } from '../../config'
import type { ISignInData, ISignUpData } from './types'
import { type AxiosRequestConfig } from 'axios'

class AuthService extends BasicService<string> {
  constructor(baseUrl: string) {
    super(baseUrl)
  }
  signUp(data: ISignUpData, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'post',
      url: this._baseUrl('/signup'),
      data,
    })
  }
  login(data: ISignInData, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'post',
      url: this._baseUrl('/login'),
      data,
    })
  }
  loginCheck(config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'get',
      url: this._baseUrl('/login-check'),
    })
  }
  logout(config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'get',
      url: this._baseUrl('/logout'),
    })
  }
}
export const authService = new AuthService('users')
