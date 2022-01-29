import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import Product from '../Product'
import store from 'redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

it('render product correctly', () => {
  const productEl = TestRenderer.create(
    < Provider store={store} >
      <Router>
        <Product />
      </Router>
    </Provider >).toJSON()
  expect(productEl).toMatchSnapshot()
})
