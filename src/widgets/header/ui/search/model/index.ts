import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import { boilerService, type IBoilerParts } from 'shared/api'

interface IBoilerSearchFx {
  setSpinner: Dispatch<SetStateAction<boolean>>
  searchValue: string
}
export const boilerSearchFx = async ({
  searchValue,
  setSpinner,
}: IBoilerSearchFx) => {
  try {
    setSpinner(true)
    const response: IBoilerParts = await boilerService.search(searchValue)
    return response.rows
  } catch (e) {
    toast.error((e as Error).message)
  } finally {
    setSpinner(false)
  }
}
