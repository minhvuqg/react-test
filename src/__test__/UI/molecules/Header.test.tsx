import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render } from '@testing-library/react'

import { Header } from 'components/UI/molecules/Header'

it('renders correctly', (): void => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  expect(queryByTestId('logo')).toBeTruthy()
  expect(queryByTestId('home')).toBeTruthy()
  expect(queryByTestId('cart')).toBeTruthy()
})

describe('Menu item', (): void => {
  describe('home', (): void => {
    it('redirect to home page', (): void => {
      const { queryByTestId } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )

      const home: HTMLElement | null = queryByTestId('home')
      if (!home) {
        return
      }

      fireEvent.click(home)

      expect(window.location.href).toBe('http://localhost/')
    })
  })

  describe('cart', (): void => {
    it('redirect to cart page', (): void => {
      const { queryByTestId } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )

      const cart: HTMLElement | null = queryByTestId('cart')
      if (!cart) {
        return
      }

      fireEvent.click(cart)

      expect(window.location.href).toBe('http://localhost/cart')
    })
  })
})
