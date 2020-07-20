import tokens from '../../../tokens/web'
import { ButtonProps } from './index'

export default {
  button: {
    fontFamily: "'Noto Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif",
    backgroundColor: ({ color, variant }: ButtonProps): string => {
      if (variant === 'minimal') return 'transparent'

      switch (color) {
        case 'primary':
          return tokens.colorBackgroundButtonStandardPrimaryDefault
          break
        case 'basic':
          return tokens.colorBackgroundButtonStandardBasicDefault
          break
        case 'danger':
          return tokens.colorBackgroundButtonStandardDangerDefault
          break
        default:
          return tokens.colorBackgroundButtonStandardPrimaryDefault
      }
    },
    height: ({ size }: ButtonProps): number => {
      return size === 'small' ? 24 : 32
    },
    color: ({ color, variant }: ButtonProps): string => {
      if (variant === 'minimal') {
        switch (color) {
          case 'primary':
            return tokens.colorTextButtonMinimalPrimary
            break
          case 'basic':
            return tokens.colorTextButtonMinimalBasic
            break
          case 'danger':
            return tokens.colorTextButtonMinimalDanger
            break
          default:
            return tokens.colorTextButtonMinimalPrimary
        }
      }

      switch (color) {
        case 'primary':
          return tokens.colorTextButtonStandardPrimary
          break
        case 'basic':
          return tokens.colorTextButtonStandardBasic
          break
        case 'danger':
          return tokens.colorTextButtonStandardDanger
          break
        default:
          return tokens.colorTextButtonStandardPrimary
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
              return tokens.colorBackgroundButtonMinimalPrimaryHover
              break
            case 'basic':
              return tokens.colorBackgroundButtonMinimalBasicHover
              break
            case 'danger':
              return tokens.colorBackgroundButtonMinimalDangerHover
              break
            default:
              return tokens.colorBackgroundButtonMinimalPrimaryHover
          }
        }

        switch (color) {
          case 'primary':
            return tokens.colorBackgroundButtonStandardPrimaryHover
            break
          case 'basic':
            return tokens.colorBackgroundButtonStandardBasicHover
            break
          case 'danger':
            return tokens.colorBackgroundButtonStandardDangerHover
            break
          default:
            return tokens.colorBackgroundButtonStandardPrimaryHover
        }
      },
    },
    '&:active': {
      backgroundColor: ({ color, variant }: ButtonProps): string => {
        if (variant === 'minimal') {
          switch (color) {
            case 'primary':
              return tokens.colorBackgroundButtonMinimalPrimaryActive
              break
            case 'basic':
              return tokens.colorBackgroundButtonMinimalBasicActive
              break
            case 'danger':
              return tokens.colorBackgroundButtonMinimalDangerActive
              break
            default:
              return tokens.colorBackgroundButtonMinimalPrimaryActive
          }
        }

        switch (color) {
          case 'primary':
            return tokens.colorBackgroundButtonStandardPrimaryActive
            break
          case 'basic':
            return tokens.colorBackgroundButtonStandardBasicActive
            break
          case 'danger':
            return tokens.colorBackgroundButtonStandardDangerActive
            break
          default:
            return tokens.colorBackgroundButtonStandardPrimaryActive
        }
      },
    },
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: ({ variant }: ButtonProps): string => {
        if (variant === 'minimal') return 'transparent'

        return tokens.colorBackgroundButtonStandardDisabled
      },
      color: ({ variant }: ButtonProps): string => {
        if (variant === 'minimal') {
          return tokens.colorTextButtonMinimalDisabled
        }

        return tokens.colorTextButtonStandardDisabled
      },
    },
  },
}
