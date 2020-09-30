import React, { ReactElement } from 'react'
import { useTheme } from 'react-jss'

import useStyles from './styles'

export type ButtonGroupProps = {
  align?: 'left' | 'right'
  verticalAlign?: 'top' | 'bottom'
  width?: string | number
  inline?: boolean
  vertical?: boolean
  children: Array<ReactElement>
}

export const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const theme = useTheme()

  const classes = useStyles({
    ...props,
    theme,
  })

  const { children } = props

  return <div className={classes.wrapper}>{children}</div>
}

ButtonGroup.defaultProps = {
  align: 'left',
  verticalAlign: 'top',
  width: 'auto',
  inline: false,
  vertical: false,
}
