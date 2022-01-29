import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import Header from '../Header'
import store from 'redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

it('render header correctly', () => {
  const headerEl = TestRenderer.create(
    < Provider store={store} >
      <Router>
        <Header />
      </Router>
    </Provider >).toJSON()
  expect(headerEl).toMatchSnapshot()
})
