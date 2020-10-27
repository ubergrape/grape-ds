import React, { CSSProperties } from 'react'
import { createUseStyles } from 'react-jss'

import { scale } from '../../styles/scale'

const useStyles = createUseStyles(() => ({
  flex: {
    display: 'flex',
    '--gap': ({ gap }) => `${scale[gap] || 0}`,
    '--column-gap': 'var(--gap)',
    '--row-gap': 'var(--gap)',
    flexDirection: ({ direction }) => direction,
    justifyContent: ({ justify }) => justify,
    alignItems: ({ items }) => items,
    flexWrap: ({ wrap }) => (typeof wrap === 'boolean' ? 'wrap' : wrap),
    margin: 'calc(var(--row-gap) / -2) calc(var(--column-gap) / -2)',
    '& > *': {
      margin: 'calc(var(--row-gap) / 2) calc(var(--column-gap) / 2)',
    },
  },
}))

interface FlexProps {
  direction?: CSSProperties['flexDirection']
  wrap?: boolean | CSSProperties['flexWrap']
  gap?: number
  items?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
}

export const Flex: React.FC<FlexProps> = props => {
  const { children, ...rest } = props
  const classes = useStyles(rest)
  return (
    <div>
      <div className={classes.flex}>{children}</div>
    </div>
  )
}
