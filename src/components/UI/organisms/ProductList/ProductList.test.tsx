import React from 'react'
import { productList } from 'data'
import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { ProductList } from '../ProductList'
import store from 'redux/store'

it('render list correctly', () => {
  const productListEl = TestRenderer.create(
    < Provider store={store} >
      <ProductList products={productList} />
    </Provider >).toJSON()
  expect(productListEl).toMatchSnapshot()
})

it('render empty list correctly', () => {
  const productListEl = TestRenderer.create(
    < Provider store={store} >
      <ProductList products={[]} />
    </Provider >).toJSON()
  expect(productListEl).toMatchSnapshot()
})
