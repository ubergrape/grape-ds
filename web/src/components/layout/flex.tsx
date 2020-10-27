import React from 'react'
import { createUseStyles } from 'react-jss'

import { scale } from '../../styles/scale'

const useStyles = createUseStyles(() => ({
  flex: {
    display: 'flex',
    '--gap': ({ gap }) => `${scale[gap] || 0}`,
    '--column-gap': 'var(--gap)',
    '--row-gap': 'var(--gap)',
    flexDirection: ({ direction }) => direction,
    margin: 'calc(-1 * var(--row-gap)) 0 0 calc(-1 * var(--column-gap))',
    '& > *': {
      margin: 'calc(var(--row-gap)) 0 0 calc(var(--column-gap))',
    },
  },
}))

interface FlexProps {
  direction?: 'row' | 'column'
  gap?: number
}

export const Flex: React.FC<FlexProps> = props => {
  const { children } = props
  const classes = useStyles(props)
  return <div className={classes.flex}>{children}</div>
}
