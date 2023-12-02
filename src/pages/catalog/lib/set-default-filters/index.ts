import { setAllCheckboxes } from '../set-all-checkboxs'
import { IFiltersStore } from 'pages/catalog/model/filters/type'
import { brands } from 'shared/config'

interface IFiltersDefault {
  isDetails: boolean
  isRetailer: boolean
  minLimit: number
  maxLimit: number
}
const state: IFiltersDefault = {
  isDetails: false,
  isRetailer: false,
  minLimit: 0,
  maxLimit: 1e4,
}
export const filterDefault = ({
  isDetails,
  isRetailer,
  maxLimit,
  minLimit,
}: IFiltersDefault = state): IFiltersStore => ({
  details: {
    title: 'details',
    checkboxes: setAllCheckboxes({
      brands: brands.details,
      initState: isDetails,
    }),
  },
  retailer: {
    title: 'retailer',
    checkboxes: setAllCheckboxes({
      brands: brands.retailer,
      initState: isRetailer,
    }),
  },
  price: {
    min: {
      value: minLimit,
      limit: minLimit,
    },
    max: {
      value: maxLimit,
      limit: maxLimit,
    },
  },
  changed: false,
})
