import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

import { AvatarItemProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
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
      color: ({ isInactive, isSelected }: AvatarItemProps) =>
        isInactive && !isSelected
          ? theme.colorTextAvatarItemPrimaryInactive
          : theme.colorTextAvatarItemPrimary,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      marginLeft: ({ size }: AvatarItemProps) =>
        size === 'small' ? theme.spaceAvatarItem : 0,
    },
  }),
)
