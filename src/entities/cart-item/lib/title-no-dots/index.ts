export const getTitleNoDots = (...arr: string[]): string =>
  arr.map((item) => item.replace(/[.,]/gi, '')).join(', ')
