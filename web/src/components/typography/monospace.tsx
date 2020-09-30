import React from 'react'
import { useTheme } from 'react-jss'

import { useStyles } from './styles'

export type MonospaceProps = {
  children: string
}

export const Monospace: React.FC<MonospaceProps> = props => {
  const theme = useTheme()
  const { children } = props

  const classes = useStyles({
    ...props,
    theme,
  })

  return <div className={classes.monospace}>{children}</div>
}

Monospace.defaultProps = {
  children: 'My Monospace',
}

export default Monospace
