import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

import { AvatarItemProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      padding: 0,
      border: 0,
      alignItems: 'center',
      backgroundColor: 'transparent',
      cursor: ({ isDisabled }: AvatarItemProps) =>
        isDisabled ? 'not-allowed' : 'pointer',
      '& > div:first-child': {
        transition: 'all 0.25s ease-in-out',
      },
      '&:hover': {
        '& > div:first-child': {
          transform: ({ isDisabled }: AvatarItemProps) =>
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
      flexDirection: ({ size }: AvatarItemProps) =>
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
      color: ({ isDisabled, isSelected }: AvatarItemProps) =>
        isDisabled && !isSelected
          ? theme.colorTextAvatarItemPrimaryInactive
          : theme.colorTextAvatarItemPrimary,
    },
    description: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      color: theme.colorTextAvatarItemSecondary,
      marginLeft: ({ size }: AvatarItemProps) =>
        size === 'small' ? theme.spaceAvatarItem : 0,
    },
  }),
)
