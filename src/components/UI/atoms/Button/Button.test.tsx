import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { Button } from '../Button'
import store from 'redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

it('render primary button correctly', () => {
  const primaryButton = TestRenderer.create(
    < Provider store={store} >
      <Router>
        <Button data-testid="addToCartBtn"
          children={"Label"}
          primary={true}
          onClick={() => { }} />
      </Router>
    </Provider >).toJSON()
  expect(primaryButton).toMatchSnapshot()
})

it('render button correctly', () => {
  const primaryButton = TestRenderer.create(
    < Provider store={store} >
      <Router>
        <Button data-testid="addToCartBtn"
          children={"Label"}
          primary={false}
          onClick={() => { }} />
      </Router>
    </Provider >).toJSON()
  expect(primaryButton).toMatchSnapshot()
})
