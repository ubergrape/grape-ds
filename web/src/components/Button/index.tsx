import React, { ReactChildren, ReactChild } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import styles from './styles'

export interface ButtonProps {
  onClick: () => void
  children: ReactChild | ReactChildren
  disabled: boolean
  color: string
  variant: string
  size: string
}

const useStyles = createUseStyles(styles)

const Button: React.FC<ButtonProps> = props => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  const { disabled, onClick, children } = props

  return (
    <button
      className={classes.button}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
