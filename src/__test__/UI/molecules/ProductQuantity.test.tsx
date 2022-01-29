import { fireEvent, render } from '@testing-library/react'
import { ProductQuantity } from 'components/UI/molecules/ProductQuantity'

it('renders correctly', (): void => {
  const { queryByTestId } = render(<ProductQuantity quantity={1} />)

  expect(queryByTestId('decrementBtn')).toBeTruthy()
  expect(queryByTestId('quantity')).toBeTruthy()
  expect(queryByTestId('incrementBtn')).toBeTruthy()
})

describe('Button', (): void => {
  describe('decrement', (): void => {
    it('decrement quantity', (): void => {
      const decrement: any = jest.fn()

      const { queryByTestId } = render(
        <ProductQuantity quantity={1} decrementQuantity={decrement} />
      )

      const decrementBtn: HTMLElement | null = queryByTestId('decrementBtn')

      if (!decrementBtn) {
        return
      }

      fireEvent.click(decrementBtn)

      expect(decrement).toHaveBeenCalled()
    })
  })

  describe('increment', (): void => {
    it('increment quantity', (): void => {
      const increment: any = jest.fn()

      const { queryByTestId } = render(
        <ProductQuantity quantity={1} incrementQuantity={increment} />
      )

      const incrementBtn: HTMLElement | null = queryByTestId('incrementBtn')

      if (!incrementBtn) {
        return
      }

      fireEvent.click(incrementBtn)

      expect(increment).toHaveBeenCalled()
    })
  })
})
