import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import Home from '../Home'
import store from 'redux/store'

it('render home correctly', () => {
  const homeEl = TestRenderer.create(
    < Provider store={store} >
      <Home />
    </Provider >).toJSON()
  expect(homeEl).toMatchSnapshot()
})
