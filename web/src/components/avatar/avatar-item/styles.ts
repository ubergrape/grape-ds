import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { AvatarItemProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      padding: 0,
      border: 0,
      alignItems: 'center',
      backgroundColor: 'transparent',
      '& > div:first-child': {
        transition: 'all 0.25s ease-in-out',
      },
      '&:hover': {
        '& > div:first-child': {
          transform: 'scale(1.1)',
        },
      },
      '&:focus': {
        outline: 0,
      },
    },
    text: {
      display: 'flex',
      flexDirection: ({ size }: AvatarItemProps) =>
        size === 'small' ? 'row' : 'column',
      alignItems: ({ size }: AvatarItemProps) =>
        size === 'small' ? 'initial' : 'start',
      marginLeft: theme.spaceAvatarItem,
    },
    name: {
      color: ({ isInactive, isSelected }: AvatarItemProps) =>
        isInactive && !isSelected
          ? theme.colorTextAvatarItemPrimaryInactive
          : theme.colorTextAvatarItemPrimary,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      marginLeft: ({ size }: AvatarItemProps) =>
        size === 'small' ? theme.spaceAvatarItem : 0,
    },
  }),
)
