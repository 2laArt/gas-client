import { boilerService } from 'shared/api'

export const getNewPartsData = async () => {
  try {
    const { data } = await boilerService.new()
    return data
  } catch (e) {
    return (e as Error).message
  }
}
