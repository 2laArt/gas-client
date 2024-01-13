import { type GetStaticProps } from 'next'
import { getNewPartsData } from 'pages/new-parts/lib'
import { type IBoilerParts } from 'shared/api'

export { NewParts as default } from 'pages/new-parts'

export const getStaticProps = (async () => {
  const newPartsResult = await getNewPartsData()
  return { props: { newPartsResult } }
}) satisfies GetStaticProps<{ newPartsResult: IBoilerParts | string }>
