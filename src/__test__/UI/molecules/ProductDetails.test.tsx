import { render } from '@testing-library/react'
import { ProductDetails } from 'components/UI/molecules/ProductDetails'
import { productList } from 'data'

it('renders correctly', (): void => {
  const { queryByTestId } = render(<ProductDetails product={productList[0]} />)

  expect(queryByTestId('img')).toBeTruthy()
  expect(queryByTestId('name')).toBeTruthy()
  expect(queryByTestId('price')).toBeTruthy()
  expect(queryByTestId('des')).toBeTruthy()
})
