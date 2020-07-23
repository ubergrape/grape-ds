import { JssStyle } from 'jss'
import { ButtonProps } from './index'

export default (theme: Record<string, string>): Record<string, JssStyle> => ({
  button: {
    fontFamily: "'Noto Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif",
    fontWeight: 600,
    backgroundColor: ({ variant, color }: ButtonProps): string => {
      if (variant === 'minimal') return 'transparent'

      switch (color) {
        case 'primary':
          return theme.colorBackgroundButtonStandardPrimaryDefault
          break
        case 'basic':
          return theme.colorBackgroundButtonStandardBasicDefault
          break
        case 'danger':
          return theme.colorBackgroundButtonStandardDangerDefault
          break
        default:
          return theme.colorBackgroundButtonStandardPrimaryDefault
      }
    },
    height: ({ size }: ButtonProps): number => {
      return size === 'small' ? 24 : 32
    },
    color: ({ color, variant }: ButtonProps): string => {
      if (variant === 'minimal') {
        switch (color) {
          case 'primary':
            return theme.colorTextButtonMinimalPrimary
            break
          case 'basic':
            return theme.colorTextButtonMinimalBasic
            break
          case 'danger':
            return theme.colorTextButtonMinimalDanger
            break
          default:
            return theme.colorTextButtonMinimalPrimary
        }
      }

      switch (color) {
        case 'primary':
          return theme.colorTextButtonStandardPrimary
          break
        case 'basic':
          return theme.colorTextButtonStandardBasic
          break
        case 'danger':
          return theme.colorTextButtonStandardDanger
          break
        default:
          return theme.colorTextButtonStandardPrimary
      }
    },
    padding: [0, 16],
    border: 0,
    borderRadius: 8,
    '&:hover': {
      backgroundColor: ({ color, variant }: ButtonProps): string => {
        if (variant === 'minimal') {
          switch (color) {
            case 'primary':
              return theme.colorBackgroundButtonMinimalPrimaryHover
              break
            case 'basic':
              return theme.colorBackgroundButtonMinimalBasicHover
              break
            case 'danger':
              return theme.colorBackgroundButtonMinimalDangerHover
              break
            default:
              return theme.colorBackgroundButtonMinimalPrimaryHover
          }
        }

        switch (color) {
          case 'primary':
            return theme.colorBackgroundButtonStandardPrimaryHover
            break
          case 'basic':
            return theme.colorBackgroundButtonStandardBasicHover
            break
          case 'danger':
            return theme.colorBackgroundButtonStandardDangerHover
            break
          default:
            return theme.colorBackgroundButtonStandardPrimaryHover
        }
      },
    },
    '&:active': {
      backgroundColor: ({ color, variant }: ButtonProps): string => {
        if (variant === 'minimal') {
          switch (color) {
            case 'primary':
              return theme.colorBackgroundButtonMinimalPrimaryActive
              break
            case 'basic':
              return theme.colorBackgroundButtonMinimalBasicActive
              break
            case 'danger':
              return theme.colorBackgroundButtonMinimalDangerActive
              break
            default:
              return theme.colorBackgroundButtonMinimalPrimaryActive
          }
        }

        switch (color) {
          case 'primary':
            return theme.colorBackgroundButtonStandardPrimaryActive
            break
          case 'basic':
            return theme.colorBackgroundButtonStandardBasicActive
            break
          case 'danger':
            return theme.colorBackgroundButtonStandardDangerActive
            break
          default:
            return theme.colorBackgroundButtonStandardPrimaryActive
        }
      },
    },
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: ({ variant }: ButtonProps): string => {
        if (variant === 'minimal') return 'transparent'

        return theme.colorBackgroundButtonStandardDisabled
      },
      color: ({ variant }: ButtonProps): string => {
        if (variant === 'minimal') {
          return theme.colorTextButtonMinimalDisabled
        }

        return theme.colorTextButtonStandardDisabled
      },
    },
  },
})
