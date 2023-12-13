import { IProductPageProps } from 'pages/product/ui/ui'

export { ProductPage as default } from 'pages/product'

export const getServerSideProps = async ({
  query,
}: {
  query: IProductPageProps
}) => {
  return {
    props: { partId: query.partId },
  }
}
