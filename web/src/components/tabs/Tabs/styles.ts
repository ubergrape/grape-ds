import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

export default createUseStyles((theme: typeof tokens) => ({
  wrapper: {

  },
  tabs: {
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
    boxShadow: 'inset 0px -2px 0px rgb(241, 241, 241)',
  },
}))
