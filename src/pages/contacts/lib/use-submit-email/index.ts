import { sendEmailMessage } from '../send-message'
import { useState } from 'react'
import { type UseFormResetField } from 'react-hook-form'
import { toast } from 'react-toastify'
import { HTTPStatus } from 'shared/config'

interface IUseSubmitEmail {
  data: any
  resetField: UseFormResetField<any>
}
export const useSubmitEmail = () => {
  const [spinner, setSpinner] = useState<boolean>(false)

  const sendEmail = async ({ data, resetField }: IUseSubmitEmail) => {
    try {
      setSpinner(true)
      const { status } = await sendEmailMessage(data)
      if (status !== HTTPStatus.SUCCESS)
        throw new Error(`Error: status code ${status}`)

      Object.keys(data).forEach((key) => resetField(key))

      toast.success(
        `Dear ${data.name ?? 'User'}, your email has been sent.
         We will contact you soon`
      )
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setSpinner(false)
    }
  }
  return { spinner, sendEmail }
}
