import { FC } from 'react'

import { IProps } from './type.d'

import './style.scss'

const ProductQuantity: FC<IProps> = ({
  quantity,
  incrementQuantity,
  decrementQuantity
}: IProps): JSX.Element => {
  return (
    <div className="quantity-actions">
      <button data-testid="decrementBtn" onClick={decrementQuantity}>
        -
      </button>
      <span data-testid="quantity">{quantity}</span>
      <button data-testid="incrementBtn" onClick={incrementQuantity}>
        +
      </button>
    </div>
  )
}

export { ProductQuantity }
