import { FC, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ProductQuantity } from 'components/UI/molecules/ProductQuantity'
import { ProductDetails } from 'components/UI/molecules/ProductDetails'
import { Button } from 'components/UI/atoms/Button'

import { addToCart } from 'redux/reducers/productSlice'
import { productList } from 'data'

import { IProps } from './type.d'

import './style.scss'

const ProductDetailTemplate: FC<IProps> = (): JSX.Element => {
  const params: { id: string } = useParams()
  const dispatch: any = useDispatch()

  const [product, setProduct] = useState<Product.Infor | undefined>()
  const [quantity, setQuantity] = useState<number>(1)

  useEffect((): void => {
    const productTemp: Product.Infor | undefined = productList.find(
      (productItem: Product.Infor): boolean => productItem.id === params.id
    )

    setProduct(productTemp)
  }, [params.id])

  const incrementQuantity: any = (): void => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity: any = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart: any = (): void => {
    dispatch(addToCart({ ...product, quantity }))
  }

  if (!product) {
    return <div>Not found</div>
  }

  return (
    <>
      <ProductDetails product={product} />

      <div className="quantity">
        <div className="quantity-card">
          <div className="quantity-buttons">
            <span>Quantity</span>
            <ProductQuantity
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          </div>

          <Button
            primary={true}
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductDetailTemplate
