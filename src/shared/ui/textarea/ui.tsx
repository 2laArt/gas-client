import style from './style.module.scss'
import clsx from 'clsx'
import { memo, type FC } from 'react'
import { type RegisterOptions, type UseFormReturn } from 'react-hook-form'

interface ITextareaProps {
  register?: UseFormReturn['register']
  name: string
  className?: string
  options?: RegisterOptions
}

export const Textarea: FC<ITextareaProps> = ({
  register,
  className,
  name,
  ...rest
}) => {
  if (register)
    return (
      <textarea
        className={clsx(style.textarea, className)}
        placeholder={`Enter  something`}
        {...register(name)}
        {...rest}
      />
    )
  return <mark> Sorry Something`s Wrong</mark>
}
