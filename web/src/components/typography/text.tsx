import React from 'react'
import { useTheme } from 'react-jss'

import { useStyles } from './styles'

export type TextProps = {
  size: 'body-large' | 'body-base' | 'label'
  children: string
  emphasis?: boolean
  italic?: boolean
  strike?: boolean
}

export const Text: React.FC<TextProps> = props => {
  const theme = useTheme()
  const { children } = props

  const classes = useStyles({
    ...props,
    theme,
  })

  return <div className={classes.text}>{children}</div>
}

Text.defaultProps = {
  size: 'body-large',
  children: 'My Text',
  emphasis: false,
  italic: false,
  strike: false,
}

export default Text
