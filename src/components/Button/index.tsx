import React from 'react'
import { WithStylesProps } from 'react-jss'

import { withStyles, injectJss } from '../../styles'

import theme from './theme'

export interface ButtonProps {
  onClick: () => void
  color: string
  variant: string
  size: string
  disabled: boolean
}

const Button: React.FC<ButtonProps & WithStylesProps<typeof theme>> = ({
  classes,
  disabled,
  onClick,
}) => (
  <button
    className={classes.button}
    disabled={disabled}
    type="button"
    onClick={onClick}
  >
    Button
  </button>
)

export default withStyles(theme)(injectJss(Button))
