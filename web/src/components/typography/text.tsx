import clsx from 'clsx'
import React from 'react'
import { sizes } from '../../types'
import { TextColorType } from './helper'

import { useStyles } from './styles'

export interface Props {
  size?: sizes
  children:
    | string
    | React.ReactNode
    | JSX.Element
    | Element[]
    | Array<JSX.Element>
  emphasis?: boolean
  italic?: boolean
  strike?: boolean
  color?: TextColorType
  className?: string
  maxWidth?: number
  title?: string
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
  const { children, as = 'div', title, className } = props

  const classes = useStyles(props)

  const Component = as

  return (
    <Component
      {...(title && { title })}
      className={clsx(classes.text, className)}
      {...(isLabel(props) && { htmlFor: props.htmlFor })}
    >
      {children}
    </Component>
  )
}

Text.defaultProps = {
  size: 'regular',
  children: 'My Text',
  emphasis: false,
  italic: false,
  strike: false,
}

export default Text
