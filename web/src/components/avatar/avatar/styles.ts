import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { AvatarProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    icon: {
      display: 'flex',
      color: theme.colorBackgroundAvatarSelectedIcon,
    },
    status: {
      right: -1,
      bottom: -1,
      position: 'absolute',
      borderRadius: theme.borderRadiusAvatar,
      boxSizing: 'border-box',
      transition: 'all 0.25s ease-in-out',
      border: `${theme.borderWidthPresenceIndicator} solid ${theme.colorBorderPresenceIndicator}`,
      backgroundColor: ({ status }: AvatarProps) => {
        switch (status) {
          case 'online':
            return theme.colorBackgroundPresenceIndicatorOnline
          default:
            return 'transparent'
        }
      },
      width: ({ size }: AvatarProps) => {
        if (size === 'small') return theme.sizePresenceIndicatorSmall
        return theme.sizePresenceIndicatorRegular
      },
      height: ({ size }: AvatarProps) => {
        if (size === 'small') return theme.sizePresenceIndicatorSmall
        return theme.sizePresenceIndicatorRegular
      },
    },
  }),
)
