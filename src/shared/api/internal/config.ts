import axios, { AxiosResponse, type AxiosRequestConfig } from 'axios'

export const axiosClassic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
export class BasicService<T> {
  constructor(protected baseUrl: string) {
    this.baseUrl = baseUrl
  }
  protected _baseUrl(url?: T): string {
    return `${this.baseUrl}${url ?? ''}`
  }
  protected _instance<R = any, E = any>(
    ep: Partial<AxiosRequestConfig>
  ): Promise<AxiosResponse<R, E>> {
    return axiosClassic(ep)
  }
}
