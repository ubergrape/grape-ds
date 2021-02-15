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
      marginLeft: ({ size }: AvatarItemProps) =>
        size === 'regular' ? 0 : theme.spaceAvatarItem,
    },
  }),
)
