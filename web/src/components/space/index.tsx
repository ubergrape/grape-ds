import React, { ReactElement } from 'react'
import { useTheme } from 'react-jss'

import useStyles from './styles'

export type SizeTypes =
  | 'size-half-x'
  | 'size-1-x'
  | 'size-1-half-x'
  | 'size-2-x'
  | 'size-2-half-x'
  | 'size-3-x'
  | 'size-4-x'
  | 'size-5-x'
  | 'size-6-x'

export type SpaceProps = {
  width?: number | string
  height?: number | string
  size: SizeTypes
  children: ReactElement
}

export const Space: React.FC<SpaceProps> = props => {
  const theme = useTheme()

  const classes = useStyles({
    ...props,
    theme,
  })

  const { children } = props

  return <div className={classes.wrapper}>{children}</div>
}

Space.defaultProps = {
  width: 'auto',
  height: 'auto',
}
