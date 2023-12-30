import { paths } from 'shared/routing'

export const items = [
  { text: 'New Parts', href: paths.newParts },
  { text: 'About ', href: paths.about },
  { text: 'Catalog', href: paths.catalog() },
  { text: 'Contacts', href: paths.contacts },
  { text: 'Info about the Boiler', href: paths.infoBoiler },
]
