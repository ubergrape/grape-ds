import React, { ReactElement } from 'react'
import { useTheme } from 'react-jss'
import clsx from 'clsx'

import useStyles from './styles'

export type ButtonGroupProps = {
  align?: 'left' | 'right'
  className?: string
  children: Array<ReactElement>
}

export const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const theme = useTheme()

  const classes = useStyles({
    ...props,
    theme,
  })

  const { children, className } = props

  return <div className={clsx(classes.wrapper, className)}>{children}</div>
}

ButtonGroup.defaultProps = {
  align: 'left',
}
