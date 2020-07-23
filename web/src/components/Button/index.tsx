import React, { ReactChildren, ReactChild } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'

import theme from './theme'

export interface ButtonProps {
  onClick: () => void
  children: ReactChild | ReactChildren
  disabled: boolean
  color: string
  variant: string
  size: string
}

const Button: React.FC<ButtonProps & WithStylesProps<typeof theme>> = ({
  onClick,
  disabled,
  children,
  classes,
}) => (
  <button
    className={classes.button}
    disabled={disabled}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
)

export default withStyles(theme)(Button)
