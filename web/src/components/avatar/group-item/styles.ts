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
      width: 0, // flex-grow will try to make it use as much space as available
    },
    textWrapper: {
      width: '100%',
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
