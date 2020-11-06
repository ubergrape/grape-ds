import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      position: 'relative',
    },
    avatar: {
      height: ({ size }) => {
        if (size === 'regular') return theme.size4X
        return theme.size3X
      },
      width: ({ size }) => {
        if (size === 'regular') return theme.size4X
        return theme.size3X
      },
      borderRadius: '50%',
      backgroundColor: ({ isSelected }) => {
        if (isSelected) return theme.colorBackgroundAvatarSelected
        return theme.colorBackgroundAvatarUser
      },
      opacity: ({ isInactive }) => (isInactive ? '0.5' : 1),
    },
    status: {
      width: theme.sizePresenceIndicatorSmall,
      height: theme.sizePresenceIndicatorSmall,
      border: `${theme.borderWidthPresenceIndicator} solid ${theme.colorBorderPresenceIndicator}`,
      borderRadius: '50%',
      position: 'absolute',
      boxSizing: 'border-box',
      backgroundColor: ({ status }) => {
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
