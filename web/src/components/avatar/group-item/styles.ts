import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { GroupItemProps } from '.'

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
      color: theme.colorTextAvatarItemPrimary,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      marginLeft: ({ members }: GroupItemProps) =>
        members ? theme.spaceMembersSecondary : 0,
    },
    members: {
      display: 'flex',
      color: theme.colorTextAvatarItemSecondary,
    },
    secondary: {
      display: 'flex',
    },
    membersCount: {
      marginLeft: theme.spaceMembersCount,
    },
  }),
)
