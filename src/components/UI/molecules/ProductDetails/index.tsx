import { FC } from 'react'

import { convertToCurrency } from 'helpers/string'

import { IProps } from './type.d'

import './style.scss'

const ProductDetails: FC<IProps> = ({ product }: IProps): JSX.Element => {
  return (
    <div className="product-info">
      <div className="image m-r-16">
        <img data-testid="img" src={product.image} alt={product.name} />
      </div>

      <div className="info">
        <div className="name-and-price">
          <span data-testid="name" className="-text-medium">
            {product.name}
          </span>
          <span data-testid="price">{convertToCurrency(product.price)}</span>
        </div>

        <p data-testid="des">{product.description}</p>
      </div>
    </div>
  )
}

export { ProductDetails }
