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
    wrapper: {
      width: '100%',
    },
    secondary: {
      width: '100%',
      display: 'flex',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginLeft: ({ size }: GroupItemProps) =>
        size === 'regular' ? 0 : theme.spaceAvatarItem,
    },
    description: {
      flex: '1 1 auto',
    },
    text: {
      width: '100%',
      overflow: 'hidden',
    },
    membersText: {
      overflow: 'initial',
    },
    members: {
      flexShrink: 0,
      color: theme.colorTextAvatarItemSecondary,
    },
    membersCount: {
      marginLeft: theme.spaceMembersCount,
      marginRight: theme.spaceMembersSecondary,
    },
  }),
)
