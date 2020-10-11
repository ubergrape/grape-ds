import React from 'react'
import { useTheme } from 'react-jss'
import { TextColorType } from './helper'

import { useStyles } from './styles'

export type HeadlineProps = React.FC<{
  size: 'page' | 'base'
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'div'
  color?: TextColorType
}>

export const Headline: HeadlineProps = props => {
  const theme = useTheme()
  const { size, children, as } = props

  const classes = useStyles({
    ...props,
    theme,
  })

  const sizedElement = size === 'page' ? 'h1' : 'h2'
  const Component = as || sizedElement

  return <Component className={classes.headline}>{children}</Component>
}

Headline.defaultProps = {
  size: 'page',
  children: 'My headline',
}

export default Headline
