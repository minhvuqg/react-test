import { createSlice } from '@reduxjs/toolkit'
import { IProductInCart } from 'redux/type.d'

export const cartSlice: any = createSlice({
  name: 'cart',
  initialState: {
    list: []
  },
  reducers: {
    addToCart: (state: any, action: { payload: IProductInCart }): void => {
      const { id } = action.payload

      const indexOfProductExist: number = state.list.findIndex(
        (product: Product.Infor): boolean => product.id === id
      )

      if (indexOfProductExist === -1) {
        state.list.push(action.payload)
        alert('The product has been added to your cart!')
      } else {
        state.list[indexOfProductExist] = action.payload
      }
    }
  }
})

const { addToCart } = cartSlice.actions

export { addToCart }

export default cartSlice.reducer
