import React from 'react'
import { useTheme } from 'react-jss'
import { TextColorType } from './helper'

import { useStyles } from './styles'

export type TextProps = {
  size: 'body-large' | 'body-base' | 'label'
  children: string | JSX.Element
  emphasis?: boolean
  italic?: boolean
  strike?: boolean
  color?: TextColorType
}

export const Text: React.FC<TextProps> = props => {
  const theme = useTheme()
  const { children, size } = props

  const classes = useStyles({
    ...props,
    theme,
  })

  const Element = size === 'label' ? 'label' : 'div'

  return <Element className={classes.text}>{children}</Element>
}

Text.defaultProps = {
  size: 'body-large',
  children: 'My Text',
  emphasis: false,
  italic: false,
  strike: false,
}

export default Text
