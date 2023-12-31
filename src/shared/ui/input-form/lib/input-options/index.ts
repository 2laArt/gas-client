import type { RegisterOptions } from 'react-hook-form'

type addOptionsType = Omit<
  RegisterOptions,
  'pattern' | 'valueAsNumber' | 'valueAsDate'
>
type defaultOptionType = (addOptions?: addOptionsType) => RegisterOptions

const customInputOption = (addOptions: RegisterOptions): RegisterOptions => ({
  ...addOptions,
})

const emailOptions: defaultOptionType = (addOptions) => ({
  required: 'This field is required',
  maxLength: {
    value: 32,
    message: 'maximum length 32 characters',
  },
  minLength: {
    value: 5,
    message: 'minimum length 5 characters',
  },
  pattern: {
    value: /^[A-Za-zА-Яа-яЁё._\d]{1,26}(@)(\w+)(.(\w+))$/,
    message: 'email is not valid',
  },
  ...addOptions,
})

const telOptions: defaultOptionType = (addOptions) => ({
  required: 'This field is required',
  maxLength: {
    value: 12,
    message: 'maximum length 12 characters',
  },
  minLength: {
    value: 3,
    message: 'minimum length 3 characters',
  },
  pattern: {
    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    message: 'telephone is not valid',
  },
  ...addOptions,
})
const passwordOptions: defaultOptionType = (addOptions) => ({
  required: 'This field is required',
  maxLength: {
    value: 32,
    message: 'maximum length 32 characters',
  },
  minLength: {
    value: 7,
    message: 'minimum length 7 characters',
  },
  ...addOptions,
})

const handler = {
  get: function (target: any, name: any) {
    return target.hasOwnProperty(name) ? target[name] : customInputOption
  },
}

const defaultOptions = {
  tel: telOptions,
  email: emailOptions,
  password: passwordOptions,
}
export const inputOptions = new Proxy(defaultOptions, handler)
