import { FC } from 'react'

import { ProductList } from 'components/UI/organisms/ProductList'

import { IProps } from './type.d'
import { productList } from 'data'

import './style.scss'

const Home: FC<IProps> = (): JSX.Element => {
  return (
    <div className="home-page">
      <div className="-container">
        <p className="-text-medium">Recommend</p>
        <ProductList products={productList} />
      </div>
    </div>
  )
}

export default Home
