import { deleteAllCartFx } from '../cart'
import { setCheckedStatus } from './store'
import { ICheckPayment, IPaymentFx } from './type'
import { createEffect } from 'effector'
import { toast } from 'react-toastify'
import { paymentService } from 'shared/api'

export const paymentFx = createEffect(
  async ({ description, router, amount }: IPaymentFx) => {
    try {
      const response = await paymentService.payment({
        description,
        amount,
      })
      sessionStorage.setItem('paymentId', response.id)
      setCheckedStatus(false)
      router.push(response.confirmation.confirmation_url)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
export const checkPayment = createEffect(
  async ({ paymentId, userId }: ICheckPayment) => {
    try {
      const response = await paymentService.checkPayment(paymentId)
      console.log(response)
      setCheckedStatus(true)
      if (response.status === 'succeeded') {
        deleteAllCartFx(userId)
        sessionStorage.removeItem('paymentId')
      }
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
