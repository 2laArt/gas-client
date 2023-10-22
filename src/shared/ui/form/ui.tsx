import style from './style.module.scss'
import { ReactNode, createElement } from 'react'
import { DefaultValues, UseFormResetField, useForm } from 'react-hook-form'

export interface IOnSubmit<T> {
  data: T
  resetField: UseFormResetField<any>
}
export interface IFormProps<T> {
  defaultValues: DefaultValues<T> | undefined
  onSubmit: ({ data, resetField }: IOnSubmit<T>) => void
  children: ReactNode
}

export const Form = <T extends object>({
  defaultValues,
  onSubmit,
  children,
}: IFormProps<T>) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ defaultValues, mode: 'onChange' })
  return (
    <form
      className={style.form}
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
