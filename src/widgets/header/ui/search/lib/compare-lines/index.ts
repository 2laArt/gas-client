export const compareLines = (...arg: string[]): boolean =>
  arg.every((item) => arg[0].toLowerCase().trim() === item.toLowerCase().trim())
