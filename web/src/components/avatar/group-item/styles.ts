import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import GroupItemProps from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
    },
    text: {
      display: 'flex',
      flexDirection: ({ size }: GroupItemProps) =>
        size === 'small' ? 'row' : 'column',
      alignItems: ({ size }: GroupItemProps) =>
        size === 'small' ? 'center' : 'initial',
      justifyContent: 'center',
      marginLeft: theme.spaceAvatarItem,
    },
    name: {
      color: ({ isInactive }: GroupItemProps) =>
        isInactive
          ? theme.colorTextAvatarItemPrimaryInactive
          : theme.colorTextAvatarItemPrimary,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      marginLeft: ({ size }: GroupItemProps) =>
        size === 'small' ? theme.spaceAvatarItem : 0,
    },
    members: {
      display: 'flex',
    },
    membersCount: {
      marginLeft: theme.spaceMembersCount,
    },
  }),
)
