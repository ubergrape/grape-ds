import React from 'react'
import { TextColorType } from './helper'

import { useStyles } from './styles'

export type MonospaceProps = {
  children: string
  color?: TextColorType
  maxWidth?: number | string
  id?: string
}

export const Monospace: React.FC<MonospaceProps> = props => {
  const { children, id } = props

  const classes = useStyles(props)

  return (
    <div {...(id && { id })} className={classes.monospace}>
      {children}
    </div>
  )
}

Monospace.defaultProps = {
  children: 'My Monospace',
  maxWidth: 'none',
  color: 'primary',
}

export default Monospace
