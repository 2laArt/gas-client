import { type AxiosResponse } from 'axios'
import { boilerService, type IBoilerPart, type IBoilerParts } from 'shared/api'

export const getDashboardData = async () => {
  const [bestsellersResult, newPartsResult] = await Promise.allSettled([
    boilerService.bestsellers(),
    boilerService.new(),
  ])
  const returnedData = (
    response: PromiseSettledResult<AxiosResponse<IBoilerParts, any>>
  ): IBoilerPart[] | string =>
    response.status === 'fulfilled'
      ? response.value.data.rows
      : 'The Products is not found come back later'

  return {
    bestsellers: returnedData(bestsellersResult),
    newParts: returnedData(newPartsResult),
  }
}
