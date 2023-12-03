import { formatStrToNumber } from 'shared/lib'

export const formationPriceRange = (value: string | number) =>
  value
    .toString()
    .replace(/\D/g, '')
    .replace(/(.)(?=(\d{3})+$)/g, '$1 ')
    .trim()
formatStrToNumber
