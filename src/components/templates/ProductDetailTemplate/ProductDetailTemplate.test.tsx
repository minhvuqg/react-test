import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import ProductDetailTemplate from '../ProductDetailTemplate'
import store from 'redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

it('render productTemp correctly', () => {
  const productTempEl = TestRenderer.create(
    < Provider store={store} >
      <Router>
        <ProductDetailTemplate />
      </Router>
    </Provider >).toJSON()
  expect(productTempEl).toMatchSnapshot()
})
