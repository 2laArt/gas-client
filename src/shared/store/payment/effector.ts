import { deleteAllCartFx } from '../cart'
import { setCheckedStatus } from './store'
import { ICheckPayment, IPaymentFx } from './type'
import { createEffect } from 'effector'
import { toast } from 'react-toastify'
import { paymentService } from 'shared/api'

export const paymentFx = createEffect(
  async ({ description, router, amount }: IPaymentFx) => {
    try {
      const { data } = await paymentService.payment({
        description,
        amount,
      })
      sessionStorage.setItem('paymentId', data.id)
      setCheckedStatus(false)
      router.push(data.confirmation.confirmation_url)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
export const checkPayment = createEffect(
  async ({ paymentId, userId }: ICheckPayment) => {
    try {
      const { data } = await paymentService.checkPayment(paymentId)
      console.log(data)
      setCheckedStatus(true)
      if (data.status === 'succeeded') {
        deleteAllCartFx(userId)
        sessionStorage.removeItem('paymentId')
      }
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
