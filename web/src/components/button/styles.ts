import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import { ButtonProps } from '.'
import tokens from '../../tokens'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    button: {
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeightButton,
      transition: 'all 0.25s ease-in-out',
      cursor: ({ disabled }: ButtonProps) => {
        return disabled ? 'not-allowed' : 'pointer'
      },
      minWidth: ({ iconOnly }) => {
        if (!iconOnly) return 64
        return 0
      },
      backgroundColor: ({ appearance, variant }: ButtonProps): string => {
        if (appearance === 'minimal') return 'transparent'
        switch (variant) {
          case 'primary':
            return theme.colorBackgroundButtonStandardPrimaryDefault
          case 'basic':
            return theme.colorBackgroundButtonStandardBasicDefault
          case 'danger':
            return theme.colorBackgroundButtonStandardDangerDefault
          default:
            return theme.colorBackgroundButtonStandardPrimaryDefault
        }
      },
      height: ({ size }: ButtonProps) => {
        return size === 'small'
          ? theme.heightButtonSmall
          : theme.heightButtonRegular
      },
      width: ({ iconOnly, size }) => {
        if (!iconOnly) return 'auto'
        return size === 'small'
          ? theme.heightButtonSmall
          : theme.heightButtonRegular
      },
      // lineHeight: ({ size }: ButtonProps) => {
      //   return size === 'small'
      //     ? theme.lineHeightButtonSmall
      //     : theme.lineHeightButtonRegular
      // },
      lineHeight: '16px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      fontSize: ({ size }: ButtonProps) => {
        return size === 'small'
          ? theme.fontSizeButtonSmall
          : theme.fontSizeButtonRegular
      },
      color: ({ appearance, variant }: ButtonProps): string => {
        if (appearance === 'minimal') {
          switch (variant) {
            case 'primary':
              return theme.colorTextButtonMinimalPrimary
            case 'basic':
              return theme.colorTextButtonMinimalBasic
            case 'danger':
              return theme.colorTextButtonMinimalDanger
            default:
              return theme.colorTextButtonMinimalPrimary
          }
        }

        switch (variant) {
          case 'primary':
            return theme.colorTextButtonStandardPrimary
          case 'basic':
            return theme.colorTextButtonStandardBasic
          case 'danger':
            return theme.colorTextButtonStandardDanger
          default:
            return theme.colorTextButtonStandardPrimary
        }
      },
      padding: (p: ButtonProps & { iconOnly?: boolean }) => {
        return !p.iconOnly
          ? `0px ${
              p.size === 'small'
                ? theme.paddingButtonSmallRightLeft
                : theme.paddingButtonRegularRightLeft
            }`
          : 0
      },
      border: 0,
      borderRadius: theme.borderRadiusButton,
      '& > svg': {
        transition: 'all 0.25s ease-in-out',
      },
      '&:hover': {
        backgroundColor: ({ appearance, variant }: ButtonProps): string => {
          if (appearance === 'minimal') {
            switch (variant) {
              case 'primary':
                return theme.colorBackgroundButtonMinimalPrimaryHover
              case 'basic':
                return theme.colorBackgroundButtonMinimalBasicHover
              case 'danger':
                return theme.colorBackgroundButtonMinimalDangerHover
              default:
                return theme.colorBackgroundButtonMinimalPrimaryHover
            }
          }

          switch (variant) {
            case 'primary':
              return theme.colorBackgroundButtonStandardPrimaryHover
            case 'basic':
              return theme.colorBackgroundButtonStandardBasicHover
            case 'danger':
              return theme.colorBackgroundButtonStandardDangerHover
            default:
              return theme.colorBackgroundButtonStandardPrimaryHover
          }
        },
        '& > svg': {
          transform: 'scale(1.15)',
        },
      },
      '&:active': {
        backgroundColor: ({ appearance, variant }: ButtonProps): string => {
          if (appearance === 'minimal') {
            switch (variant) {
              case 'primary':
                return theme.colorBackgroundButtonMinimalPrimaryActive
              case 'basic':
                return theme.colorBackgroundButtonMinimalBasicActive
              case 'danger':
                return theme.colorBackgroundButtonMinimalDangerActive
              default:
                return theme.colorBackgroundButtonMinimalPrimaryActive
            }
          }

          switch (variant) {
            case 'primary':
              return theme.colorBackgroundButtonStandardPrimaryActive
            case 'basic':
              return theme.colorBackgroundButtonStandardBasicActive
            case 'danger':
              return theme.colorBackgroundButtonStandardDangerActive
            default:
              return theme.colorBackgroundButtonStandardPrimaryActive
          }
        },
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: ({ appearance }: ButtonProps): string => {
          if (appearance === 'minimal') return 'transparent'

          return theme.colorBackgroundButtonStandardDisabled
        },
        color: ({ appearance }: ButtonProps): string => {
          if (appearance === 'minimal') {
            return theme.colorTextButtonMinimalDisabled
          }

          return theme.colorTextButtonStandardDisabled
        },
      },
      '&:focus': {
        outline: 0,
      },
    },
    focusRing: {
      boxShadow: `0 0 0 ${theme.outlineWidthFocus} ${theme.colorOutlineFocusDefault}`,
    },
  }),
)
