import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { ProductDetails } from '../ProductDetails'
import store from 'redux/store'
import { productList } from 'data'

it('render detail correctly', () => {
  const detailEl = TestRenderer.create(
    < Provider store={store} >
      <ProductDetails product={productList[0]} />
    </Provider >).toJSON()
  expect(detailEl).toMatchSnapshot()
})
