interface IContactsData {
  name: string
  content: string
  href?: string
}
export const contactsData: IContactsData[] = [
  {
    name: 'Office',
    content: 'c. Moscow, 103132',
    href: 'https://maps.app.goo.gl/xBXFY3D79J6rdN3D6',
  },
  {
    name: 'Warehouse',
    content: 'Privolnaya str., **, building 1, Moscow, 109*53',
    href: 'https://maps.app.goo.gl/QcSwCFcuA91ULs3w7',
  },
  {
    name: 'Office opening hours',
    content: 'Monday through Friday from 8:30 am to 4:00 pm',
  },
  {
    name: 'Our contact phone number',
    content: '510 1700',
    href: 'tel:+5101700',
  },
  {
    name: 'Application acceptance time',
    content: 'Monday through Friday from 8:30 am to 4:00 pm',
  },
  {
    name: 'Accepting orders electronically on the website',
    content: 'around the clock',
  },
  {
    name: 'Email',
    content: 'info@gaz.com.com',
    href: 'mailto:info@gaz.com',
  },
]
