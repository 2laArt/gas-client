import { axiosClassic } from '../../config'
import { IBoilerParts } from './types'

export const boilerService = {
  new: async (): Promise<IBoilerParts> => {
    const { data } = await axiosClassic.get('/boiler-parts/new')
    return data
  },
  bestsellers: async (): Promise<IBoilerParts> => {
    const { data } = await axiosClassic.get('/boiler-parts/bestsellers')
    return data
  },
  findById: async (partId: number): Promise<IBoilerParts> => {
    const { data } = await axiosClassic.get(`/boiler-parts/find/${partId}`)
    return data
  },
  search: async (search: string): Promise<IBoilerParts> => {
    const { data } = await axiosClassic.post(`/boiler-parts/search`, {
      search,
    })
    return data
  },
  getByName: async (name: string): Promise<IBoilerParts> => {
    const { data } = await axiosClassic.post(`/boiler-parts/search}`, { name })
    return data
  },
}
