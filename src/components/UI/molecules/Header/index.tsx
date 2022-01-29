import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IProps } from './type'

import './style.scss'

export const Header: FC<IProps> = (): JSX.Element => {
  return (
    <header className="header">
      <div className="-container">
        <div className="logo">
          <Link to="/" data-testid="logo">
            <img src="/imgs/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="link-list">
          <Link data-testid="home" to="/" className="p-r-16 -text-link">
            Home
          </Link>
          <Link data-testid="cart" to="/cart" className="-text-link">
            Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
