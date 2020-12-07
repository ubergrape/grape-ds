import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { GroupProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    color: {
      width: ({ size }: GroupProps) =>
        size === 'small'
          ? theme.sizeGroupcolorSmall
          : theme.sizeGroupcolorRegular,
      height: ({ size }: GroupProps) =>
        size === 'small'
          ? theme.sizeGroupcolorSmall
          : theme.sizeGroupcolorRegular,
      borderRadius: theme.borderRadiusAvatar,
      backgroundColor: ({ color }: GroupProps) => {
        switch (color) {
          case 1:
            return theme.colorBackgroundAvatarGroupColor01
            break
          case 2:
            return theme.colorBackgroundAvatarGroupColor02
            break
          case 3:
            return theme.colorBackgroundAvatarGroupColor03
            break
          case 4:
            return theme.colorBackgroundAvatarGroupColor04
            break
          case 5:
            return theme.colorBackgroundAvatarGroupColor05
            break
          case 6:
            return theme.colorBackgroundAvatarGroupColor06
            break
          case 7:
            return theme.colorBackgroundAvatarGroupColor07
            break
          case 8:
            return theme.colorBackgroundAvatarGroupColor08
            break
          case 9:
            return theme.colorBackgroundAvatarGroupColor09
            break
          case 10:
            return theme.colorBackgroundAvatarGroupColor10
            break
          default:
            return theme.colorBackgroundAvatarGroupColor01
            break
        }
      },
    },
    status: {
      right: -1,
      bottom: -1,
      position: 'absolute',
      pointerEvents: 'none',
      borderRadius: theme.borderRadiusAvatar,
      transition: 'all 0.25s ease-in-out',
      backgroundColor: theme.colorBackgroundGrouptypeIndicator,
      width: ({ size }: GroupProps) =>
        size === 'small'
          ? theme.sizeGrouptypeIndicatorSmall
          : theme.sizeGrouptypeIndicatorRegular,
      height: ({ size }: GroupProps) =>
        size === 'small'
          ? theme.sizeGrouptypeIndicatorSmall
          : theme.sizeGrouptypeIndicatorRegular,
    },
    icon: {
      color: theme.colorBackgroundGrouptypeIcon,
    },
  }),
)
