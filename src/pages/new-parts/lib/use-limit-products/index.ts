interface ILimitNewParts {
  total: number
  page: number
}
export const useLimitProducts = ({ page, total }: ILimitNewParts) => {
  const limit = 15
  const start = page * limit
  let end = start + limit
  end = end >= total ? total : end
  return { start, end, limit }
}
