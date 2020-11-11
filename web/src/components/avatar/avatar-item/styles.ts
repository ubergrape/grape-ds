import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import AvatarItemProps from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
    },
    text: {
      display: 'flex',
      flexDirection: ({ size }: AvatarItemProps) =>
        size === 'small' ? 'row' : 'column',
      alignItems: ({ size }: AvatarItemProps) =>
        size === 'small' ? 'center' : 'initial',
      justifyContent: 'center',
      marginLeft: theme.spaceAvatarItem,
    },
    name: {
      color: ({ isInactive }: AvatarItemProps) =>
        isInactive
          ? theme.colorTextAvatarItemPrimaryInactive
          : theme.colorTextAvatarItemPrimary,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      marginLeft: ({ size }: AvatarItemProps) =>
        size === 'small' ? theme.spaceAvatarItem : 0,
    },
  }),
)
