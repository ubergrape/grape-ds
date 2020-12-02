import clsx from 'clsx'
import React from 'react'
import { TextColorType } from './helper'

import { useStyles } from './styles'

export type HeadlineProps = React.FC<{
  size: 'page' | 'base'
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'div'
  maxWidth?: number | string
  className?: string
  color?: TextColorType
  id?: string
}>

export const Headline: HeadlineProps = props => {
  const { size, children, as, id, className } = props

  const classes = useStyles(props)

  const sizedElement = size === 'page' ? 'h1' : 'h2'
  const Component = as || sizedElement

  return (
    <Component
      {...(id && { id })}
      className={clsx(classes.headline, className)}
    >
      {children}
    </Component>
  )
}

Headline.defaultProps = {
  maxWidth: 'none',
  color: 'primary',
}

export default Headline
