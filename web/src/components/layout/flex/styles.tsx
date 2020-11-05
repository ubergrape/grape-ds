import { createUseStyles } from 'react-jss'

import { scale } from '../../../styles/scale'

export default createUseStyles(() => {
  return {
    flex: {
      display: 'flex',
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
