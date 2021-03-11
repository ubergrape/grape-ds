import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import { ButtonProps } from '.'
import tokens from '../../tokens'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      padding: theme.outlineWidthFocus,
    },
    button: {
      transition: 'all 0.25s ease-in-out',
      cursor: 'pointer',
      minWidth: ({ iconOnly }) => {
        if (!iconOnly) return 64
        return 0
      },
      backgroundColor: ({ appearance, variant }: ButtonProps): string => {
        if (appearance === 'minimal') {
          switch (variant) {
            case 'primary':
              return theme.colorBackgroundButtonMinimalPrimaryDefault
            case 'basic':
              return theme.colorBackgroundButtonMinimalBasicDefault
            case 'danger':
              return theme.colorBackgroundButtonMinimalDangerDefault
            default:
              return theme.colorBackgroundButtonMinimalPrimaryDefault
          }
        }

        switch (variant) {
          case 'primary':
            return theme.colorBackgroundButtonFilledPrimaryDefault
          case 'basic':
            return theme.colorBackgroundButtonFilledBasicDefault
          case 'danger':
            return theme.colorBackgroundButtonFilledDangerDefault
          default:
            return theme.colorBackgroundButtonFilledPrimaryDefault
        }
      },
      height: ({ size }: ButtonProps) => {
        switch (size) {
          case 'regular':
            return theme.heightButtonRegular
          case 'small':
            return theme.heightButtonSmall
          case 'large':
            return theme.heightButtonLarge
          default:
            return theme.heightButtonRegular
        }
      },
      width: ({ iconOnly, size }) => {
        if (!iconOnly) return 'auto'
        switch (size) {
          case 'regular':
            return theme.heightButtonRegular
          case 'small':
            return theme.heightButtonSmall
          case 'large':
            return theme.heightButtonLarge
          default:
            return theme.heightButtonRegular
        }
      },
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      padding: (p: ButtonProps & { iconOnly?: boolean }) => {
        let padding = theme.paddingButtonRegularRightLeft
        switch (p.size) {
          case 'regular':
            padding = theme.paddingButtonRegularRightLeft
            break
          case 'small':
            padding = theme.paddingButtonSmallRightLeft
            break
          case 'large':
            padding = theme.paddingButtonLargeRightLeft
            break
          default:
            padding = theme.paddingButtonRegularRightLeft
        }

        return !p.iconOnly ? `0px ${padding}` : 0
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
              return theme.colorBackgroundButtonFilledPrimaryHover
            case 'basic':
              return theme.colorBackgroundButtonFilledBasicHover
            case 'danger':
              return theme.colorBackgroundButtonFilledDangerHover
            default:
              return theme.colorBackgroundButtonFilledPrimaryHover
          }
        },
        '& > svg': {
          transform: 'scale(1.15)',
        },
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: ({ appearance }: ButtonProps): string => {
          if (appearance === 'minimal') {
            return theme.colorBackgroundButtonMinimalDisabled
          }

          return theme.colorBackgroundButtonFilledDisabled
        },
        '& > *': {
          color: ({ appearance }: ButtonProps): string => {
            if (appearance === 'minimal') {
              return theme.colorTextButtonMinimalDisabled
            }

            return theme.colorTextButtonFilledDisabled
          },
        },
      },
      '&:focus': {
        outline: 0,
      },
      '&.active': {
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
              return theme.colorBackgroundButtonFilledPrimaryActive
            case 'basic':
              return theme.colorBackgroundButtonFilledBasicActive
            case 'danger':
              return theme.colorBackgroundButtonFilledDangerActive
            default:
              return theme.colorBackgroundButtonFilledPrimaryActive
          }
        },
      },
    },
    children: {
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
            return theme.colorTextButtonFilledPrimary
          case 'basic':
            return theme.colorTextButtonFilledBasic
          case 'danger':
            return theme.colorTextButtonFilledDanger
          default:
            return theme.colorTextButtonFilledPrimary
        }
      },
    },
  }),
)
