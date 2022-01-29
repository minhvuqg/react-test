import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { ProductCard } from '../ProductCard'
import store from 'redux/store'
import { productList } from 'data'

it('render card correctly', () => {
  const cardEl = TestRenderer.create(
    < Provider store={store} >
      <ProductCard product={productList[0]} />
    </Provider >).toJSON()
  expect(cardEl).toMatchSnapshot()
})
