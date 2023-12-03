export const formatStrToNumber = (value: string): number =>
  +value.replace(/\D/g, '')
