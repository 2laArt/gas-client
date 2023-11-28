import { AxiosRequestConfig } from 'axios'

type Endpoint<
  P extends object = object,
  C extends Partial<AxiosRequestConfig> = Partial<AxiosRequestConfig>
> = (params?: P, config?: C) => Partial<AxiosRequestConfig>

type AuthEndpoints = 'signup' | 'login' | 'logout' | 'login-check'
type PaymentEndpoints = 'info'
type BoilerEndpoints =
  | 'new'
  | 'bestsellers'
  | 'search'
  | `find/${string}`
  | string
type CartEndpoints =
  | `count/${string}`
  | `one/${string}`
  | `all/${string}`
  | `total-price/${string}`
  | 'add'
  | string

interface IAuthService {
  _baseUrl: (url: AuthEndpoints) => string
  signUp: Endpoint<ISignUpData>
  login: Endpoint<ISignInData>
  loginCheck: Endpoint
  logout: Endpoint
}
