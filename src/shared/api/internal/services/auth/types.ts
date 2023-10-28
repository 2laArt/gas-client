export interface ISignInData {
  username: string
  password: string
}
export interface ICheckAuth {
  username: string
  userId: string
  email: string
}
export interface ICheckAuthMsg {
  msg: string
}
export interface ISignUpData extends ISignInData {
  email: string
}
