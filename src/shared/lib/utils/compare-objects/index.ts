export const compareObjects = <T extends Object = Object>(
  obj1: T,
  obj2: T,
  ignoreKey?: keyof T
) => {
  const copy1 = { ...obj1 }
  const copy2 = { ...obj2 }
  if (ignoreKey) {
    delete copy1[ignoreKey]
    delete copy2[ignoreKey]
  }
  return JSON.stringify(copy1) === JSON.stringify(copy2)
}
