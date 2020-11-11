import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import AvatarProps from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      position: 'relative',
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
      opacity: ({ isInactive }: AvatarProps) => (isInactive ? '0.5' : 1),
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
    status: {
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
      backgroundColor: ({ status }: AvatarProps) => {
        switch (status) {
          case 'offline':
            return 'red'
            break
          case 'reachable':
            return 'dodgerBlue'
            break
          case 'inCall':
            return 'dodgerBlue'
            break
          case 'online':
            return theme.colorBackgroundPresenceIndicatorOnline
            break
          default:
            return 'transparent'
        }
      },
      right: 0,
      bottom: 0,
    },
  }),
)
