import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

export const onScaleIndicationSize = (avatarSize: string): number =>
  -parseToken(avatarSize) / 10 + 1

export const useAvatarStyle = createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      position: 'relative',
      padding: 0,
      border: 0,
      backgroundColor: 'transparent',
      borderRadius: '50%',
      width: ({ size }) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
      height: ({ size }) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
      cursor: ({ isInactive, isDisabled }) => {
        if (isDisabled) return 'auto'
        return isInactive ? 'not-allowed' : 'pointer'
      },
      transition: 'all 0.25s ease-in-out',
      '&:hover': {
        transform: ({ isInactive, isDisabled }) =>
          isInactive || isDisabled ? 'none' : 'scale(1.1)',
        '& > div:nth-child(2)': {
          transform: ({ isInactive, isDisabled }) =>
            isInactive || isDisabled ? 'none' : 'scale(0.91)',
          bottom: ({ isInactive, isDisabled, size }) => {
            if (isInactive || isDisabled) return -1
            if (size === 'small') {
              return onScaleIndicationSize(theme.sizeAvatarSmall)
            }
            return onScaleIndicationSize(theme.sizeAvatarMedium)
          },
          right: ({ isInactive, isDisabled, size }) => {
            if (isInactive || isDisabled) return -1
            if (size === 'small') {
              return onScaleIndicationSize(theme.sizeAvatarSmall)
            }
            return onScaleIndicationSize(theme.sizeAvatarMedium)
          },
        },
      },
      '&:focus': {
        outline: 0,
      },
    },
    circle: {
      width: ({ size }) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
      height: ({ size }) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
      borderRadius: '50%',
      backgroundColor: ({ isSelected }) => {
        if (isSelected) return theme.colorBackgroundAvatarSelected
        return theme.colorBackgroundAvatarUser
      },
      opacity: ({ isInactive, isSelected }) =>
        isInactive && !isSelected ? '0.5' : 1,
    },
  }),
)
