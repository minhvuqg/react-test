import { FC } from 'react'

import ProductDetailTemplate from 'components/templates/ProductDetailTemplate'

import { IProps } from './type.d'

import './style.scss'

const Product: FC<IProps> = (): JSX.Element => {
  return (
    <div className="product-page">
      <div className="-container -card">
        <ProductDetailTemplate />
      </div>
    </div>
  )
}

export default Product
