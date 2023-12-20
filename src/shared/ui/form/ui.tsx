import style from './style.module.scss'
import clsx from 'clsx'
import { ReactNode, createElement } from 'react'
import {
  useForm,
  type DefaultValues,
  type UseFormResetField,
} from 'react-hook-form'

export interface IOnSubmitValues<T> {
  data: T
  resetField: UseFormResetField<any>
}
export type TypeOnSubmitForm<T> = ({
  data,
  resetField,
}: IOnSubmitValues<T>) => void

export interface IFormProps<T> {
  defaultValues: DefaultValues<T> | undefined
  onSubmit: TypeOnSubmitForm<T>
  children: ReactNode
  className?: string
}

export const Form = <T extends object>({
  defaultValues,
  onSubmit,
  children,
  className,
}: IFormProps<T>) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ defaultValues, mode: 'onChange' })
  return (
    <form
      className={clsx(style.form, className)}
      onSubmit={handleSubmit((data) => {
        onSubmit({ data, resetField })
      })}
    >
      {Array.isArray(children)
        ? children.map((child) =>
            child.props?.name
              ? createElement(child.type, {
                  ...child.props,
                  register,
                  errors,
                  key: child.props.name,
                })
              : child
          )
        : children}
    </form>
  )
}
