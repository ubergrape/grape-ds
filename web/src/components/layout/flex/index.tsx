import clsx from 'clsx'
import React, { CSSProperties } from 'react'

import { GapTypes } from '../../../styles/scale'
import useStyles from './styles'

export interface FlexProps {
  gap?: GapTypes
  direction?: CSSProperties['flexDirection']
  wrap?: boolean | CSSProperties['flexWrap']
  items?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  width?: CSSProperties['width']
  className?: string
  style?: CSSProperties
}

export const Flex: React.FC<FlexProps> = props => {
  const { children, className, style, ...rest } = props
  const classes = useStyles(rest)
  return (
    <div style={style} className={clsx(classes.wrapper, className)}>
      <div className={classes.flex}>{children}</div>
    </div>
  )
}
