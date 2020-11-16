import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { GroupItemProps } from '.'

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
      flexDirection: ({ size }: GroupItemProps) =>
        size === 'small' ? 'row' : 'column',
      alignItems: ({ size }: GroupItemProps) =>
        size === 'small' ? 'center' : 'initial',
      justifyContent: 'center',
      marginLeft: theme.spaceAvatarItem,
    },
    name: {
      color: theme.colorTextAvatarItemPrimary,
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      marginLeft: ({ members, size }: GroupItemProps) =>
        members && size !== 'small' ? theme.spaceMembersSecondary : 0,
    },
    members: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colorTextAvatarItemSecondary,
    },
    iconWrapper: {
      width: 11.25,
      heigth: 11.25,
    },
    icon: {
      display: 'block',
      color: theme.colorBackgroundGrouptypeIcon,
    },
    secondary: {
      display: 'flex',
      marginLeft: ({ size }: GroupItemProps) =>
        size === 'small' ? theme.spaceAvatarItem : 0,
    },
    membersCount: {
      marginLeft: theme.spaceMembersCount,
    },
  }),
)
