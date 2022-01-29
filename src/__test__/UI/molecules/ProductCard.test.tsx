import { render } from '@testing-library/react'
import { ProductCard } from 'components/UI/molecules/ProductCard'

import { productList } from 'data'

it('renders correctly', (): void => {
  const { queryByTestId } = render(<ProductCard product={productList[0]} />)

  expect(queryByTestId('img')).toBeTruthy()
  expect(queryByTestId('name')).toBeTruthy()
  expect(queryByTestId('price')).toBeTruthy()
  expect(queryByTestId('moreInfoBtn')).toBeTruthy()
  expect(queryByTestId('addToCartBtn')).toBeTruthy()
})
