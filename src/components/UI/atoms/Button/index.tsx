import { FC } from 'react'
import { IProps } from './type.d'

import './style.scss'

const primaryClasses = "-primary"

const Button: FC<IProps> = ({
  children,
  className,
  primary = false,
  ...props
}: IProps): JSX.Element => {
  return (
    <button className={`-custom-btn ${className} ${primary ? primaryClasses : ""}`} {...props}>
      {children}
    </button>
  )
}

export { Button }
