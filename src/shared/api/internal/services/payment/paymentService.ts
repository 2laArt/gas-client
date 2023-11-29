import { type AxiosRequestConfig } from 'axios'
import { BasicService } from '../../config'
import { type IPaymentData } from './types'

class PaymentService extends BasicService<string> {
  payment(paymentData: IPaymentData, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'post',
      url: this._baseUrl(),
      data: paymentData,
    })
  }
  checkPayment(paymentId: string, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'post',
      url: this._baseUrl('/info'),
      data: { paymentId },
    })
  }
}
export const paymentService = new PaymentService('payment')
