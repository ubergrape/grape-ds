import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import onHover from './onHover'

export const useItemStyle = createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      border: 0,
      padding: theme.sizeHalfX,
      margin: [0, theme.outlineWidthFocus],
      alignItems: 'center',
      backgroundColor: 'transparent',
      cursor: ({ isDisabled }) => (isDisabled ? 'auto' : 'pointer'),
      '& > div:first-child': {
        transition: 'all 0.25s ease-in-out',
      },
      '&:hover': {
        '& > div:first-child': onHover(theme),
      },
      '&:focus': {
        outline: 0,
      },
    },
    text: {
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      marginLeft: theme.spaceAvatarItem,
      flexDirection: ({ size }) => (size === 'regular' ? 'column' : 'row'),
    },
    name: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      flexShrink: 0,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
    },
    imageSkeleton: {
      flex: '1 0 auto',
      width: ({ size }) => {
        switch (size) {
          case 'x-small':
            return theme.sizeAvatarXSmall
          case 'small':
            return theme.sizeAvatarSmall
          case 'regular':
            return theme.sizeAvatarRegular
          default:
            return theme.sizeAvatarRegular
        }
      },
      height: ({ size }) => {
        switch (size) {
          case 'x-small':
            return theme.sizeAvatarXSmall
          case 'small':
            return theme.sizeAvatarSmall
          case 'regular':
            return theme.sizeAvatarRegular
          default:
            return theme.sizeAvatarRegular
        }
      },
    },
  }),
)
