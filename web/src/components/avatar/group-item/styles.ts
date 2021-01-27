import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { GroupItemProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    name: {
      color: ({ isInactive }: GroupItemProps) =>
        isInactive
          ? theme.colorTextAvatarItemPrimaryInactive
          : theme.colorTextAvatarItemPrimary,
    },
    secondary: {
      display: 'flex',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginLeft: ({ size }: GroupItemProps) =>
        size === 'regular' ? 0 : theme.spaceAvatarItem,
    },
    description: {
      marginLeft: ({ members, size }: GroupItemProps) =>
        members && size !== 'regular' ? 0 : theme.spaceMembersSecondary,
    },
    members: {
      flexShrink: 0,
      color: theme.colorTextAvatarItemSecondary,
    },
    icon: {
      color: theme.colorBackgroundGrouptypeIcon,
    },
    membersCount: {
      marginLeft: theme.spaceMembersCount,
    },
  }),
)
