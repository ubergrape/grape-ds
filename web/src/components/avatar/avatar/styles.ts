import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

import { AvatarProps } from '.'

export const onScaleIndicationSize = (avatarSize: string): number =>
  -parseToken(avatarSize) / 10

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      position: 'relative',
      padding: 0,
      border: 0,
      backgroundColor: 'transparent',
      borderRadius: '50%',
      height: ({ size }: AvatarProps) => {
        if (size === 'small') return theme.sizeAvatarSmall
        return theme.sizeAvatarMedium
      },
      width: ({ size }: AvatarProps) => {
        if (size === 'small') return theme.sizeAvatarSmall
        return theme.sizeAvatarMedium
      },
      cursor: ({ isDisabled }: AvatarProps) =>
        isDisabled ? 'not-allowed' : 'pointer',
      '&:focus': {
        outline: 0,
      },
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
      opacity: ({ isDisabled, isSelected }: AvatarProps) =>
        isDisabled && !isSelected ? '0.5' : 1,
      transition: 'all 0.25s ease-in-out',
      '&:hover': {
        transform: ({ isDisabled }: AvatarProps) =>
          isDisabled ? 'none' : 'scale(1.1)',
        '& + div': {
          width: ({ size }: AvatarProps) => {
            if (size === 'small') return theme.sizePresenceIndicatorSmall
            return theme.sizePresenceIndicatorMedium
          },
          height: ({ size }: AvatarProps) => {
            if (size === 'small') return theme.sizePresenceIndicatorSmall
            return theme.sizePresenceIndicatorMedium
          },
          bottom: ({ isDisabled, size }: AvatarProps) => {
            if (isDisabled) return 0
            if (size === 'small') {
              return onScaleIndicationSize(theme.sizeAvatarSmall)
            }
            return onScaleIndicationSize(theme.sizeAvatarMedium)
          },
          right: ({ isDisabled, size }: AvatarProps) => {
            if (isDisabled) return 0
            if (size === 'small') {
              return onScaleIndicationSize(theme.sizeAvatarSmall)
            }
            return onScaleIndicationSize(theme.sizeAvatarMedium)
          },
        },
      },
    },
    isSelected: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      display: 'flex',
      color: theme.colorBackgroundAvatarSelectedIcon,
    },
    status: {
      pointerEvents: 'none',
      transition: 'all 0.25s ease-in-out',
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
          case 'online':
            return theme.colorBackgroundPresenceIndicatorOnline
          default:
            return 'transparent'
        }
      },
      right: 0,
      bottom: 0,
    },
  }),
)
