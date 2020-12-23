import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: 'white',
    },
    dialog: {
      display: 'flex',
      outline: 0,
      flexDirection: 'column-reverse',
      height: `calc(100% - ${theme.size6X})`,
      alignItems: 'center',
      padding: theme.size3X,
    },
    button: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
    },
    content: {
      marginTop: theme.size3X,
      width: 680,
      height: '100%',
      display: 'flex',
      minHeight: 0,
      flexDirection: 'column',
    },
    title: {
      flexShrink: 0,
    },
    body: {
      marginTop: theme.size3X,
      flex: '1 1 auto',
      minHeight: 0,
    },
    '@media (max-width: 730px)': {
      content: {
        marginTop: theme.size3X,
        width: '100%',
        display: 'flex',
        minHeight: 0,
        flexDirection: 'column',
      },
    },
  }),
)
