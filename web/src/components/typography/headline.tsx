import React from 'react'
import { useTheme } from 'react-jss'

import { useStyles } from './styles'

export type ButtonProps = React.FC<{
  size: 'page' | 'base'
  children: string
}>

export const Headline: ButtonProps = props => {
  const theme = useTheme()
  const { size, children } = props

  const classes = useStyles({
    ...props,
    theme,
  })

  return size === 'page' ? (
    <h1 className={classes.headline}>{children}</h1>
  ) : (
    <h2 className={classes.headline}>{children}</h2>
  )
}

Headline.defaultProps = {
  size: 'page',
  children: 'My headline',
}

export default Headline
