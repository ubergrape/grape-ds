import { createUseStyles } from 'react-jss'

import { ActionLinkProps } from '.'
import tokens from '../../tokens'

const getSizeFromProp = ({ size }: ActionLinkProps) =>
  size === 'regular' ? tokens.sizeActionlinkRegular : tokens.sizeActionlinkSmall

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  actionLink: {
    display: 'block',
    height: getSizeFromProp,
    textDecoration: 'none',
    alignSelf: 'flex-start',
    borderRadius: theme.borderRadiusActionlink,
    cursor: ({ isDisabled }: ActionLinkProps) =>
      isDisabled ? 'not-allowed' : 'pointer',
    '&:hover': {
      backgroundColor: ({ variant, isDisabled }: ActionLinkProps): string => {
        if (isDisabled) return undefined
        switch (variant) {
          case 'primary':
            return tokens.colorBackgroundActionlinkPrimaryHover
          case 'basic':
            return tokens.colorBackgroundActionlinkBasicHover
          case 'danger':
            return tokens.colorBackgroundActionlinkDangerHover
          default:
            return tokens.colorBackgroundActionlinkBasicHover
        }
      },
    },
    paddingRight: ({ size }: ActionLinkProps) =>
      size === 'regular' ? theme.size2X : theme.size1X,
    transition: 'background-color 0.25s ease-in-out',
  },
  iconWrapper: {
    height: getSizeFromProp,
    width: getSizeFromProp,
    borderRadius: theme.borderRadiusActionlink,
    backgroundColor: ({ variant, isDisabled }: ActionLinkProps): string => {
      if (isDisabled) return tokens.colorBackgroundActionlinkIconShapeDisabled
      switch (variant) {
        case 'primary':
          return tokens.colorBackgroundActionlinkPrimaryIconShape
        case 'basic':
          return tokens.colorBackgroundActionlinkBasicIconShape
        case 'danger':
          return tokens.colorBackgroundActionlinkDangerIconShape
        default:
          return tokens.colorBackgroundActionlinkBasicIconShape
      }
    },
    marginRight: theme.paddingActionlinkRegularIconshapeLinktext,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > svg': {
      color: ({ variant, isDisabled }: ActionLinkProps): string => {
        if (isDisabled) return tokens.colorBackgroundActionlinkIconDisabled
        switch (variant) {
          case 'primary':
            return tokens.colorBackgroundActionlinkPrimaryIcon
          case 'basic':
            return tokens.colorBackgroundActionlinkBasicIcon
          case 'danger':
            return tokens.colorBackgroundActionlinkDangerIcon
          default:
            return tokens.colorBackgroundActionlinkBasicIcon
        }
      },
    },
  },
  label: {
    color: ({ isDisabled }: ActionLinkProps): string => {
      if (isDisabled) return tokens.colorTextActionlinkDisabled
      return tokens.colorTextActionlink
    },
  },
}))
