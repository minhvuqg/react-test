export interface IProductInCart extends Product.Infor {
  quantity: number
}

export interface CartStateType {
  list: IProductInCart[]
}

export interface StoreType {
  cart: CartStateType
}
