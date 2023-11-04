import { NextRouter } from 'next/router'

export interface IPaymentPayload {
  amount: number
  description: string
}
export interface IPaymentFx extends IPaymentPayload {
  router: NextRouter
}
export interface ICheckPayment {
  paymentId: string
  userId: number
}
