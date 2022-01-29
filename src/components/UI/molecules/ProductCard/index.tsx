import { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { convertToCurrency } from 'helpers/string'

import { Button } from 'components/UI/atoms/Button'

import { IProps } from './type'

import './style.scss'

export const ProductCard: FC<IProps> = ({
  product,
  onClickAddToCart = (): void => { }
}: IProps): JSX.Element => {
  const history: any = useHistory()

  const goToDetailPage: any = (): void => {
    history.push(`/products/${product.id}`)
  }

  const handleOnClickAddToCart: any = (): void => {
    onClickAddToCart(product)
  }

  return (
    <div className="product-card">
      <div className="image">
        <img data-testid="img" src={product.image} alt={product.name} />
      </div>

      <span data-testid="name" className="m-t-32">
        {product.name}
      </span>

      <span data-testid="price" className="m-t-8 -text-bold">
        {convertToCurrency(product.price)}
      </span>

      <div className="actions m-t-32">
        <Button
          data-testid="moreInfoBtn"
          className="m-r-16"
          onClick={goToDetailPage}
        >
          More info
        </Button>

        <Button
          data-testid="addToCartBtn"
          primary={true}
          onClick={handleOnClickAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}
