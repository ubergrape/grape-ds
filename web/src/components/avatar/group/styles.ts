import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { onScaleIndicationSize } from '../avatar/styles'
import { GroupProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      position: 'relative',
      padding: 0,
      border: 0,
      backgroundColor: 'transparent',
      borderRadius: '50%',
      width: ({ size }: GroupProps) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
      height: ({ size }: GroupProps) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
      cursor: ({ isDisabled }: GroupProps) =>
        isDisabled ? 'not-allowed' : 'pointer',
      '&:focus': {
        outline: 0,
      },
    },
    group: {
      width: ({ size }: GroupProps) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
      height: ({ size }: GroupProps) =>
        size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: theme.colorBackgroundAvatarGroup,
      transition: 'all 0.25s ease-in-out',
      opacity: ({ isDisabled }: GroupProps) => (isDisabled ? '0.5' : 1),
      '&:hover': {
        transform: ({ isDisabled }: GroupProps) =>
          isDisabled ? 'none' : 'scale(1.1)',
        '& + div': {
          width: ({ size }: GroupProps) =>
            size === 'small'
              ? theme.sizeGrouptypeIndicatorSmall
              : theme.sizeGrouptypeIndicatorMedium,
          height: ({ size }: GroupProps) =>
            size === 'small'
              ? theme.sizeGrouptypeIndicatorSmall
              : theme.sizeGrouptypeIndicatorMedium,
          bottom: ({ size }: GroupProps) => {
            if (size === 'small') {
              return onScaleIndicationSize(theme.sizeAvatarSmall)
            }
            return onScaleIndicationSize(theme.sizeAvatarMedium)
          },
          right: ({ size }: GroupProps) => {
            if (size === 'small') {
              return onScaleIndicationSize(theme.sizeAvatarSmall)
            }
            return onScaleIndicationSize(theme.sizeAvatarMedium)
          },
        },
      },
    },
    color: {
      width: ({ size }: GroupProps) =>
        size === 'small'
          ? theme.sizeGroupcolorSmall
          : theme.sizeGroupcolorMedium,
      height: ({ size }: GroupProps) =>
        size === 'small'
          ? theme.sizeGroupcolorSmall
          : theme.sizeGroupcolorMedium,
      borderRadius: '50%',
      backgroundColor: ({ color }: GroupProps) => {
        switch (color) {
          case 'grey':
            return theme.colorBackgroundAvatarGroupColor01
            break
          case 'light-grey':
            return theme.colorBackgroundAvatarGroupColor02
            break
          case 'gold':
            return theme.colorBackgroundAvatarGroupColor03
            break
          case 'orange':
            return theme.colorBackgroundAvatarGroupColor04
            break
          case 'pink':
            return theme.colorBackgroundAvatarGroupColor05
            break
          case 'purple':
            return theme.colorBackgroundAvatarGroupColor06
            break
          case 'blue':
            return theme.colorBackgroundAvatarGroupColor07
            break
          case 'light-blue':
            return theme.colorBackgroundAvatarGroupColor08
            break
          case 'green':
            return theme.colorBackgroundAvatarGroupColor09
            break
          case 'light-green':
            return theme.colorBackgroundAvatarGroupColor10
            break
          default:
            return theme.colorBackgroundAvatarGroupColor01
            break
        }
      },
    },
    status: {
      position: 'absolute',
      display: 'flex',
      pointerEvents: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      right: 0,
      bottom: 0,
      borderRadius: '50%',
      backgroundColor: theme.colorBackgroundGrouptypeIndicator,
      transition: 'all 0.25s ease-in-out',
      width: ({ size }: GroupProps) =>
        size === 'small'
          ? theme.sizeGrouptypeIndicatorSmall
          : theme.sizeGrouptypeIndicatorMedium,
      height: ({ size }: GroupProps) =>
        size === 'small'
          ? theme.sizeGrouptypeIndicatorSmall
          : theme.sizeGrouptypeIndicatorMedium,
    },
    icon: {
      color: theme.colorBackgroundGrouptypeIcon,
    },
  }),
)
