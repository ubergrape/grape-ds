import React, { CSSProperties } from 'react'

import useStyles from './styles'

export type GapTypes =
  | '0x'
  | '0.5x'
  | '1x'
  | '1.5x'
  | '2x'
  | '2.5x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'

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
