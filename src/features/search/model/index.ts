import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import { boilerService } from 'shared/api'

interface IBoilerSearch {
  setSpinner: Dispatch<SetStateAction<boolean>>
  searchValue: string
}
export const boilerSearch = async ({
  searchValue,
  setSpinner,
}: IBoilerSearch) => {
  try {
    setSpinner(true)
    const { data } = await boilerService.search(searchValue)
    return data.rows
  } catch (e) {
    toast.error((e as Error).message)
  } finally {
    setSpinner(false)
  }
}
