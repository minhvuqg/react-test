import React from 'react'

export interface IProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  children: string | React.ReactNode
  primary: boolean
}
