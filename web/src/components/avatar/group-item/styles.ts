import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

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
        size === 'small' ? theme.spaceAvatarItem : 0,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      marginLeft: ({ members, size }: GroupItemProps) =>
        members && size !== 'small' ? theme.spaceMembersSecondary : 0,
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
