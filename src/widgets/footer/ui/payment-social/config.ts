import { IconName } from 'shared/ui'

interface IItems {
  payment: IconName<'payment'>[]
  social: { href: string; icon: IconName<'social'> }[]
}

export const items: IItems = {
  payment: ['apple-pay', 'google-pay', 'master-card', 'visa'],
  social: [
    {
      href: 'https://vk.com',
      icon: 'vk',
    },
    {
      href: 'https://facebook.com',
      icon: 'facebook',
    },
    {
      href: 'https://instagram.com',
      icon: 'instagram',
    },
    {
      href: 'https://youtube.com',
      icon: 'youtube',
    },
  ],
}
