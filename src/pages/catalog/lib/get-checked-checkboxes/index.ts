import { type TypeCheckboxState } from 'pages/catalog/model'

export const getCheckedCheckboxes = (checkboxes: TypeCheckboxState): string[] =>
  Object.entries(checkboxes).reduce((prev, cur) => {
    if (cur[1]) {
      prev.push(cur[0])
    }
    return prev
  }, [] as string[])
