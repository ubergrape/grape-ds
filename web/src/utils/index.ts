import { useEffect, useRef } from 'react'
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

export const usePrevious = <T extends unknown>(v: T): T | undefined => {
  const prevRef = useRef<T>()
  useEffect(() => {
    prevRef.current = v
  })
  return prevRef.current
}

export const parseToken = (token: string): number =>
  parseFloat(token.split('px')[0])
