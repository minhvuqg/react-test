import { FC } from 'react'
import { useSelector } from 'react-redux'

import CartTable from 'components/UI/organisms/CartTable'

import { IProductInCart, StoreType } from 'redux/type.d'
import { IProps } from './type.d'

import './style.scss'

const Cart: FC<IProps> = (): JSX.Element => {
  const productsInCart: IProductInCart[] = useSelector(
    (state: StoreType): IProductInCart[] => state.cart.list
  )

  if (productsInCart.length < 1) {
    return (
      <p className="-text-center -text-medium">
        There are no products in your cart
      </p>
    )
  }

  return (
    <div className="cart-page">
      <p className="-text-medium">Cart</p>
      <div className="-container -card">
        <div>
          <CartTable />
        </div>
      </div>
    </div>
  )
}

export default Cart
