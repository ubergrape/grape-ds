import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { AvatarProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    button: {
      display: 'flex',
      position: 'relative',
      padding: 0,
      border: 0,
      backgroundColor: 'transparent',
      borderRadius: '50%',
    },
    avatar: {
      height: ({ size }: AvatarProps) => {
        if (size === 'small') return theme.sizeAvatarSmall
        return theme.sizeAvatarMedium
      },
      width: ({ size }: AvatarProps) => {
        if (size === 'small') return theme.sizeAvatarSmall
        return theme.sizeAvatarMedium
      },
      borderRadius: '50%',
      backgroundColor: ({ isSelected }: AvatarProps) => {
        if (isSelected) return theme.colorBackgroundAvatarSelected
        return theme.colorBackgroundAvatarUser
      },
      opacity: ({ isInactive, isSelected }: AvatarProps) =>
        isInactive && !isSelected ? '0.5' : 1,
    },
    selected: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      display: 'flex',
      color: theme.colorBackgroundAvatarSelectedIcon,
    },
    online: {
      width: ({ size }: AvatarProps) => {
        if (size === 'small') return theme.sizePresenceIndicatorSmall
        return theme.sizePresenceIndicatorMedium
      },
      height: ({ size }: AvatarProps) => {
        if (size === 'small') return theme.sizePresenceIndicatorSmall
        return theme.sizePresenceIndicatorMedium
      },
      border: `${theme.borderWidthPresenceIndicator} solid ${theme.colorBorderPresenceIndicator}`,
      borderRadius: '50%',
      position: 'absolute',
      boxSizing: 'border-box',
      backgroundColor: ({ isOnline }: AvatarProps) =>
        isOnline ? theme.colorBackgroundPresenceIndicatorOnline : 'transparent',
      right: 0,
      bottom: 0,
    },
  }),
)
