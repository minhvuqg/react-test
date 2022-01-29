import { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from 'components/UI/molecules/Header'

import 'scss/index.scss'
import Home from 'components/pages/Home'
import Cart from 'components/pages/Cart'
import Product from 'components/pages/Product'

interface IProps {}

const App: FC<IProps> = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <div className="m-t-64">
        <Route path="/" exact={true} component={Home} />
        <Route path="/cart" exact={true} component={Cart} />
        <Route path="/products/:id" exact={true} component={Product} />
      </div>
    </Router>
  )
}

export default App
