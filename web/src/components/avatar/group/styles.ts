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
      '&:focus': {
        outline: 0,
      },
    },
    group: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeAvatarSmall
        return theme.sizeAvatarMedium
      },
      width: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeAvatarSmall
        return theme.sizeAvatarMedium
      },
      borderRadius: '50%',
      backgroundColor: theme.colorBackgroundAvatarGroup,
      transition: 'all 0.25s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
        '& + div': {
          width: ({ size }: GroupProps) => {
            if (size === 'small') return theme.sizeGrouptypeIndicatorSmall
            return theme.sizeGrouptypeIndicatorMedium
          },
          height: ({ size }: GroupProps) => {
            if (size === 'small') return theme.sizeGrouptypeIndicatorSmall
            return theme.sizeGrouptypeIndicatorMedium
          },
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
      width: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeGroupcolorSmall
        return theme.sizeGroupcolorMedium
      },
      height: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeGroupcolorSmall
        return theme.sizeGroupcolorMedium
      },
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
      width: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeGrouptypeIndicatorSmall
        return theme.sizeGrouptypeIndicatorMedium
      },
      height: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeGrouptypeIndicatorSmall
        return theme.sizeGrouptypeIndicatorMedium
      },
    },
    iconWrapper: {
      width: 10,
      height: 10,
    },
    icon: {
      display: 'block',
      color: theme.colorBackgroundGrouptypeIcon,
    },
  }),
)
