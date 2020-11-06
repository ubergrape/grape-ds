import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
    },
    text: {
      display: 'flex',
      flexDirection: ({ size }) => (size === 'small' ? 'row' : 'column'),
      alignItems: ({ size }) => (size === 'small' ? 'center' : 'initial'),
      marginLeft: theme.spaceAvatarItem,
    },
    name: {
      color: ({ isInactive }) =>
        isInactive
          ? theme.colorTextAvatarItemPrimaryInactive
          : theme.colorTextAvatarItemPrimary,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      marginLeft: ({ size }) => (size === 'small' ? theme.spaceAvatarItem : 0),
    },
  }),
)
