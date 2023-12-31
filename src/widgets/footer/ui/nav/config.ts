import type { IFooterContact } from './ui/contact'
import { paths } from 'shared/routing'

export const navItems = {
  store: {
    title: 'Online Store',
    items: [
      {
        text: 'Catalog',
        href: paths.catalog(),
      },
      {
        text: 'New Parts',
        href: paths.newParts,
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
        text: 'Info about the Boiler',
        href: paths.infoBoiler,
      },
    ],
  },
}
interface IContacts {
  title: string
  items: IFooterContact[]
}
export const contacts: IContacts = {
  title: 'Contacts',
  items: [
    {
      title: 'Our Address:',
      text: 'c. Moscow, ...',
      icon: 'chevron',
      href: 'https://maps.app.goo.gl/NLbkyZ6yRMG4tU1VA',
    },
    {
      title: 'Phone Number:',
      icon: 'chevron',
      text: '89000000000',
      href: 'tel:+79000000000',
    },
    {
      title: 'E-mail',
      icon: 'chevron',
      text: 'bluth@example.com',
      href: 'mailto:m.bluth@example.com',
    },
  ],
}
