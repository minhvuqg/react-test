import { FC, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ProductQuantity } from 'components/UI/molecules/ProductQuantity'
import { convertToCurrency } from 'helpers/string'
import { addToCart } from 'redux/reducers/productSlice'

import { IProductInCart, StoreType } from 'redux/type.d'
import { IProps } from './type.d'

import './style.scss'

const CartTable: FC<IProps> = (): JSX.Element => {
  const productsInCart: IProductInCart[] = useSelector(
    (state: StoreType): IProductInCart[] => state.cart.list
  )
  const dispatch: any = useDispatch()

  const total: string = useMemo((): string => {
    let t: number = 0

    productsInCart.forEach((product: IProductInCart): void => {
      t += product.price * product.quantity
    })

    return convertToCurrency(t)
  }, [productsInCart])

  const incrementQuantity: any = useCallback((product: IProductInCart): void => {
    dispatch(addToCart({ ...product, quantity: product.quantity + 1 }))
  }, [dispatch])

  const decrementQuantity: any = useCallback((product: IProductInCart): void => {
    const { quantity } = product
    if (quantity > 1) {
      dispatch(addToCart({ ...product, quantity: quantity - 1 }))
    }
  }, [dispatch])

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <td>Product name</td>
          <td className="-text-center">Quantity</td>
          <td className="-text-right">Price</td>
        </tr>
      </thead>

      <tbody>
        {productsInCart.map(
          (product: IProductInCart, index: number): JSX.Element => {
            return (
              <tr key={`product_${index}`}>
                <td>{product.name}</td>
                <td className="-centered">
                  <ProductQuantity
                    quantity={product.quantity}
                    incrementQuantity={(): void => incrementQuantity(product)}
                    decrementQuantity={(): void => decrementQuantity(product)}
                  />
                </td>
                <td className="-text-right">
                  {convertToCurrency(product.price)}
                </td>
              </tr>
            )
          }
        )}
        <tr className="total-row">
          <td colSpan={3} className="-text-right">
            Total: {total}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CartTable
