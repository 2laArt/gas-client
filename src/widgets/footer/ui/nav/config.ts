import { IFooterContacts } from './ui/contact/ui'
import { paths } from 'shared/routing'

export const navItems = {
  store: {
    title: 'Online Store',
    items: [
      {
        text: 'Catalog',
        href: paths.catalog,
      },
      {
        text: 'Shopping and payment',
        href: paths.shoppingPayment,
      },
    ],
  },
  company: {
    title: 'Company',
    items: [
      {
        text: 'About Company',
        href: paths.about,
      },
      {
        text: 'Connect with us',
        href: paths.contacts,
      },
      {
        text: 'Wholesale buyers',
        href: paths.wholesaleBuyers,
      },
    ],
  },
}
interface IContacts {
  title: string
  items: IFooterContacts[]
}
export const contacts: IContacts = {
  title: 'Contacts',
  items: [
    {
      title: 'Our Address:',
      text: 'c. Moscow, ...',
      icon: 'location',
      href: 'https://maps.app.goo.gl/NLbkyZ6yRMG4tU1VA',
    },
    {
      title: 'Phone Number:',
      icon: 'phone',
      text: '89000000000',
      href: 'tel:+79000000000',
    },
    {
      title: 'E-mail',
      icon: 'email',
      text: 'bluth@example.com',
      href: 'mailto:m.bluth@example.com',
    },
  ],
}
