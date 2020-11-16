import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

import { GroupItemProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      padding: 0,
      border: 0,
      alignItems: 'center',
      backgroundColor: 'transparent',
      cursor: ({ isDisabled }: GroupItemProps) =>
        isDisabled ? 'not-allowed' : 'pointer',
      '& > div:first-child': {
        transition: 'all 0.25s ease-in-out',
      },
      '&:hover': {
        '& > div:first-child': {
          transform: ({ isDisabled }: GroupItemProps) =>
            isDisabled ? 'none' : 'scale(1.1)',
        },
      },
      '&:focus': {
        outline: 0,
      },
    },
    text: {
      display: 'flex',
      width: ({ maxWidth, size }) => {
        if (!maxWidth) return 'auto'

        const padding = parseToken(theme.spaceAvatarItem)

        const avatarSize = parseToken(
          size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
        )

        return `calc(${maxWidth}px - ${padding + avatarSize}px)`
      },
      flexDirection: ({ size }: GroupItemProps) =>
        size === 'small' ? 'row' : 'column',
      marginLeft: theme.spaceAvatarItem,
    },
    name: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      flexShrink: 0,
      maxWidth: ({ maxWidth, size }) => {
        if (!maxWidth) return 'auto'

        const padding = parseToken(theme.spaceAvatarItem) * 2

        const avatarSize = parseToken(
          size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
        )

        return `calc(${maxWidth}px - ${padding + avatarSize}px)`
      },
      color: ({ isDisabled }: GroupItemProps) =>
        isDisabled
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
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'center',
      alignItems: 'center',
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
