import { useStore } from 'effector-react'
import { NextSeo } from 'next-seo'
import { ComponentType } from 'react'
import { $meta } from 'shared/store/meta'

export const withSeo =
  <T extends object>(Component: ComponentType<T>) =>
  // eslint-disable-next-line react/display-name
  (props: T) => {
    const { title, description } = useStore($meta)
    return (
      <>
        <NextSeo
          nofollow
          noindex
          title={title || 'Store'}
          titleTemplate="GAS | %s"
          defaultTitle="GAS"
          description="Looking for a gas boiler in Moscow? Gas Boiler Shop offers the best prices, installation, and service on gas boilers. Contact us today for a free quote."
          openGraph={{
            title: 'GAS - online store',
            description: `Looking for a gas boiler in Moscow? Gas Boiler Shop offers the best prices, installation, and service on gas boilers. Contact us today for a free quote. ${description}`,
            locale: 'ru_Ru',
          }}
          robotsProps={{}}
          additionalMetaTags={[
            {
              name: 'keywords',
              content:
                'gas boiler, gas boiler shop, gas boiler paris, gas boiler installation, gas boiler service 2022 2023',
            },
            {
              name: 'viewport',
              content: 'width=device-width,initial-scale=1',
            },
            {
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
          ]}
          additionalLinkTags={[
            {
              rel: 'icon',
              sizes: '32x32',
              href: '/favicon.ico',
            },
          ]}
        />
        <Component {...props} />
      </>
    )
  }
