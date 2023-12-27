import { paths } from 'shared/routing'

export const items = [
  { text: 'Shopping and Payment', href: paths.shoppingPayment },
  { text: 'About ', href: paths.about },
  { text: 'Catalog', href: paths.catalog() },
  { text: 'Contacts', href: paths.contacts },
  { text: 'Info about the Boiler', href: paths.infoBoiler },
]
