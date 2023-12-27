import { GetServerSidePropsContext } from 'next'
import { boilerService } from 'shared/api'

export { ProductPage as default } from 'pages/product'

export const getServerSideProps = async ({
  query: { partId },
  req: { headers },
}: GetServerSidePropsContext) => {
  const product = (await boilerService.findById(Number(partId), { headers }))
    .data
  return {
    props: { product },
  }
}
