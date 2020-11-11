import clsx from 'clsx'
import React from 'react'
import { textSizes } from '../../types'
import { TextColorType } from './helper'

import { useStyles } from './styles'

export interface Props {
  size: textSizes
  children: string | JSX.Element | Element[] | Array<JSX.Element>
  emphasis?: boolean
  italic?: boolean
  strike?: boolean
  color?: TextColorType
  className?: string
  maxWidth?: number | string
}

export interface DefaultTextProps extends Props {
  as?: 'div' | 'span'
}

export interface LabelProps extends Props {
  as: 'label'
  htmlFor?: string
}

export type TextProps = DefaultTextProps | LabelProps

const isLabel = (va): va is LabelProps => va.as === 'label'

export const Text: React.FC<TextProps> = props => {
  const { children, as = 'div', className } = props

  const classes = useStyles(props)

  const Component = as

  return (
    <Component
      className={clsx(classes.text, className)}
      {...(isLabel(props) && { htmlFor: props.htmlFor })}
    >
      {children}
    </Component>
  )
}

Text.defaultProps = {
  size: 'base',
  children: 'My Text',
  maxWidth: 'none',
  emphasis: false,
  italic: false,
  strike: false,
}

export default Text
