import { type GetStaticProps } from 'next'
import { getDashboardData } from 'pages/dashboard'
import { type IBoilerPart } from 'shared/api'

export { Dashboard as default } from 'pages/dashboard'

export const getStaticProps = (async () => {
  const { bestsellers, newParts } = await getDashboardData()
  return { props: { bestsellers, newParts }, revalidate: 10 }
}) satisfies GetStaticProps<{
  bestsellers: IBoilerPart[] | string
  newParts: IBoilerPart[] | string
}>
