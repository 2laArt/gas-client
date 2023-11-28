import { BasicService } from '../../config'
import { IFilters } from './types'
import { AxiosRequestConfig } from 'axios'

class BoilerService extends BasicService<string> {
  constructor(baseUrl: string) {
    super(baseUrl)
  }
  new(config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'get',
      url: this._baseUrl('/new'),
    })
  }
  bestsellers(config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'get',
      url: this._baseUrl('/bestsellers'),
    })
  }
  findById(partId: number, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'get',
      url: this._baseUrl(`/find/${partId}`),
    })
  }
  search(search: string, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'post',
      url: this._baseUrl('/search'),
      data: { search },
    })
  }
  getByName(name: string, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'post',
      url: this._baseUrl('/search'),
      data: { name },
    })
  }
  filters(filters: IFilters, config: Partial<AxiosRequestConfig> = {}) {
    const params = new URLSearchParams(Object.entries(filters)).toString()
    return this._instance({
      ...config,
      method: 'get',
      url: this._baseUrl(`?${params}`),
    })
  }
}
export const boilerService = new BoilerService('boiler-parts')
