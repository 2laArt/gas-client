export const formatToCurrency = (price: number) =>
  new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'RUB',
  }).format(price)
// en-US
