import { JssStyle } from 'jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

const onScaleIndicationSize = (avatarSize: string): number =>
  -parseToken(avatarSize) / 10

export default (theme: typeof tokens): Record<string, JssStyle> => ({
  '& > div:first-child': {
    transform: ({ isInactive, isDisabled }) =>
      isInactive || isDisabled ? 'none' : 'scale(1.1)',
  },
  '& > div:nth-child(2)': {
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
})
