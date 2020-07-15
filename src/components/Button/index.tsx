import React from 'react'
import withStyles, { WithStylesProps } from 'react-jss'

import injectJss from '../../injectJss'

import styles from './styles'

export interface ButtonProps {
  onClick: () => void
  color: string
  variant: string
  size: string
  disabled: boolean
}

const Button: React.FC<ButtonProps & WithStylesProps<typeof styles>> = ({
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

export default withStyles(styles)(injectJss(Button))
