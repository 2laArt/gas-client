import { type NextPage } from 'next'

export interface IProductPageProps {
  partId: number
}
export const ProductPage: NextPage<IProductPageProps> = ({ partId }) => {
  return <div>product page {partId}</div>
}
