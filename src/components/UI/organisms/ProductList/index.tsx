import { FC, useState } from 'react'
import { ProductCard } from 'components/UI/molecules/ProductCard'

import { IProps } from './type'

import { productList } from 'data'
import { useDispatch } from 'react-redux'
import { addToCart } from 'redux/reducers/productSlice'

import './style.scss'

export const ProductList: FC<IProps> = (): JSX.Element => {
  const dispatch: any = useDispatch()
  const [products] = useState(productList)

  const onClickAddToCart: any = (product: Product.Infor): void => {
    dispatch(addToCart({ ...product, quantity: 1 }))
  }

  return (
    <div className="product-list -card">
      {products.map(
        (product: Product.Infor, index: number): JSX.Element => (
          <ProductCard
            key={`product_${index}`}
            product={product}
            onClickAddToCart={onClickAddToCart}
          />
        )
      )}
    </div>
  )
}
