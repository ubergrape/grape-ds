import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

export const useItemStyle = createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      padding: 0,
      border: 0,
      alignItems: 'center',
      backgroundColor: 'transparent',
      cursor: ({ isInactive, isDisabled }) => {
        if (isDisabled) return 'auto'
        return isInactive ? 'not-allowed' : 'pointer'
      },
      '& > div:first-child': {
        transition: 'all 0.25s ease-in-out',
      },
      '&:hover': {
        '& > div:first-child': {
          transform: ({ isInactive, isDisabled }) =>
            isInactive || isDisabled ? 'none' : 'scale(1.1)',
        },
      },
      '&:focus': {
        outline: 0,
      },
    },
    text: {
      display: 'flex',
      marginLeft: theme.spaceAvatarItem,
      width: ({ maxWidth, size }) => {
        if (!maxWidth) return 'auto'

        const padding = parseToken(theme.spaceAvatarItem)

        const avatarSize = parseToken(
          size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarMedium,
        )

        return `calc(${maxWidth}px - ${padding + avatarSize}px)`
      },
      flexDirection: ({ size }) => (size === 'small' ? 'row' : 'column'),
    },
  }),
)
