import { sizes, textSizes } from '../types'

export const genUid = (): string => Math.random().toString(36).substring(7)

export const getTextSize = (size: sizes): textSizes => {
  switch (size) {
    case 'large':
      return 'large'
    case 'regular':
      return 'base'
    case 'small':
      return 'small'
    default:
      return 'base'
  }
}

export const parseToken = (token: string): number =>
  parseInt(token.split('px')[0], 10)
