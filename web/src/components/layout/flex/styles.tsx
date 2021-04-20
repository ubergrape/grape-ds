import { createUseStyles } from 'react-jss'

import { scale } from '../../../styles/scale'

export default createUseStyles(() => {
  return {
    wrapper: {
      display: 'flex',
    },
    flex: {
      display: 'flex',
      flex: 1,
      width: ({ width }) => width,
      flexDirection: ({ direction }) => direction,
      justifyContent: ({ justify }) => justify,
      alignItems: ({ items }) => items,
      flexWrap: ({ wrap }) => (typeof wrap === 'boolean' ? 'wrap' : wrap),
      margin: ({ gap }) => `calc(${scale[gap]} / -2) calc(${scale[gap]} / -2)`,
      '& > *': {
        margin: ({ gap }) => `calc(${scale[gap]} / 2) calc(${scale[gap]} / 2)`,
      },
    },
  }
})
