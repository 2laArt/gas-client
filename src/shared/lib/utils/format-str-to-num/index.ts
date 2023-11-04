export const formatStrToNumber = (value: string): number =>
  +value.replace(/[\s]/g, '')
