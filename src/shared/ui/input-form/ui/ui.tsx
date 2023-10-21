import { inputOptions } from '../lib/input-options'
import style from './style.module.scss'
import { FC } from 'react'
import type {
  FieldErrors,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form'

export interface IInputProps {
  register?: UseFormReturn['register']
  name: string
  type: InputFormTypes
  className?: string
  errors?: FieldErrors<object>
  options?: RegisterOptions
}
type InputFormTypes =
  | 'email'
  | 'number'
  | 'password'
  | 'text'
  | 'username'
  | 'tel'

interface IErrorInput {
  errors: FieldErrors<object>
  name: string
}

export const InputForm: FC<IInputProps> = ({
  name,
  type,
  errors,
  options: optionSettings,
  register,
  ...props
}) => {
  const options = inputOptions[type](optionSettings)
  return (
    register && (
      <label className={style.label}>
        <input
          className={style.input}
          placeholder={`Enter ${name}`}
          type={type}
          autoComplete={name === 'password' ? 'on' : 'off'}
          {...register(name, options)}
          {...props}
        />
        {errors && (
          <span className={style.input__error}>
            {inputError({ errors, name })}
          </span>
        )}
      </label>
    )
  )
}

const inputError = ({ errors, name }: IErrorInput): string | undefined => {
  const errorName = errors[name as keyof typeof errors]
  return errorName && errorName.message
}
