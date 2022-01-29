import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import Cart from '../Cart'
import store from 'redux/store'

it('render cart correctly', () => {
  const cartEl = TestRenderer.create(
    < Provider store={store} >
      <Cart />
    </Provider >).toJSON()
  expect(cartEl).toMatchSnapshot()
})
