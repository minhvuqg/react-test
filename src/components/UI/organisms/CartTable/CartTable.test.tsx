import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import CartTable from '../CartTable'
import store from 'redux/store'

it('render cart correctly', () => {
  const cartTableEl = TestRenderer.create(
    < Provider store={store} >
      <CartTable />
    </Provider >).toJSON()
  expect(cartTableEl).toMatchSnapshot()
})
