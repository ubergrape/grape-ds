import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { AvatarItemProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    name: {
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
