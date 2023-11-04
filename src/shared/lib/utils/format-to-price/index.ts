export const formatToPrice = (value: string | number) =>
  value
    .toString()
    .replace(/[^[0-9]$]/g, '')
    .replace(/(.)(?=(\d{3})+$)/g, '$1 ')
    .trim()
