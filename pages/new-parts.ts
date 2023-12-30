import { type GetStaticProps } from 'next'
import { boilerService, type IBoilerParts } from 'shared/api'

export { NewParts as default } from 'pages/new-parts'

export const getStaticProps = (async () => {
  const { data } = await boilerService.new()
  return { props: { newParts: data } }
}) satisfies GetStaticProps<{ newParts: IBoilerParts }>
