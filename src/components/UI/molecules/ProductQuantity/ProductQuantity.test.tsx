import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { ProductQuantity } from '../ProductQuantity'
import store from 'redux/store'

it('render detail correctly', () => {
  const detailEl = TestRenderer.create(
    < Provider store={store} >
      <ProductQuantity quantity={3}
        incrementQuantity={() => { }}
        decrementQuantity={() => { }} />
    </Provider >).toJSON()
  expect(detailEl).toMatchSnapshot()
})
