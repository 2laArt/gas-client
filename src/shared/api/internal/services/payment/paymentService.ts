import { axiosClassic } from '../../config'
import { IPaymentData } from './types'

export const paymentService = {
  payment: async (paymentData: IPaymentData) => {
    const { data } = await axiosClassic.post('/payment', paymentData)
    return data
  },
  checkPayment: async (paymentId: string) => {
    const { data } = await axiosClassic.post(`/payment/info`, { paymentId })
    return data
  },
}
