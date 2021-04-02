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
        members > 0 && size === 'regular' ? theme.spaceMembersSecondary : 0,
    },
    membersText: {
      overflow: 'initial',
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
