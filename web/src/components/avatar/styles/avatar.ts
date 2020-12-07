import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import onHover from './onHover'

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
      '&:hover': onHover(theme),
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
      transition: 'all 0.25s ease-in-out',
      backgroundColor: ({ isSelected }) => {
        if (isSelected) return theme.colorBackgroundAvatarSelected
        return theme.colorBackgroundAvatarUser
      },
      opacity: ({ isInactive, isSelected }) =>
        isInactive && !isSelected ? '0.5' : 1,
    },
  }),
)
