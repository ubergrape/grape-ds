import React, { CSSProperties } from 'react'
import { GapTypes } from '../../../styles/scale'

import useStyles from './styles'

export interface FlexProps {
  gap?: GapTypes
  direction?: CSSProperties['flexDirection']
  wrap?: boolean | CSSProperties['flexWrap']
  items?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  className?: string
}

export const Flex: React.FC<FlexProps> = props => {
  const { children, className, ...rest } = props
  const classes = useStyles(rest)
  return (
    <div {...(className && { className })}>
      <div className={classes.flex}>{children}</div>
    </div>
  )
}
