import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

export default createUseStyles((theme: typeof tokens) => ({
  wrapper: {
    display: 'inline-flex',
    justifyContent: ({ align }) => {
      switch (align) {
        case 'left':
          return 'flex'
        case 'right':
          return 'flex-end'
        default:
          return 'flex'
      }
    },
    margin: ({ margin }) => {
      console.log(margin)
      return margin
    },
    width: ({ width }) => width,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: theme.borderWidthTab,
      backgroundColor: theme.colorBorderTabDivider,
    },
  },
}))
