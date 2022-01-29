import { fireEvent, render } from '@testing-library/react'
import { Button } from 'components/UI/atoms/Button'

it('renders correctly', (): void => {
  const children: string = 'Click me'
  const { queryByText } = render(<Button>{children}</Button>)

  expect(queryByText(children)).toBeTruthy()
})

describe('Button', (): void => {
  it('click on button', (): void => {
    const onClickFunction: any = jest.fn()

    const children: string = 'Click me'
    const { queryByText } = render(
      <Button onClick={onClickFunction}>{children}</Button>
    )

    const button: any = queryByText(children)

    if (!button) {
      return
    }
    fireEvent.click(button)

    expect(onClickFunction).toHaveBeenCalled()
  })
})
