import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

export const onScaleIndicationSize = (avatarSize: string): number =>
  -parseToken(avatarSize) / 10 + 2

export const useAvatarStyle = createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      position: 'relative',
      padding: 0,
      border: 0,
      backgroundColor: 'transparent',
      borderRadius: theme.borderRadiusAvatar,
      pointerEvents: ({ isUnclickable }) => (isUnclickable ? 'none' : 'auto'),
      width: ({ size }) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarRegular,
      height: ({ size }) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarRegular,
      cursor: ({ isDisabled }) => (isDisabled ? 'auto' : 'pointer'),
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
            return onScaleIndicationSize(theme.sizeAvatarRegular)
          },
          right: ({ isInactive, isDisabled, size }) => {
            if (isInactive || isDisabled) return -1
            if (size === 'small') {
              return onScaleIndicationSize(theme.sizeAvatarSmall)
            }
            return onScaleIndicationSize(theme.sizeAvatarRegular)
          },
        },
      },
      '&:focus': {
        outline: 0,
      },
    },
    circle: {
      width: ({ size }) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarRegular,
      height: ({ size }) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarRegular,
      borderRadius: theme.borderRadiusAvatar,
      backgroundColor: ({ isSelected }) => {
        if (isSelected) return theme.colorBackgroundAvatarSelected
        return theme.colorBackgroundAvatarUser
      },
      opacity: ({ isInactive, isSelected }) =>
        isInactive && !isSelected ? '0.5' : 1,
    },
  }),
)
