import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

export default createUseStyles((theme: typeof tokens) => ({
  wrapper: {
    display: 'flex',
    height: ({ size }) => (size === 'small' ? theme.size3X : theme.size4X),
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
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: theme.size1X,
      width: `calc(100% - ${theme.size2X})`,
      height: theme.borderWidthTab,
      backgroundColor: theme.colorBorderTabDivider,
    },
  },
}))
