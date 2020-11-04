import { createUseStyles } from 'react-jss'

import { scale } from '../../../styles/scale'

export default createUseStyles(() => ({
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
