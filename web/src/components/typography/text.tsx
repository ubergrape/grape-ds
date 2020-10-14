import clsx from 'clsx'
import React from 'react'
import { useTheme } from 'react-jss'
import { TextColorType } from './helper'

import { useStyles } from './styles'

export type Props = {
  size: 'body-large' | 'body-base' | 'body-small'
  children: string | JSX.Element | Element[] | Array<JSX.Element>
  emphasis?: boolean
  italic?: boolean
  strike?: boolean
  color?: TextColorType
  className?: string
}

export type DefaultTextProps = {
  as?: 'div' | 'span'
}

export type LabelProps = {
  as: 'label'
  htmlFor?: string
}

export type TextProps = Props & (DefaultTextProps | LabelProps)

export const Text: React.FC<TextProps> = props => {
  const theme = useTheme()
  const { children, as = 'div', className } = props

  const classes = useStyles({
    ...props,
    theme,
  })

  const Component = as

  return (
    <Component className={clsx(classes.text, className)}>{children}</Component>
  )
}

Text.defaultProps = {
  size: 'body-large',
  children: 'My Text',
  emphasis: false,
  italic: false,
  strike: false,
}

export default Text
